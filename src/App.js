import { useEffect, useState } from "react";
import { getData } from "./utils";

/*
Status:
I want to fetch the value of data from an api in the backend in useEffect() hook. but when the function call of axios
is moved to another file (like utils.js) to make the component code look clean.

Problem: 
When the axios function call is moved to another file, the function then returns a promise
instead of the desired data. My TL suggested to use redux for achieving this. But, we need to figure
out a way to achieve this functionality without using redux.

Possible solution:
Will try to create a simple function to post GET request to a dummy api using axios and return
the data to use in the useEffect() hook of the App component.
*/

function App() {
  // data and setData to maintain the state of the App
  const [data, setData] = useState({ message: "Hello vro", type: "response" });

  // will try to insert the fetched value from api into data using axios
  useEffect(() => {
    let mydata = getData();
    console.log(mydata);
    setData(mydata);
  }, []);

  return <div>{data.title}</div>;
}

export default App;
