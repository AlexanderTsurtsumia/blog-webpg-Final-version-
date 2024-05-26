import './style.css';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function tologin ( ) {
        navigate ("/")
    }
    return(
        <header className="mb-5 header"> 
        
           <div
            className="row w-100 justify-content-between align-items-center g-2 header"
           >
            <div className="col ps-5">
                <h1 className="headlogo">typology</h1>
            </div>
            <div className="col pe-3">
                <nav className="nav justify-content-center nav1  ">
                    <a className="nav-link padding" href="/Home"><p className='link'>HOME</p></a>
                    <a className="nav-link padding" href="/"><p className='link'>Log In</p></a>
                    <a className="nav-link padding" href="/Signup"><p className='link'>Sign up </p></a>
                    <button type="button" data-bs-toggle="offcanvas"  data-bs-target="#Id1" aria-controls="Id1" className="btn border-0 burgerbtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="burgar bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                   
                    <div
                        className="offcanvas offcanvas-end"
                        data-bs-scroll="true"
                        tabIndex="-1"
                        id="Id1"
                        aria-labelledby="Enable both scrolling & backdrop"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="Enable both scrolling & backdrop">
                                Account serings
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="offcanvas-body mt-2">
                            <a className="nav-link burgerlink" href="/Home"><p className='lin'>HOME</p></a>
                            <a className="nav-link burgerlink" href="/"><p className='lin'>Log In</p></a>
                            <a className="nav-link burgerlink" href="/Signup"><p className='lin'>Sign up</p></a>
                            <button className='my-1 py-3 btn w-100 btn-primary log-btn' onClick={()=> tologin()}>Log Out</button>
                        </div>
                    </div>
                    
                </nav>
            </div>
           </div>
           
        </header>
    )
}


export default Header;