import axios from 'axios';

const getPdf = () => {
  // console.log(window.location.host);
  // const {host, protocol} = window.location;
  axios.get('/pdf', {
    params: {
      target: window.location.href.toString(),
    }
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

export default getPdf;
