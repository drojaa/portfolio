
import "./Home.css"
import { Aboutme } from "../../components/Aboutme/Aboutme"
import { Name } from "../../components/Name/Name"
import { Nav } from "../../components/Nav/Nav"
import { Links } from "../../components/Links/links"
import { Experience } from "../../components/Experience/Experience"

import { useEffect, useState } from "react"
import { Portfolio } from "../../components/Portfolio/Portfolio"
export function Home() {
const [pos, setPos] = useState({ x:0, y:0}) //storing the mouse coordinates


useEffect(() => {
    function handleMove(e){
        setPos({x: e.clientX, y: e.clientY})

        document.documentElement.style.setProperty("--mouseX", e.clientX + "px");
        document.documentElement.style.setProperty("--mouseY", e.clientY + "px");
    }
    window.addEventListener("mousemove", handleMove)
  }, []);
  
    return (
        <>
        
        <div id="home-container">

    

        <div>
        
         <Name/>
         <Nav/>
         <Links/>
        </div>

        <div id="non-sticky">
        <Aboutme/>
        <Experience/>
        <br></br>
        <Portfolio/>
        </div>

        
        </div>
        <div class="pointer" aria-hidden="true"></div>

        </>
    )
}