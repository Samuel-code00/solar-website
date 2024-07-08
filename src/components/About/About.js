import { Link } from "react-router-dom";
import "./About.css";
import home from "./home (3) 1.png"

export default function About(){
    return(
        <div>
            <div className="default">
                <h1 className="cost">About us</h1>
                <p className="cost">Practical renewable energy technology that reduces costs <br/> and helps the environment</p>
                <div className="link2">
                    <img src={home} width={15}/>
                    <Link to="/">Home</Link>
                    <p> | About</p>
                </div>
            </div>

        </div>
    )
}