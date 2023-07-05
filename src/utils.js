// file to make various calls to the backend
// import { axios } from "axios";
const axios = require("axios");

function getData() {
  // a dummy api to post GET requests to
  const backendUrl = "https://jsonplaceholder.typicode.com/todos/1";
  let data = "hello";
  // get the data using GET method in axios
  axios
    .get(backendUrl)
    .then((res) => {
      data = res.data;
      console.log("data received successfully");
    })
    .catch((err) => {
      data = { title: "ERROR!!!" };
      console.log("Error occurred: " + err);
    });

  return data;
}

export { getData };
