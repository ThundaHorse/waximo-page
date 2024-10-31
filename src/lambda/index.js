const request = require('request');
require('dotenv').config();

exports.handler = (event, context, callback) => {
  // const key =
  //   'AKfycbwxXrkSXI9VNv8z_oU4jQhvqroAK5xt7KSD0zT2yFsfiwm1uwlorLhxLNKDBmWg4v0D';
  const apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
  const sheetKey = process.env.REACT_APP_GOOGLE_SHEETS_KEY;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${apiKey}/values/Sheet1!A1:Z?alt=json&key=${sheetKey}`;

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
