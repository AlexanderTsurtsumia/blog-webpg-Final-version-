import React, { useEffect, useState } from "react";
import './style.css';
import Footer from "./Footer";
import Header from "./Header";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useParams } from "react-router-dom";

function Editblog () {
    
    const { id} = useParams();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [data, setData] = useState([]);

    function post (event) {
        event.preventDefault();

        axios.put("https://apitest.reachstar.io/blog/edit/" + data.id, {
            title : title,
            description : text,

        }).then(response => response.data).catch(error => {
          if (error.response) {
            console.log(error.response);
          }
        });
        console.log(title + text)
    }

   useEffect(function(){
        axios.get("https://apitest.reachstar.io/blog/get/" + id).then(function(response){
            setData(response.data)
            }).catch(function(error){
                console.log(error)
        });
    });

    return (
        <React.Fragment>
            <Header />
            <div className="mt-5 pt-5 container">
                <form method="POST" className="" onSubmit={(event)=> post(event)}>
                    <div className="form-group mb-5">
                        <label htmlFor="name">please edit your post on: {data.title}  and perss the "Edit Blog" button!</label>
                        <input className="form-control" type="name" id="title" placeholder="lorem ipsum" onChange={(event)=> setTitle(event.target.value)}   />
                    </div>

                    <div className="form-group mb-5">
                        <ReactQuill theme="snow"  onChange={setText} />
                    </div>

                    <input type="submit" className="btn btn-danger border-radius-3 add-btn w-100 mt-3" value={"Edit Blog"} />
                </form>
            </div>


            
            
        <Footer />
        </React.Fragment>
    )
};

export default Editblog;