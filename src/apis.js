import axios from 'axios';
import download from 'downloadjs'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

const getPdf = () => {
  const {host, protocol} = window.location;
  api.get('/pdf', {
    params: {
      host: host,
      protocol: protocol,
    },
    responseType: 'blob',
  })
    .then(response => {
      const content = response.headers['content-type'];
      download(response.data, 'sample.pdf', content)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};


const test = () => {
  api.get('/test')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      // always executed
    });
};

export {getPdf, test};
