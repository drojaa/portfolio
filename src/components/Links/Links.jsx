
import "./Links.css"
import { FaLinkedin, FaGithub, FaGoodreads } from "react-icons/fa";

export function Links(){
    return(
        <>
        <div id="links"> 
        <a class="icon" href="https://www.linkedin.com/in/derinellrojas/"><FaLinkedin/></a>
        <a class="icon" href="https://github.com/drojaa"><FaGithub/> </a>
        <a class="icon" href="https://www.goodreads.com/user/show/167162912-derinell-rojas"><FaGoodreads/></a>
        
        </div>
        
        </>
    )
}