import React from 'react'
import { useNavigate } from "react-router-dom";
import './Restaurent.scss'

const main=[
  {
      id:1,
      
      tagLine1:"Finest Treat for Your Taste Buds",
      tagLine2:"Freshest Ingredients Guranteed",
      tagLine3:"  Call us  @+91 1234567890"
  },
]
function Home() {
  const navigate=useNavigate();
  function start (){
    navigate("/snacks")
  }

  const output1=main.map(value => 
    <div>
         <table key={value.id}>
    <tr>
    <td><b>{value.tagLine1} </b></td>
    </tr>
    <tr>
    <td ><b>{value.tagLine2}</b></td>
    </tr>
    <tr>
    <td ><b>{value.tagLine3}</b></td>
    </tr>
  </table>
    </div>
  )
  return (
    <div>
      <div className='landing'>
        
        <h1>🏠SPICY HUT RESTAURENT</h1>
        <tr className='line'>{output1}</tr>
       <div className='button'>
       <p><button  type='submit'onClick={start} >Order Online </button></p> 
        </div>
      </div>
    </div>
  )
}

export default Home
