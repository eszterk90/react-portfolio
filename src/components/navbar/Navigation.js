import {useState} from 'react'
import NavLinks from './NavLinks'
import Logo from '../../images/pattern.svg'
import CV from '../../assets/EszterKadar_CV_EN_2023.pdf'

const Navigation = () => {

    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    }

    window.addEventListener('scroll', changeNavbarColor);

    return (
    <nav className={colorChange ? 'color-change' : 'navigation'}>
    
        <NavLinks/>
        <div>
        <span className="button">
            <a className="cv-link" href={CV} download = "EszterKadar_CV_EN_2023.pdf">
            Download my CV
             </a>
        </span>
        </div>
    </nav>
    );
}

export default Navigation;