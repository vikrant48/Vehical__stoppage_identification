// StoppageProcessor.jsx
import { useEffect } from 'react';

const StoppageProcessor = ({ data, setPath, setStoppages, threshold }) => {
  useEffect(() => {
    if (data.length > 0) {
      processGPSData(data);
    }
  }, [data, threshold]);

  const processGPSData = (gpsData) => {
    const path = gpsData.map(point => ({
      lat: parseFloat(point.latitude),
      lng: parseFloat(point.longitude),
      speed: parseFloat(point.speed),
      date: Number(point.eventdate),
      time: Number(point.eventGeneratedTime)
    }));
    setPath(path);
    console.log("Path Data: ", path); // Logging path data for debugging

    const stoppages = [];
    let stopStart = null;
    for (let i = 1; i < path.length; i++) {
      const prev = path[i - 1];
      const curr = path[i];
      const isStationary = curr.speed < 10;
      if (isStationary) {
        if (!stopStart) stopStart = prev;
      } else if (stopStart) {
        const duration = (curr.time - stopStart.time) / 60000; 
        if (duration >= threshold) {
          stoppages.push({
            lat: stopStart.lat,
            lng: stopStart.lng,
            reachTime: stopStart.time,
            endTime: curr.time,
            duration: duration.toFixed(0)
          });
        }
        stopStart = null;
      }
    }
    setStoppages(stoppages);
    console.log('Stoppages:', stoppages); // Debugging output
  };

  return null;
};

export default StoppageProcessor;