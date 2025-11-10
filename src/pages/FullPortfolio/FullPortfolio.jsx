import "./FullPortfolio.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function FullPortfolio() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      document.documentElement.style.setProperty("--mouseX", x);
      document.documentElement.style.setProperty("--mouseY", y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div id="port-container">
      <div id="port-title">
  <h3 className="title">
    <Link to="/" className="back-link">
      <FaArrowLeft className="left-icon" />
      Derinell Rojas
    </Link>
  </h3>
  <h1 style="color:white;" >Additional Projects</h1>
</div>

    <div class="table-container"> 
        
        <table>
            <tr style="color:white;">
                <th>Project</th>
                <th>Description</th>
                <th>Link</th>
            </tr>
            <tr>
                <td>Sticky Notes</td>
                <td>Drag-and-drop sticky notes with editable text, colors, and easy add/remove functionality</td>
   
                <td id="grey"><a target="_blank" href="https://sticky-notes-beta-ten.vercel.app/">sticky-notes-beta-ten.vercel.app</a></td>
            </tr>
            <tr>
                <td>Tic Tac Toe</td>
                <td>Neon style Tic Tac Toe with automatic win/draw detection</td>
             
                <td id="grey"><a target="_blank" href="https://tic-tac-toe-liart-gamma.vercel.app/">tic-tac-toe-liart-gamma.vercel.app/</a></td>
            </tr>
            <tr>
                <td>Older Portfolio</td>
                <td>An older portfolio site</td>

                <td id="grey"><a target="_blank" href="https://mp-3-blue.vercel.app/">portfolio.vercel.app/</a></td>
            </tr>
            <tr>
                <td>'Insecure' Cast Members</td>
                <td>Fetches cast info from an API to display real names, character names, and photos from Insecure</td>
     
                <td id="grey"><a target="_blank" href="https://mp-2-nine.vercel.app/">tv-cast.vercel.app/</a></td>
            </tr>
            <tr>
                <td>Restraunt Simulation</td>
                <td>A mock restaurant site demonstrating a full order flow — from menu browsing to checkout — built to practice dynamic UI updates and data handling.
                </td>
  
                <td id="grey"><a target="_blank" href="https://web-production-bbed.up.railway.app/restaurant/main">restraunt.railway.app/</a></td>
            </tr>
            <tr>
                <td>Quote of the Day</td>
                <td>A web app featuring Keke Palmer’s motivational quotes, where users can fetch a random quote, view all quotes at once, and read a brief “About Me” section about her</td>
 
                <td id="grey"><a target="_blank" href="https://web-production-bbed.up.railway.app/quotes/">quotes.railway.app/</a></td>
           
            </tr>
            <tr>
                <td>Url Shortner</td>
                <td>A tool that converts long URLs into short, shareable links with just one click</td>
         
                <td id="grey"><a target="_blank" href="https://drojas-studio.vercel.app/">url-shortener.vercel.app/</a></td>
            </tr>
            <tr>
                <td>Flashcards</td>
                <td>Flashcards app with front/back view for studying.</td>
                <td id="grey"><a target="_blank" href="https://flashcards-ten-psi.vercel.app/">flashcards.vercel.app/</a></td>
            </tr>
            <tr>
                <td>Weather</td>
                <td>A simple weather app where users can enter any city (e.g., “Boston”) to instantly view the current forecast</td>
     
                <td id="grey"><a target="_blank" href="https://mp-4-kappa.vercel.app/">weather.vercel.app/</a></td>
            </tr>
         
           
        </table>
        </div>
      </div>

      <div className="pointer" aria-hidden="true"></div>
    </>
  );
}
