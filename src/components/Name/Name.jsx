
import { useEffect, useState } from "react"
import "./Name.css"


export function Name() {
    const words = ["Early-Career Software Engineer", "Digital Experimenter"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % words.length); 
          }, 3000); 
      
          return () => clearInterval(interval); 
    }, [])
    return (
        <>
    <div id="name"> 
        <h1 id="title">Derinell Rojas</h1>

        <p class="reveal">{words[current]}</p>

       <p id="desc"> Solving technical challenges through user-focused,<br/>
       polished digital solutions</p>

       
    </div>

    </>
    )
    

}
