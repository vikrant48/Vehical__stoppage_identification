// FileReader.jsx
import { useEffect } from 'react';
import axios from 'axios';

const FileReader = ({url, setData }) => {
  useEffect(() => {
    // Fetch GPS data
  if (url) {
    fetchFromUrl(url);
  }
}, [url]);

const fetchFromUrl = (url) => {
  axios.get(url)
    .then(response => {
      const csvData = response.data;
      const parsedData = parseCSV(csvData);
      setData(parsedData);
    })
    .catch(error => console.error('Error fetching data:', error));
};

  const parseCSV = (csv) => {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return result;
  };

  return null;
};

export default FileReader;