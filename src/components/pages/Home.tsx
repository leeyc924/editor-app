import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    try {
      const result = axios({
        // url: 'https://fass-editor-api.herokuapp.com/ping',
        url: 'http://localhost:8005/editor/ping',
        method: 'get',
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>hello world</div>
  );
};

export default (React.memo(Home));