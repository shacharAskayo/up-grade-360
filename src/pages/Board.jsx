import React, { useEffect } from 'react'
import Axios from 'axios';

var axios = Axios.create({
  withCredentials: false,
});

export default function Board() {

  useEffect(async () => {
    const data = await axios.get('https://panel-reports.herokuapp.com/reports-explained/',
      {
        auth: {
          username: 'maor',
          password: '1234'
        }
      }
    )
    console.log(data.data);
  }, [])


  return (
    <div>
      <h2>board</h2>
    </div>
  )
}
