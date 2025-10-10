
import "./Experience.css"
import { FiDownload } from "react-icons/fi";
export function Experience(){
    return (
        <>
        <div class="exp-container">
          
          <a href="src/public/Resume.pdf" target="_blank">  
        <div id="downloads">
            <p  id="download">Download My Full Resume Here 
              
             <FiDownload id="exp-icon"/>    

            </p>
          
        </div>
        </a>

            <div id="experience" class="main">
              <p id="date"><span> Jun 2024 - Sept 2024</span></p>

                <p> <span>Kyruus Health</span> <br></br> <span> Software Engineer Intern </span> <br></br>
                Enhanced the HUB’s cross-environment translation service for tenant data in English, Spanish, and Haitian Creole, enabling seamless movement of translation values across dev2, prd2, and uat2 environments. Improved workflow efficiency for Business Systems Analysts and support teams by reducing data divergence and enabling incremental updates. Collaborated with a team of 8 through agile practices, contributing to UI design, unit testing, and delivery of a high-quality, production-ready feature.
                <div id="skills">
                     <p id="skill"> React </p> 
                     <p id="skill"> Redux </p> 
                     <p id="skill"> API </p>
                     </div>
                </p>
            </div>


            <div class="main">
              <p id="date"><span> Jan 2024 - Sep 2024</span></p>

                <p>  <span>Hack.Diversity</span> <br></br> <span>  Software Engineer Fellow  </span> <br></br>
                Developed a MERN stack web application with a team of six, enabling physicians to perform CRUD operations on structured radiology reports for COVID-19 patient x-ray assessments. Authored a featured Medium post detailing a 250+ word personal journey into technology. Selected as 1 of 89 out of 450+ applicants; collaborated with peers across data science, mechanical, and software engineering domains while participating in weekly mentorship, mock interviews, and upskilling sessions.
                <div id="skills">
                     <p id="skill"> MongoDB </p> 
                     <p id="skill"> Express </p> 
                     <p id="skill"> React </p>
                     <p id="skill"> Node.js </p>
                     <p id="skill"> CSS </p>
                     </div>
                </p>
            </div>



            <div class="main">
              <p id="date"><span> Sep 2023 - Nov 2023</span></p>

                <p> <span>HubSpot</span> <br></br> <span> AI Student Intern </span> <br></br>
                Applied AI-driven data extraction in ChatSpot (HubSpot's AI chat) to generate 150+ leads, supporting the expansion of prospecting clients and partners. Compiled a Google Sheet capturing company details, location, employee size, and industry type, emphasizing key qualification factors for targeted outreach. Developed a B2B email series—including Outreach, Follow-Up, Trial/Demo, and Onboarding messages—each ranging from 200–300 words.
                <div id="skills">
                     <p id="skill"> React </p> 
                     <p id="skill"> Redux </p> 
                     <p id="skill"> API </p>
                     </div>
                </p>
            </div>


        </div>
        </>
    )
}