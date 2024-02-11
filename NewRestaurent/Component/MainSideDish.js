import React from 'react'
import './Restaurent.scss'
import { useNavigate } from "react-router-dom";

const main=[
    {
        id:1,
        dishName:"Veg Fried Rice",
        cost:"230",
        icon:"💲",
    },
    {
        id:2,
        dishName:"Schezwan  Fried Rice",
        cost:"300",
        icon:"💲",
    },
    {
        id:3,
        dishName:"Veg Biriyani",
        cost:"230",
        icon:"💲",
    },
    {
        id:4,
        dishName:"Paneer Biriyani",
        cost:"270",
        icon:"💲",
    },
    {
        id:5,
        dishName:"Mushroom Biriyani",
        cost:"280",
        icon:"💲",
    },
    {
        id:6,
        dishName:"Veg Noodels",
        cost:"240",
        icon:"💲",
    },
    {
        id:7,
        dishName:"Schezwan Noodles",
        cost:"260",
        icon:"💲",
    },
    {
        id:8,
        dishName:"Veg Pulav",
        cost:"230",
        icon:"💲",
    },
    {
        id:9,
        dishName:"Kashmeri pulav",
        cost:"270",
        icon:"💲",
    },
    {
        id:10,
        dishName:"Sambar Rice",
        cost:"200",
        icon:"💲",
    },
    
    
]

function MainSideDish() {
    const navigate=useNavigate();
    function next (){
      navigate("/location")
    }

    function previous (){
        navigate("/snacks")
      }

    const output2=main.map(value =>
       
        <table key={value.id}>
        <tr>
        <td><b>{value.dishName} </b></td>
        <td ><b>{value.icon}{value.cost}</b></td>
        </tr>
      </table>
        )
  return (

<div className='path2'>

      
    <h1>Fried Rice</h1>
       <div className='main'>
         <div>
<td>{output2} </td> 
      </div>
   </div> 
   <div className='next'>
          <p><button  type='submit' onClick={next} >Next Page</button><span>        </span>
          <button  type='submit' onClick={previous} >Previous Page</button>
          </p>  
     </div>      
 </div>
  )
}

export default MainSideDish
