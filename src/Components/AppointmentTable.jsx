import React from 'react'
import "../Styles/AppointmentTable.css";
function AppointmentTable() {
  return (
    <div>
  <table>
    <tr>
        <th>Parent Name</th>
        
        <th>Start_Time</th>
        <th>End_time</th>
        <th>Accept</th>
        <th>Decline</th>
    </tr>
    <tr>
        <td>Alana Nur</td>
       
        <td>9.00AM</td>
        <td>5.00PM</td>
        <td><button id="a-acc">Accept</button></td>
        <td><button id="a-dec">Decline</button></td>
    </tr>
  </table>
    </div>
  )
}

export default AppointmentTable