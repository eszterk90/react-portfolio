import NavLinks from './NavLinks'
import Logo from '../../images/pattern.svg'
import CV from '../../assets/EszterKadar_CV_EN_2023.pdf'

const Navigation = () => {


    return (
    <nav className='navigation transparent'>
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