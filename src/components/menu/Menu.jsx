import './menu.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div>
            <div className={"menu " + (menuOpen && 'active')}>
                <ul>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <a href="#intro">Home</a>
                    </li>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <a href="#about">About</a>
                    </li >
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className="iconBar">
                    <a href="#" ><InstagramIcon /></a>
                    <a href="#" > <LinkedInIcon /></a>
                </div>
            </div>
        </div>
    )
}
