import 'aos/dist/aos.css';
const Footer=()=>{

    return(
        <>
            <footer>
            <div class="container">
               <div className="row gx-5">
                   <div className="footersoc">
                   Follow us: 
                   <a aria-hidden='true' className='fa fa-envelope' href='mailto:' id='devso' target='_blank'></a>
                    <a aria-hidden='true' className='fa fa-instagram' href='/' id='devso'></a>
                    <a aria-hidden='true' className='fa fa-twitter' href='' id='devso' target='_blank'></a>
                    <a aria-hidden='true' className='fa fa-linkedin' href='/' id='devso' target='_blank'></a>
                    <a aria-hidden='true' className='fa fa-github' href='' id='devso' target='_blank'></a>
                    <a aria-hidden='true' className='fa fa-youtube-play' href='#' id='devso' target='_blank'></a></div>
                   <hr></hr>
                    <div className="col">
                        <p className="col1 display-6">We love to code</p>
                    </div>
                    <div className="col ">
                        
                    </div>
                </div>
                
                </div>
            </footer>
        </>
    )
}
export default Footer;