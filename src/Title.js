import { useEffect } from "react";

const Title = (props) => {
  useEffect(() => {
    console.log("Title component mounted");

    // the cleanup function
    return () => {
      console.log("Title component unmounted");
      return false;
    };
  });
  return <div>Title: {props.data.title}</div>;
};

export default Title;
