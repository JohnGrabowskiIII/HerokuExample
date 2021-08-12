import './App.css';

import {useState, useEffect} from 'react';

const url = (path) => {
  return process.env.NODE_ENV === "development" ? `http://localhost:7777${path}` : path;
}

function App() {

  const [data, setData] = useState("Hewwo :3")
  useEffect(() => {
    fetch(url("/api/"))
    .then(res => res.json())
    .then(apiData => setData(apiData.data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        API DATA RETURNED: {data}
      </header>
    </div>
  );
}

export default App;
