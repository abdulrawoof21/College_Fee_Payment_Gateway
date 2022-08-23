import React, {useState, useEffect} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import {Button, Form} from 'react-bootstrap';

function Login(){
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, []);

    const checkCaptcha = () => {
        let user_captcha = document.getElementById('captcha').value;
        if (validateCaptcha(user_captcha)===true)
            return true;
        else {
            document.getElementById('captcha').value = "";
            return false;
        }
    };

    const handleSubmit = () => {        
        let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('mail').value);
        let password = document.getElementById('pwd').value;
        if (mail && password.length>=8 && checkCaptcha()===true)
            alert('Login Successful');
        else{
            if (!mail)
                document.getElementById('mail-valid').innerHTML = "<Form.Label class='text-danger'>Enter valid mail id<Form.Label>"
            else
                document.getElementById('mail-valid').innerHTML = ""
            if (password.length<8)
                document.getElementById('pwd-valid').innerHTML = "<Form.Label class='text-danger'>Password must be atleast be 8 Characters long<Form.Label>"
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
            <h4 style={{display: 'flex', justifyContent: 'center'}}>Real Madrid CF</h4>
            <Form style={formStyle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" 
                    required={true} id="mail"/>
                    <span id='mail-valid'></span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" 
                    required={true} id="pwd"/>
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
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                </div>
            </Form>
        </div>
    );
}

const boxStyle = {
    marginTop: '30%',
}

const formStyle = {
    padding: '15px', 
    border: '2px solid black', 
    backgroundColor: "rgba(255,250,250, 0.8)"
}

export default Login;