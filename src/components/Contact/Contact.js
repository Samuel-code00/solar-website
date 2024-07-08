import "./Contact.css";
import { Link } from "react-router-dom";
import icon from "./icon.png"
import main from "./mail.png"
import home from "./home (3) 1.png"

export default function Contact(){
    return(
        <div >
            <div className="default">
                <h1 className="cost">Contact us</h1>
                <p className="cost">Practical renewable energy technology that reduces costs <br/> and helps the environment</p>
                <div className="link2">
                    <img src={home} width={15}/>
                    <Link to="/">Home</Link>
                    <p> | Contact</p>
                </div>
            </div>
           <div className="main">
               <div className="wrap">
                   <div className="quote">
                      <p className="head">REQUEST A QUOTE</p>
                      <hr/>
                      <h2 >Talk About How We Can Help <br/> You Reduce Your Energy</h2>
                   </div>
    
                   <div>
                      <p><b>GENERAL ENQUIRY</b></p>
                       <input className="input" type="text" placeholder="Full-Name" required />
                       <input className="input" type="number" placeholder="Phone No" required/><br/>
                       <input className="input" type="email" placeholder="Email Address" id="service" required /><br/>
                       <input className="input" type="text" placeholder="Location" />
                       <input className="input" type="text" placeholder="Address" required /><br/>
                       <input className="input" type="text" placeholder="How did you hear of us?" id="service" />
    
                      <p><b>I AM INTRESTED IN SOLAR ENERGY FOR MY</b></p>
                      <select name="service" id="service" >
                          <option value="Residential">Choose Service</option>
                          <option value="Residential">Residential Solar</option>
                          <option value="Commercial">Commercial Solar</option>
                          <option value="Industrial">Industrial Solar</option>
                      </select><br/>
                      <textarea name="message" id="message" cols="40" rows="10" placeholder="Your Message eg list of Appliance you want to power"></textarea>
                   </div>
                   <a className="send" href="">Send Message</a>
               </div>

               <div className="num">
                   <p><b>CONTACT INFORMATION</b></p>
                   <div className="number">
                       <img src={icon}/>
                       <p>Phone Number:</p>
                       <p>+234 708 203 1588</p>
                   </div>
       
                   <div className="number">
                       <img src={main}/>
                       <p>Email Address:</p>
                       <p>samuelsolar00@gmail.com</p>
                   </div>
     
                   <div className="number">
                       <img src={main}/>
                       <p>Location:</p>
                       <p>No 4 Koma Close Garki Abuja</p>
                   </div>
               </div>
           </div>
        </div>
    
    )
}