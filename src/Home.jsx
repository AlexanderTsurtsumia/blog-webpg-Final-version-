import React, { useEffect, useState  } from "react";
import './style.css';
import { Link, useNavigate} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";


function Home() {


    const navigate = useNavigate();
    const [data, setData] = useState([])

    useEffect(function(){
        axios.get("https://apitest.reachstar.io/blog/list").then(function(response){
            setData(response.data)
            }).catch(function(error){
                console.log(error)
        })
    }, []);
    
    function editorbtn () {
        navigate ("/Editor")
    }

    function Deletepost(blogId) {
        axios.delete("https://apitest.reachstar.io/blog/delete/" + blogId).then(function(response) {
            window.location.reload();
            console.log(response.data);
        }).catch(function(err) {
            console.log(err);
        });
        
    }
    return (
        <React.Fragment>
                <Header />
                <div className="container  pt-5 w-100  p-1 container mt-5 mb-5 d-flex justify-content-center ">
                    <div
                        className="row  mom w-100 mt-3 p-5 justify-content-center align-items-center g-2"
                    >
                        <div className="col-12">
                            {
                                data.map(( item, index ) =>
                                <div className="textcard pt-4">
                                    <div className="col-12 text-left">
                                        <p className="card_num">{index+1}</p>
                                        <h1 className="" dangerouslySetInnerHTML={{__html: item.title}}></h1> 
                                        <p className="txt"></p>
                                        <button className="btn btn-danger"onClick={()=> Deletepost(item.id)}>Delete</button>                                
                                        <Link to={"/Detailed/" + item.id} className="btn link3">
                                            see more
                                        </Link>    
                                        <hr className="mt-5 btmline"/>                           
                                    </div> 
                                </div>

                                )
                            }
                            <button className="button add-btn btn w-100 my-5" onClick={()=> editorbtn()}> 
                                <p className="btn-txt bigger">Add Blog</p>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
                </React.Fragment>
    )
}




export default Home;