import loc from '../img/path.png';
import { Parallax } from 'react-parallax';


const Location=()=>{



    return(
        <>
        <div className="location">
        <Parallax blur={5} bgImage={loc} bgImageAlt="the location" strength={200}>

        <div className="under ">
            <p className="display-5 yellow">Where to find us?</p>
            <p id='para' className="display-6 white">You still here,  click on the below button to join (Raisoni ID only).</p>
            
            <button  className="joinbtn btn cbtn white "><i className="fa fa-mouse-pointer" aria-hidden="true"></i>
  Join us</button>
        </div>

        </Parallax>
        </div>
        </>
    )
}
export default Location;