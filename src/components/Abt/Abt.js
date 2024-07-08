import "./Abt.css"
import phone from "./phone.png"
import panel from "./panel-man.png"
import { Link } from "react-router-dom"

export default function Abt(){
    return(
        <div className="abt">
            
           <div className="abt1">
              <div>
                 <h3>Get in touch to discuss <br/> how we can help you!</h3>
                 <p>We're pleased to be welcoming customers to join us.</p>
                 <div className="demo">
                     <Link to="/Contact" className="request">Request a Quote</Link>
                     <img src={phone} width={90}/>
                     <p>Phone: +234 708 203 1588</p>
                 </div>
                 {/* <div className="link4"></div> */}
              </div>
                 <div>
                     <img src={panel} width={320}/>
                 </div>
           </div>

        </div>
    )
}