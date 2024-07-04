import './App.css'
import React, { useState, useEffect } from 'react';
import Mapfunction from './component/map';
import StoppageForm from './component/stoppageform';
import FileReader from './component/FileReader';
import StoppageProcessor from './component/StoppageProcessor';
import 'leaflet/dist/leaflet.css';
import { Box, Typography,TextField, colors } from '@mui/material';

function App() {
  const [data,setData] = useState([]);
  const [path, setPath] = useState([]);
  const [stoppages, setStoppages] = useState([]);
  const [threshold, setThreshold] = useState(5); // Default threshold in minutes
  const [url, setUrl] = useState('');
  const defaultUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpmaT83zrwRi6SauBto4ouhXBHGy6hjFbtWbO3GsR1tyXo1lGvZmaRfLaESyXpZmCdkzrUUF_k2ULW/pub?gid=0&single=true&output=csv';
 
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  const urlStyle = {
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'normal',
    maxWidth: '100%',
  };


  return (
    <>
      <div>
      <h1>Vehicle Stoppage Identification And Visualization</h1>
      <Typography variant="h5" gutterBottom>
        Enter a URL to view data on the map
      </Typography>
      <Box>
          <TextField 
            label="Enter CSV URL" 
            variant="outlined" 
            value={url} 
            onChange={handleUrlChange} 
            fullWidth 
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              style: { 
                color: 'white', 
                backgroundColor: 'gray',
                padding: '10px',
                borderRadius: '4px',
              },
            }}
          />
        </Box>
        <Typography variant="body1" gutterBottom>
          Default URL: <a href={defaultUrl} target="_blank" rel="noopener noreferrer" style={urlStyle}>{defaultUrl}</a>
        </Typography>
        <br/>
      <StoppageForm threshold={threshold} setThreshold={setThreshold} />
      <br />
      <FileReader url={url} setData={setData} />
      <StoppageProcessor data={data} setPath={setPath} setStoppages={setStoppages} threshold={threshold} />
      <Mapfunction path={path} stoppages={stoppages} />
    </div>
    </>
  );
}

export default App
