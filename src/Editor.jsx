import React, { useState } from "react";
import './style.css';
import Footer from "./Footer";
import Header from "./Header";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";

function Editor () {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    
    function post (event) {
        event.preventDefault();
        
        axios.post("https://apitest.reachstar.io/blog/add", {
            title : title,
            description : text,

        }).then(response => response.data).catch(error => {
          if (error.response) {
            console.log(error.response);
          }
        });
        console.log(title + text)
    }

    return (
        <React.Fragment>
            <Header />
            <div className="mt-5 pt-5 container">
                <form method="POST" className="" onSubmit={(event)=> post(event)}>
                    <div className="form-group mb-5">
                        <label htmlFor="name">Write the Title of your blog here:</label>
                        <input className="form-control" type="name" id="title" placeholder="lorem ipsum" onChange={(event)=> setTitle(event.target.value)}   />
                    </div>

                    <div className="form-group mb-5">
                    <label >Write the contents of your blog here:</label>
                        <ReactQuill theme="snow"  onChange={setText} />
                    </div>
                    <p className="bigger">Finally, press this button to save your blog!</p>
                    <input type="submit" className="btn btn-danger border-radius-3 add-btn w-100 mt-3" value={"Add Blog"} />
                </form>
            </div>


            
            
        <Footer />
        </React.Fragment>
    )
};

export default Editor;