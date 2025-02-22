import React, { useState, useEffect } from 'react';
    import './App.css';

    function App() {
      const [backendData, setBackendData] = useState({ message: "Loading..." });

      useEffect(() => {
        fetch('/api')
          .then(response => response.json())
          .then(data => {
            setBackendData(data);
          });
      }, []);

      return (
        <div className="App">
          <h1>Frontend for Document Management System</h1>
          <p>{backendData.message}</p>
        </div>
      );
    }

    export default App;
