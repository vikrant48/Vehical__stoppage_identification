import './App.css'
import React, { useState, useEffect } from 'react';
import Mapfunction from './component/map';
import StoppageForm from './component/stoppageform';
import FileReader from './component/FileReader';
import StoppageProcessor from './component/StoppageProcessor';
import 'leaflet/dist/leaflet.css';
import { Box, Typography,TextField, colors,Grid} from '@mui/material';

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
      <Box p={2}>
      <Typography variant="h4" align="center" gutterBottom>
        Vehicle Stoppage Identification And Visualization
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Enter a URL to view data on the map
          </Typography>
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
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" gutterBottom>
            Default URL: <a href={defaultUrl} target="_blank" rel="noopener noreferrer" style={urlStyle}>{defaultUrl}</a>
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <StoppageForm threshold={threshold} setThreshold={setThreshold} />
        </Grid>
        <Grid item xs={12} md={8}>
          <FileReader url={url} setData={setData} />
        </Grid>
        <Grid item xs={12}>
          <StoppageProcessor data={data} setPath={setPath} setStoppages={setStoppages} threshold={threshold} />
          <Mapfunction path={path} stoppages={stoppages} />
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default App
