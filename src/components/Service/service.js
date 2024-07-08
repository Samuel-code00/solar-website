import "./service.css"
import { Link } from "react-router-dom";
import home from "./home (3) 1.png"
import star from "./shock.png"
import resident from "./residential.jpeg"
import homes from "./home solar.jpeg"

export default function Service() {
  return (
    <div>
        <div className="default">
           <h1 className="cost">Services</h1>
           <p className="cost">Practical renewable energy technology that reduces costs <br/> and helps the environment</p>
           <div className="link2">
               <img src={home} width={15}/>
               <Link to="/">Home</Link>
               <p> | Services</p>
           </div>
        </div>

        <div className="service-pro ">
            <p className="para">PROCESS AND THE SOLUTIONS WE CAN PROVIDE</p><hr/>
            <h1 className="smart">SMART & SUSTAINABLE ENERGY <br/> CONSUMPTION</h1>
            <p>Powerful & intelligent energy storage solutions,helping you maximize your energy potential. </p>
        </div>

        <div className="ser-type">
            <div className="ser-text">
                <img src={star} width={80}/>
                <h3><b>Automated energy <br/>storage</b></h3>
                <p>leading renewable energy solutions provider that is sources<br/> are harnessed across the world. Present in 18 countries <br/>across Asia, Australia, Europe Africa and the Americas, Veztaz<br/> is powering.</p>
            </div>

            <div className="resident">
                <img src={resident}/>
            </div>
        </div>

        <div className="ser-type">
            <div className="resident">
                <img src={homes}/>
            </div>
            <div className="ser-text">
                <img src={star} width={80}/>
                <h3><b>Potential of your<br/> renewables</b></h3>
                <p>leading renewable energy solutions provider that is sources<br/> are harnessed across the world. Present in 18 countries <br/>across Asia, Australia, Europe Africa and the Americas, Veztaz<br/> is powering.</p>
            </div>

        </div>
    </div>
  )
}
