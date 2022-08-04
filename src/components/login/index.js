import React, {useState, useEffect} from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import {
    BrowserRouter,
  Routes,
  Route,
  useNavigate
  } from "react-router-dom";
import {Button, Form} from 'react-bootstrap';
import UserForm from '../form';
//import { useNavigate } from "react-router";

function Login(){
    const navigate = useNavigate()
    
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, []);

    const [form, setForm] = useState({
        email: "",
        pwd: "",
    });
    //const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    const checkCaptcha = () => {
        let user_captcha = document.getElementById('captcha').value;
        if (validateCaptcha(user_captcha)===true)
            return true;
        else {
            document.getElementById('captcha').value = "";
            return false;
        }
    };

    async function handleSubmit(e) {        
        let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email);
        // if (mail && form.pwd.length>=8 && checkCaptcha()===true){
        if(form.email!=="krishna@annauniv.edu" && form.pwd!=="krishna123@"){
          
            alert('Wrong credentials');
            e.preventDefault();
        }
        else{
            // e.preventDefault();
            if (!mail)
                document.getElementById('mail-valid').innerHTML = "<Form.Label class='text-danger'>Enter valid mail id<Form.Label>"
            else
                document.getElementById('mail-valid').innerHTML = ""
            if (form.pwd.length<8)
                document.getElementById('pwd-valid').innerHTML = "<Form.Label class='text-danger'>Must be atleast be 8 Characters long<Form.Label>"
            else
                document.getElementById('pwd-valid').innerHTML = ""
            if (checkCaptcha()===false)
                document.getElementById('captcha-valid').innerHTML = "<Form.Label class='text-danger'>Invalid Captcha<Form.Label>"
            else
                document.getElementById('captcha-valid').innerHTML = ""
        }
    }

    return (
        <div style={boxStyle}>
            <h4 style={{display: 'flex', justifyContent: 'center',color:'white'}}>Student Login</h4>
            <Form style={formStyle} onSubmit={handleSubmit} action='/next'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" 
                    required={true} id="mail" onChange={(e) => updateForm({ email: e.target.value })}/>
                    <span id='mail-valid'></span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" 
                    required={true} id="pwd" onChange={(e) => updateForm({ pwd: e.target.value })}/>
                    <span id='pwd-valid'></span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCaptcha">
                    <Form.Label>Captcha</Form.Label>
                    <LoadCanvasTemplate />
                    <Form.Control type="text" placeholder="Enter Captcha" name="captcha" 
                    required={true} id="captcha"/>
                    <span id='captcha-valid'></span>
                </Form.Group>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
}

const boxStyle = {
    marginTop: '35%',
}

const formStyle = {
    padding: '15px', 
    border: '2px solid black', 
    backgroundColor: "rgba(255,250,250, 0.8)"
}

export default Login;