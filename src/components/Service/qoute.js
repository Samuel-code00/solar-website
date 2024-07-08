import "./quote.css"

export default function Quote() {
  return (
    <div>
        <div className="quote-container">
            <div className="quote-text">
                <p className="last-para">REQUEST A QUOTE</p>
                <h1>Talk About How We<br/> Can Help You Reduce<br/> Your Energy</h1>
                <p>costs and successfully manage your carbon emissions with<br/> investment free solar technologies.</p>
            </div>

            <div className="quote-inputs">
                <input type="text" placeholder="Fullname" required/>
                <input type="email" placeholder="Email Address" required/>
                <input type="number" placeholder="Phone No" required/>
                <textarea name="message" id="message" cols="10" rows="6" placeholder="Message"></textarea>
                <a className="send" href="">Send Message</a>
            </div>
        </div>
    </div>
  )
}
