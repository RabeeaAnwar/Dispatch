import React from 'react';
import './activity.css';
import { ActivityCard } from './ActivityCard';


export const Activity = () => {

  //Getting response data from Local Storage

  let ActivityObj = JSON.parse(localStorage.getItem("requestItems"));
  let rows = [];
  rows = ActivityObj;

  return (
    <div className='activity-container'>

      {/* Mapping data into cards */}
      
      {(rows == 0 || rows == null) ? 'No recent Activity' :
        rows.map((row, index) =>
          <ActivityCard
            key={index}
            url={row.inputData.url}
            type={row.inputData.type}
            response={row.response.data}
            statusCode={row.response.status}

          />)
      }

    </div>
  )
}
