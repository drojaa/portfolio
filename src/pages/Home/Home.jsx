
import "./Home.css"
import { Aboutme } from "../../components/Aboutme/Aboutme"
import { Name } from "../../components/Name/Name"
import { Nav } from "../../components/Nav/Nav"
import { Links } from "../../components/Links/links"
import { Experience } from "../../components/Experience/Experience"

export function Home() {
    return (
        <>
        <div id="home-container">
        <div>
         <Name/>
         <Nav/>
         <Links/>
        </div>

        <div>
        <Aboutme/>
        <Experience/>
        </div>

        
        </div>
        </>
    )
}