
import "./Portfolio.css"
import { PiCursorClickDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";



export function Portfolio() {

    return(

        <>
        <div id="portfolio">
        <p id="view">
        <Link to="/full-portfolio">
 View More Projects Here <PiCursorClickDuotone />
</Link>

      </p>

        <div id="portfolio" class="main">
          <a target="_blank" href="https://github.com/drojaa/CS411group-30" > 


          <p id="image">
          <img src={one}></img>
              </p>
             
                <p id="port-desc"> <span style={{
    fontWeight: "bolder",
  }}>Bookify <PiCursorClickDuotone /> </span> <br></br>
                A web app that generates personalized Spotify playlists from book or movie selections. Users enter a title and author, and OpenAI’s ChatGPT creates a playlist matching the work’s themes and vibe. Playlists are saved to the user’s Spotify account. Users can rate and comment, fostering community engagement. <span id="golden">Built with Flask, React, Tailwind CSS, Spotify API, and OpenAI integration.</span>
                </p>
          </a>
              
            </div>

            <div id="portfolio" class="main">
          <a target="_blank" href="https://web-production-bbed.up.railway.app/voter_analytics/" > 

          <p id="image">
          <img src="src/public/images/one.png"></img>
              </p>
             
                <p id="port-desc"> <span style={{
    fontWeight: "bolder",
  }}>Voter Analytics  <PiCursorClickDuotone /> </span> <br></br>
                An interactive dashboard for Newton, MA voter data. Users can browse, filter, and paginate through voter records, and analyze data via bar and pie charts to gain insights into demographics and election trends. <span id="golden"> Built with Django, Python, React (JS), and CSS. </span>
                </p>
          </a>   
            </div>


            <div id="portfolio" class="main">
          <a target="_blank" href="https://github.com/hirwaishimwe/rad-report" > 

          <p id="image">
          <img src="src/public/three.png"></img>
              </p>
             
                <p id="port-desc"> <span style={{
    fontWeight: "bolder",
  }}>Radiology Report<PiCursorClickDuotone /> </span> <br></br>
                A web application for doctors to manage and assess patient X-ray exams related to COVID-19. Users can securely create, view, update, and delete radiology reports with JWT authentication for protected access. <span id="golden">Built with MERN Stack: MongoDB, Express, React, NodeJS, and JWT Authentication.</span>
                </p>
          </a>   
            </div>

        </div>
        </>
    )
}

