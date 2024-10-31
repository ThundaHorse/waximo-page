const request = require('request');

exports.handler = (event, context, callback) => {
  const key =
    'AKfycbwxXrkSXI9VNv8z_oU4jQhvqroAK5xt7KSD0zT2yFsfiwm1uwlorLhxLNKDBmWg4v0D';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${key}/values/Sheet1!A1:Z?alt=json&key=AIzaSyB1zMjPQmx_OGE6WirpFCcTIF7VQrqQgXA`;

  request(url, (error, response, body) => {
    if (error) {
      console.log('An error occurred:', error);
      callback(error);
    } else {
      const data = JSON.parse(body);
      // Handle the retrieved data
      console.log(data);
      callback(null, data);
    }
  });
};
