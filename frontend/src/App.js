import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import AddNewDevContainer from './components/AddNewDevContainer';

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFetch = () => {
    setIsLoading(true);
    fetch('/bootcamps')
      .then(result => result.json())
      .then(result => {
        setData(result);
        setIsLoading(false)
      })
      .catch(() => {
        setErrorMessage("Unable to fetch data");
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (!data.length) {
      handleFetch()
    }
  }, [])

  return (
    <div className="App">
      <AddNewDevContainer handleFetch={handleFetch}></AddNewDevContainer>
      <Gallery data={data} handleFetch={handleFetch}></Gallery>
    </div>
  );
}

export default App;
