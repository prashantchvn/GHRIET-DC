import { useEffect } from "react";
import Aos  from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect/dist/core';



const Terminal=()=>  {

        useEffect(()=>{
            Aos.init({duration:1000});
        },[]);

        
        let terminalText = document.getElementById('typewriter');

        let typewriter = new Typewriter(terminalText, {
        // loop: true,
        delay: 75,
        });

        typewriter
        .pauseFor(2500)
        .typeString('Empowering the open-source community. ')
        .start();
        

        return(
            <>
            <div className="card terminal align-middle shadow-lg p-3 mb-5 bg-body rounded "  data-aos="zoom-in">
                <div className="card-header ">
                <i className="fa fa-circle red" aria-hidden="true"></i>
                <i className="fa fa-circle yellow" aria-hidden="true"></i>
                <i className="fa fa-circle green" aria-hidden="true"></i>
                </div>
                <div className="card-body terminal-body">
                    <p><b>GHRIET@DC :</b></p>
                    <p id="typewriter"></p> 
                </div>
            </div>

            
            </>
        )
    
}
export default Terminal;