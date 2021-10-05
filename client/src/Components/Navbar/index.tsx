 import redbacklogo from "../../assets/redbacklogo.png"
import "./index.css"

const Navbar = () => {
    return (
        <div className="container-fluid bg-dark">
            <nav className="navbar navbar-light bg-dark">
                <div className="redbacklogowrapper"> 
                    <img className="img-fluid" src={redbacklogo} height="50" width="50" alt="redbacklogo" />
                </div>
            </nav>
        </div>
    )
}

export default Navbar; 