import "./Project.css"
import home from "./home (3) 1.png"

export default function Project(){
    return(
        <div>
           <div className="default">
                <h1 className="cost">Projects</h1>
                <p className="cost">Practical renewable energy technology that reduces costs <br/> and helps the environment</p>
                <div className="link2">
                    <img src={home} width={15}/>
                    <a href="">Home</a>
                    <p> | Projects</p>
                </div>
            </div>  
        </div>
    )
}