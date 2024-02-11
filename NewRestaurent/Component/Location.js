import React from 'react'
import { useNavigate } from "react-router-dom";
const location=[
    {
        id:1,
        line:"Anna Nagar",
        line1:"15,10th MainRoad",
        line2:"Anna Nagar",
        line3:"Chennai-600102"
    },
    {
        id:2,
        line:"Velachery",
        line1:"5,  3rd Road",
        line2:"Vijaya  Nagar",
        line3:"Chennai-600042"
    },
    
]
function Location() {

    const navigate=useNavigate();
    function previous (){
      navigate("/mainSideDish")
    }
    const output3=location.map(value => 
        <div>
             <table key={value.id}>
        <tr>
        <td><b>{value.line} </b></td>
        </tr>
        <tr>
        <td ><b>{value.line1}</b></td>
        </tr>
        <tr>
        <td ><b>{value.line2}</b></td>
        </tr>
        <tr>
        <td ><b>{value.line3}</b></td>
        </tr>
        <br></br>
      </table>
        </div>
    )
  return (
       
<div className='path3'>

      
<h1>Location</h1>
   <div className='main'>
     <div>
<td>{output3} </td> 
  </div>
</div> 
<div className='next'>
      <p><button  type='submit' onClick={previous} >Previous Page</button></p>  
 </div>      
</div>
  )
}

export default Location
