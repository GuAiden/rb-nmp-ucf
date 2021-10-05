 import redbacklogo from "../../assets/redbacklogo.png"
import "./index.css"

const Navbar = () => {
    return (
        <div class="container-fluid bg-dark">
            <nav class="navbar navbar-light bg-dark">
                <img class="mx-left" src={redbacklogo} width="50" height="50" alt="" />
            </nav>
        </div>
    )
}

export default Navbar; 