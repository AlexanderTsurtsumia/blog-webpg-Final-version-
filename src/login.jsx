import React from "react";
import './style.css';
import { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Basichead from "./basichead";
function Login () {

    const navigate = useNavigate();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    function Logi (event) {
        event.preventDefault()
        axios.post("https://apitest.reachstar.io/signin", {
            email: email,
            password: password,
        }).then(function(response) {
            navigate("/Home")
        }).catch(function(error) {
            window.alert("ელ-ფოსტა ან პაროლი არასწორია!")
        }
        );
        console.log(email + " " + password );
    }
    function signup (){
        navigate("/Signup")
        window.location.reload()
    }
    return (
        <React.Fragment>
            <Basichead />

            <div className="container">
                <div
                    className="row access justify-content-center align-items-center g-2"
                >
                    <div className="col-md-6 col-12">
                        <form method="POST" className="" onSubmit={(event)=> Logi(event)}>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail</label>
                                <input className="form-control" type="email" id="email" placeholder="john-doe123@gmail.com" onChange={(event)=> setEmail(event.target.value)}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input className="form-control" type="password" id="password" placeholder="********" onChange={(event)=> setPassword(event.target.value)}   />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-danger border-radius-3 add-btn w-100 mt-3" value={"Log In"} />
                            </div>
                            <p className="text-center bigger mt-5">Dont have an account? <br /> 
                            Please Sign UP!</p>
                            <div className="form-group">
                                <button type="btn" className="btn btn-danger border-radius-3 add-btn w-100 mt-2" onClick={()=> signup()}><p className="bigger">Sign UP</p></button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>

            <Footer />

        </React.Fragment>
    )
};

export default Login;