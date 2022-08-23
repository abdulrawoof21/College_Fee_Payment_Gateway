import React from 'react'
import {useState, useEffect} from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import {
    BrowserRouter,
  Routes,
  Route,
  useNavigate
  } from "react-router-dom";
import {Button, Form} from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import background from "./images/sanber.jpg";
import './next.css'
const Next = () => {
  const navigate = useNavigate()
  async function handleSubmit(e) {  }
  return (
    <div style={bg} id="master">
        
          <div id="paycard" style={{padding: '15px', 
    border: '2px solid black', 
    backgroundColor: "rgba(255,250,250, 0.8)",display:"table",position:"relative",margin:"auto",marginTop:150,justifyContent:"center",border:1,borderBlockColor:"black",borderBlockWidth:5}}>
            <p>Name: Krishnaraj</p>
            <p>Reg No: 2021178039</p>
            <p>Course: MCA</p>
            <p>Department: Information Science and Technology</p>
            <p>Amount to be paid: 25000</p>
            <Form onSubmit={handleSubmit} action='/pgate'>

            </Form>
            <button type="submit" style={{backgroundColor:"yellow",borderRadius:5}} onClick={() => navigate('/payment')}>
              Pay Now 
            </button>
            
          </div>
        
      </div>
  )
}
const boxStyle = {
  marginTop: '30%',
}
const bg = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  position:"absolute"
}

const formStyle = {
  padding: '15px', 
  border: '2px solid black', 
  backgroundColor: "rgba(255,250,250, 0.8)"
}

export default Next