import './topbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#" className='logo'>ordibu</a>
          {/* <div className="itemContanier">
            <PersonIcon className='icon' />
            <span>+90 539 600 05 32</span>
          </div>
          <div className="itemContanier">
            <MailIcon className='icon' />
            <span>burak.bostanci17@gmail.com</span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line1'></span>
            <span className='line1'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
