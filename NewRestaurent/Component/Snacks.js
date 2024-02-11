import React from 'react'
import './Restaurent.scss'
import { useNavigate } from "react-router-dom";

const menu=[
    {
        id:1,
        dishName:"Panner Tikka",
        cost:"180",
        icon:"💲",
    },  {
        id:2,
        dishName:"Gobi 65",
        cost:"130",
        icon:"💲",
    },
    {
        id:3,
        dishName:"Veg Pakkoda",
        cost:"120",
        icon:"💲", 
    },
    {
        id:4,
        dishName:"Mirchi Bajji",
        cost:"280",
        icon:"💲", 
    },
    {
        id:5,
        dishName:"Chilli Gobi",
        cost:"180",
        icon:"💲", 
    },
    {
        id:6,
        dishName:"Corn Manchurian",
        cost:"280",
        icon:"💲", 
    },
    {
        id:7,
        dishName:"Chilli Paneer",
        cost:"180",
        icon:"💲", 
    },
    {
        id:8,
        dishName:"Samosa",
        cost:"80",
        icon:"💲", 
    },
    {
        id:9,
        dishName:"Pani Puri",
        cost:"100",
        icon:"💲", 
    },
    {
        id:10,
        dishName:"Masala Puri",
        cost:"130",
        icon:"💲", 
    },

]

function Snacks() {

    const navigate=useNavigate();
    function MainSideDish (){
      navigate("/mainSideDish")
    }
    const output1=menu.map(value => 
        <div>
             <table key={value.id}>
        <tr>
        <td><b>{value.dishName} </b></td>
        <td ><b>{value.icon}{value.cost}</b></td>
        </tr>
      </table>
        </div>
       
        )
       
  return (
    <div className='path1'>
            <h1 >Snacks</h1>
        <div className='menu'> 
        <div>
            <td>{output1}</td>
            
        </div>
        </div>
        <div className='next'>
          <p><button  type='submit' onClick={MainSideDish} >Next Page</button></p>  
            </div>
        
        
    </div>
  )
}

export default Snacks
