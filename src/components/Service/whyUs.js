import "./whyUs.css"
import free from "./free.png"
import time from "./time.png"
import money from "./money.png"
import grid from "./grid.jpeg"

export default function Whyus() {
  return (
    <div>
        <div className="wrappers">
            <div className="wrap-container">
               <div>
                   <div className="why-use">
                      <p>World without Waste</p>
                      <h1>Why Use Solaris?</h1>
                   </div>
                   <div className="time">
                       <img src={time} width={100}/>
                       <div>
                           <p><b>Save Time</b></p>
                           <p>Get up to 3 quotes from our selected suppliers<br/> by filling in only 1 form</p>
                       </div>
                   </div>
       
                   <div className="time">
                       <img src={money} width={100}/>
                       <div>
                           <p><b>Save Money</b></p>
                           <p>Get up to 3 quotes from our selected suppliers<br/> by filling in only 1 form</p>
                       </div>
                   </div>
       
                   <div className="time">
                       <img src={free} width={100}/>
                       <div>
                           <p><b>Free and No Obligation</b></p>
                           <p>Get up to 3 quotes from our selected suppliers<br/> by filling in only 1 form</p>
                       </div>
                   </div>
               </div>
            </div>

            <div className="mini2">
               <img src={grid} width={410} height={280}/>
               <div className="mini">
                  <div className="mini-first">
                    <p>CALL FOR A QUOTE:</p>
                    <p>+234 7082 031 588</p>
                  </div>

                  <div className="mini-second">
                    <div>
                    <p>EMAIL ADDRESS:</p>
                    <p><b>samuelsolar00@gmail.com</b></p>
                    </div>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}
