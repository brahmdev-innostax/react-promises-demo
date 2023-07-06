// file to make various calls to the backend
import axios from "axios";
// const axios = require("axios");

function getData() {
  // a dummy api to send GET requests to
  const backendUrl = "https://jsonplaceholder.typicode.com/todos/1";

  // get the data using GET method in axios
  return axios
    .get(backendUrl)
    .then((res) => {
      console.log("data received successfully");
      return res.data;
    })
    .catch((err) => {
      console.log("Error occurred: " + err);
      return { title: "ERROR!!!" };
    });
}

export { getData };
