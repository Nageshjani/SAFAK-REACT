import React from 'react'
import styled from "styled-components";


const con=styled.div`
background-color:black;
display:flex;
align-items: center;
justify-content: center


`

const Home = () => {
  return (
    <div className='con'>
       <div><button type="button" class="btn btn-danger" >DELETE</button></div>
       <div><button type="button" class="btn btn-danger" >DELETE</button></div>

       
    </div>
  )
}

export default Home
