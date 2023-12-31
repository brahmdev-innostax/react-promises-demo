import { useEffect, useState } from "react";
import { getData } from "./utils";
import Title from "./Title";

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

Update: Resolved the issue by again calling .then() function the data promise received
from the getData() function of utils.js
Added much more code while some of the concepts like: useEffect cleanup function, componentUmounting, 
checking the online and offline status of site using window.addEventListener('online', () => {}), etc.
*/

function App() {
  // data and setData to maintain the state of the App
  const [data, setData] = useState({ message: "Hello vro", type: "response" });
  const [shouldShow, setShouldShow] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine);

  console.log(window);

  window.addEventListener("online", () => {
    setOnlineStatus(true);
  });
  window.addEventListener("offline", () => {
    setOnlineStatus(false);
  });

  // will try to insert the fetched value from api into data using axios
  useEffect(() => {
    let mydata = getData();
    // console.log(mydata);
    mydata.then((res) => {
      console.log(data);
      setShouldShow(true);
      setData(res);
    });

    return () => {
      window.removeEventListener("online", null);
      window.removeEventListener("offline", null);
    };
  }, []);

  return (
    <div>
      {shouldShow && <Title data={data} />}
      <button onClick={() => setShouldShow(!shouldShow)}>Close</button>
      <div>You are: {onlineStatus ? "ONLINE" : "OFFLINE"}</div>
    </div>
  );
}

export default App;
