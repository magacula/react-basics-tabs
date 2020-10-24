import React, { useState, useEffect } from 'react';
// import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'http://course-api.netlify.app/api/react-tabs-project';

function App() {
  // set up State Hooks
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);


  return <h2>Tabs Project Setup</h2>;
}

export default App;
