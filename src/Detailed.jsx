import React, { useEffect, useState  } from "react";
import './style.css';
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function Detailed() {

    const [data, setData] = useState([]);
    const [comment, setComment] = useState([]);
    const { id} = useParams();
    const navigate = useNavigate();

    useEffect(function(){
        axios.get("https://apitest.reachstar.io/blog/get/" + id).then(function(response){
            setData(response.data)
            }).catch(function(error){
                console.log(error)
        });
    });

    function Deleteblog(blogIds) {
        axios.delete("https://apitest.reachstar.io/blog/delete/" + blogIds ).then(function(response) {
            navigate ("/Home");
            console.log(response.data);
        }).catch(function(err) {
            console.log(err);
        });
        
        
    }
    function post (event) {
        event.preventDefault();
        axios.post("https://apitest.reachstar.io/comment/add/" + data.id, {
            comment: comment,
        } ).then(function(response) {
            console.log(response.data, "success!");
        }).catch(function(err) {
            console.log(err);
        });
    }

    return (
        <React.Fragment>
                <Header />
                <div className="container pt-5  w-100 p-1 container mt-5 mb-5 d-flex justify-content-center ">
                    <div
                        className="row  mom w-100 mt-3 p-5 justify-content-center align-items-center g-2"
                    >
                        <div className="col-12">

                                <div className="textcard pt-4"key={1}>
                                    <div className="col-12 text-left">
                                        <h2 className="" dangerouslySetInnerHTML={{__html: data.title}}></h2>
                                        <p className="" dangerouslySetInnerHTML={{__html: data.description}}></p>  
                                        <p className="txt"></p>
                                        <button className="btn btn-danger" onClick={() => Deleteblog(data.id)} >Delete</button>
                                        <Link to={"/Editblog/" + data.id} className="btn">
                                            Edit
                                        </Link>                                    
                                        <hr className="mt-5 btmline"/>                           
                                    </div> 
                                </div>

                                <div className="commentscard pt-3">
                                    <form method="POST" className="" onSubmit={(event)=> post(event)}>
                                        <div className="form-group mb-5">
                                            <label htmlFor="name">Please, add your comments here!</label>
                                            <input className="form-control" type="name" id="title" placeholder="lorem ipsum" onChange={(event)=> setComment(event.target.value)}   />
                                            <input type="submit" className="btn btn-danger border-radius-3 add-btn w-100 mt-3" value={"Add Comment"} />
 
                                        </div>
                                    </form>
                                </div>

                                
                        </div>
                    </div>
                </div>
                <Footer />
                </React.Fragment>
    )
}





export default Detailed;