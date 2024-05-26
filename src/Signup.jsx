import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import Basichead from "./basichead";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup () {
    const navigate = useNavigate();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [name , setName] = useState("");

    function Logi (event) {
        event.preventDefault()
        axios.post("https://apitest.reachstar.io/signup", {
            email: email,
            password: password,
            name: name,
        }).then(function(response) {
            navigate("/")
        }).catch(function(error) {
            window.alert("ელ-ფოსტა უკვე დარეგისტრირებულია!")
        }
        );
        console.log(name + " " + email + " " + password );
    }
    function log (){
        navigate("/")
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
                                <label htmlFor="name">name</label>
                                <input className="form-control" type="name" id="name" placeholder="alex" onChange={(event)=> setName(event.target.value)}   />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail</label>
                                <input className="form-control" type="email" id="email" placeholder="john-doe123@gmail.com" onChange={(event)=> setEmail(event.target.value)}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input className="form-control" type="password" id="password" placeholder="********" onChange={(event)=> setPassword(event.target.value)}   />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-danger border-radius-3 add-btn w-100 mt-3" value={"Sign up"} />
                            </div>
                            <p className="text-center bigger mt-5">Already have an account? <br /> 
                            Please log in!</p>
                            <div className="form-group">
                                <button type="btn" className="btn btn-danger border-radius-3 add-btn w-100 mt-2" onClick={()=> log()}><p className="bigger">Log In</p></button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
            
            <Footer />

        </React.Fragment>
    )
};

export default Signup;