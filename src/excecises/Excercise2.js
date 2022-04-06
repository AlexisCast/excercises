import React, { useEffect, useState } from 'react';
import './excercises.scss';

export const Excercise2 = () => {

   const [respData, setRespData] = useState({});

   useEffect(() => {
      fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/kickstarterc27b67e.json')
         .then((res) => res.json())
         .then((data) => {
            console.log("data: ", data);
            setRespData(data);
            console.log(respData);
         })
   }, [])

   return (
      <div className='container'>
         {
            respData.length > 0 ?
               <table>
                  <thead>
                     <tr>
                        <th>S. No.</th>
                        <th>Percentage Funded</th>
                        <th>Amount Pledge</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        respData.map((data, index) => {
                           return (<tr key={index}>{
                              (<>
                                 <td>{data["s.no"]}</td>
                                 <td>{data["percentage.funded"]}</td>
                                 <td>{data["amt.pledged"]}</td>
                              </>
                              )
                           }</tr>)
                        })
                     }
                  </tbody>
               </table>
               :
               <p>Loading</p>
         }
      </div>
   )
}
