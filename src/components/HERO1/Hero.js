import "./Hero.css";
import home from "./Home.png"
import icon from "./spark.png" 
import wind from "./wind vine.png"


export default function Hero(){
    return(
        <div>
            {/* <div> */}
            {/* <marquee className='marquee' behavior="" direction="left" bgcolor="#0A9642">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam enim fugit ex illum. Nobis vel eveniet possimus aut at ratione ullam praesentium nisi iure, animi .</marquee> */}
                {/* <img id="home-img" src={home}/>
                <button>&#10094;</button>
                <button>&#10095;</button> */}
                
            {/* </div> */}

            <div className="install"> 
                <div className="res-install">
                    <img src={icon}/>
                    <p>Residential Installation</p>
                    <p>Solar PV, Battery Storage, Heat Recovery Ventilation <br/> Systems & EV Charging</p>
                
                </div>
                <div className="comm-install">
                    <img src={wind}/>
                    <p>Commercial Installation</p>
                    <p>Solar PV, Battery Storage, Heat Recovery Ventilation <br/> Systems & EV Charging</p>
                </div>


            </div>

        </div>
    )
}