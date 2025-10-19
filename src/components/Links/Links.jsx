
import "./Links.css"
import { FaLinkedin, FaGithub, FaGoodreads } from "react-icons/fa";

export function Links(){
    return(
        <>
        <div id="links"> 
        <a class="icon"  target="_blank" href="https://www.linkedin.com/in/derinellrojas/"><FaLinkedin size={23}/></a>
        <a class="icon" target="_blank" href="https://github.com/drojaa"><FaGithub size={23}/> </a>
        </div>
        
        </>
    )
}