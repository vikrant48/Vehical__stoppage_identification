
# VEHICLE STOPPAGE IDENTIFICATION 

## Overview
This project is a web application designed to identify and visualize vehicle stoppages using GPS data. The application processes real-time data to detect stoppage points and displays them on an interactive map, providing detailed information about each stoppage.
<br/>
 
 ![image](https://github.com/vikrant48/Vehical__stoppage_identification/assets/106874326/5be555cf-798d-48c3-9012-e752f3dacc94)


 
## Features

   Interactive Map: Visualize vehicle paths and stoppages on a Leaflet map with custom markers.\
   Real-time Data Processing: Fetch and parse GPS data from a user-provided CSV URL.\
   Stoppage Detection: Identify stoppages based on speed and time thresholds, and display detailed information about each stoppage.\
   User Customization: Allow users to input custom CSV URLs and adjust stoppage detection thresholds.

## Technologies Used

   Frontend: React, Material-UI\
   Mapping: Leaflet\
   Data Fetching: Axios

## Components

   App: Main component managing state and layout.\
   Mapfunction: Renders the interactive map with vehicle paths and stoppages.\
   StoppageForm: Provides an interface for users to set stoppage detection thresholds.\
   FileReader: Fetches and parses CSV data from a provided URL.\
   StoppageProcessor: Processes the GPS data to detect stoppages.
   
## How to Use

   Enter CSV URL: Provide the URL of a CSV file containing GPS data.\
   Set Threshold: Adjust the threshold for stoppage detection in minutes.\
   View on Map: The map will display the vehicle path and detected stoppages with detailed information.



## Installation 
   Clone the repository:
```
   git clone https://github.com/yourusername/vehicle-stoppage-visualization.git
```
   Navigate to the project directory:
   
```
   cd vehicle-stoppage-visualization
```
   
   Install dependencies:
```
   npm install
```
   Start the development server:
```
   npm start
```

## Usage

   Open your browser and navigate to http://localhost:3000. \
   Enter the URL of a CSV file containing GPS data.\
   Set the stoppage detection threshold in minutes.\
   View the vehicle path and stoppages on the map.


 ## Example CSV Format
 ```csv
latitude,longitude,speed,eventdate,eventGeneratedTime
12.9715987,77.5945627,0,1622548800000,1622548800000
12.9715987,77.5945627,5,1622548860000,1622548860000
...

```
## Contact
For any inquiries or feedback, please contact vikrantchauhan9794@gmail.com.


