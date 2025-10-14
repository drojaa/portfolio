
import "./Portfolio.css"
import { PiCursorClickDuotone } from "react-icons/pi";



export function Portfolio() {

    return(

        <>
        <div id="portfolio">
        <p id="view">View More Projects Here <PiCursorClickDuotone/> </p>
        <div id="portfolio" class="main">
          <a href="https://cs412-9c2s.onrender.com/voter_analytics/" > 

          <p id="image">
          <img src="src/public/two.png"></img>
              </p>
             
                <p id="port-desc"> <span>Bookify <PiCursorClickDuotone /> </span> <br></br>
                A web app that generates personalized Spotify playlists from book or movie selections. Users enter a title and author, and OpenAI’s ChatGPT creates a playlist matching the work’s themes and vibe. Playlists are saved to the user’s Spotify account. Users can rate and comment, fostering community engagement. Built with Flask, React, Tailwind CSS, Spotify API, and OpenAI integration.
                </p>
          </a>
              
            </div>

            <div id="portfolio" class="main">
          <a href="https://cs412-9c2s.onrender.com/voter_analytics/" > 

          <p id="image">
          <img src="src/public/one.png"></img>
              </p>
             
                <p id="port-desc"> <span>Voter Analytics  <PiCursorClickDuotone /> </span> <br></br>
                An interactive dashboard for Newton, MA voter data. Users can browse, filter, and paginate through voter records, and analyze data via bar and pie charts to gain insights into demographics and election trends. Built with Django, React (JS), and CSS.
                </p>
          </a>   
            </div>


            <div id="portfolio" class="main">
          <a href="https://cs412-9c2s.onrender.com/voter_analytics/" > 

          <p id="image">
          <img src="src/public/three.png"></img>
              </p>
             
                <p id="port-desc"> <span>Radiology Report<PiCursorClickDuotone /> </span> <br></br>
                An interactive dashboard for Newton, MA voter data. Users can browse, filter, and paginate through voter records, and analyze data via bar and pie charts to gain insights into demographics and election trends. Built with Django, React (JS), and CSS.
                </p>
          </a>   
            </div>

        </div>
        </>
    )
}