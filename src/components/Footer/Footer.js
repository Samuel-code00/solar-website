import "./Footer.css";
import icon from "./icon.png"
import icon1 from "./icon (1).png"
import mail from "./mail (1) 1.png"
import { Link } from "react-router-dom";


export default function Footer() {
  return(
    <div className="container">
      <div className="wrapper">
         <div>
           <h1 className="name">SOLARIS GREEN ENERGY</h1>
           <p className="about">Engr Arinze is the CEO of Solaris Green Energy,<br/>a leading innovator in the solar energy industry.<br/> With a passion for sustainability and a vision for<br/> a greener future, He has driven Solaris Green <br/>Energy to the forefront of solar technology</p>
         </div>
         <div className="conts">
            <p className="name"><b>Contact Information</b></p>
            <hr/>
            <div className="contact">
               <img src={icon}/>
               <p>0708 203 1588</p>
            </div>
            <div className="contact">
               <img src={icon1}/>
               <p>samuelsolar00@gmail.com</p>
            </div>
          </div >
          <div className="conts">
              <p className="name"><b>Quick Links</b></p>
              <hr/>
             <div className="quick-links">
               <a href="">Project</a>
               <a href="">Our Teams</a>
               <Link to="/Contact">Get Quote</Link>
               <a href="">Payment</a>
             </div>
          </div>
       </div>
        <div className="new">
           <img src={mail}/>
           <p id="all">Subscribe to our newsletter.</p>
           <div id="news">
             <input className="email" placeholder="Enter your email address..."/>
             <a href="" className="sub">Subscribe</a>
           </div>
        </div>
        <div className="solar">
          <p id="all">&copy; Solaris 2024. All Right Reserved.</p>
          <div className="last">
            <a href=""> privacy policy</a>
            <a href=""> Terms & Condition</a>
            <Link to="/About"> About us</Link>
          </div>
        </div>
      
    </div>
  )
}