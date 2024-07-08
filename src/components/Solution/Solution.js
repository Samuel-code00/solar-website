import "./Solution.css"
import batt from "./battery.png"
import comm from "./comm.png"
import green from "./Green.png"
import industry from "./industry.png"
import test from "./new.png"
import rio from "./rio.png"

export default function Solution(){
    return(
        <div>
            <div className="solu">
                <p>SOLUTIONS OF SOLAR ENERGY</p>
                <h2>Produce Your Own Clean Energy <br/>Save the Environment</h2>
            </div>

            <div className="wrapper1">
              <div>
                <img src={batt} width={90}/>
                <p>Battery Storage<br/> Solutions</p>
                <p id="gene">We fully utilise the latest corporate renewable energy technology to generate significant energy.</p>
              </div>

              <div>
                <iframe class="video" width="500" height="290" src="https://www.youtube.com/embed/1kUE0BZtTRc?si=0ywgTuB0Wfkx5e57" title="YouTube video player" frameborder="0" clipboard-write  gyroscope  web-share muted autoplay></iframe>
                <div className="link3"></div>
              </div>

              <div>
                <img src={comm} width={90}/>
                <p>Commercial solar<br/> energy</p>
                <p id="gene">We fully utilise the latest corporate renewable energy technology to generate significant energy.</p>
              </div>
            </div>

            <div className="wrapper2">
              <div>
                  <img src={rio} width={90}/>
                  <p>High Return On<br/> Investment</p>
                  <p id="gene">We fully utilise the latest corporate renewable energy technology to generate significant energy.</p>
                </div>

              <div>
                  <img src={test} width={90}/>
                  <p>Boost Green <br/> Credentials</p>
                  <p id="gene">We fully utilise the latest corporate renewable energy technology to generate significant energy.</p>
                </div>

              <div>
                  <img src={industry} width={90}/>
                  <p>Industrial Solar<br/> Energy</p>
                  <p id="gene">We fully utilise the latest corporate renewable energy technology to generate significant energy.</p>
                </div>

              <div>
                  <img src={green} width={90}/>
                  <p>Scale With New<br/> Technologies</p>
                  <p id="gene">We fully utilise the latest corporate renewable energy technology to generate significant energy.</p>
                </div>

                
            </div>
        </div>
    )
}