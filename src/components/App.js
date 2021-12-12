import React, { useEffect, useState } from "react";
import * as Routes from '../helper/constants/routes';

const App = () => {
  const [receipt, setReceipt] = useState('');
  useEffect(() => {
    const url = Routes.routeReceipt;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setReceipt(json)
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return <></>;
};

export default App;
