import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home";
import Detailed from "./Detailed";
import Login from "./login";
import Signup from "./Signup"
import Editor from "./Editor";
import React from "react";
import Editblog from "./Editblog";

    function App () {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Login />}></Route>
                    <Route index path="/Home" element={<Home />}></Route>
                    <Route index path="/Detailed/:id" element={<Detailed />}></Route>
                    <Route index path="Signup" element={<Signup />}></Route>
                    <Route index path="Editor" element={<Editor />}></Route>
                    <Route index path="/Editblog/:id" element={<Editblog />}></Route>
                </Routes>
            </BrowserRouter>
        )

    }


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>)














var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>)