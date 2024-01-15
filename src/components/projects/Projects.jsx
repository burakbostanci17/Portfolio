import './projects.scss'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <DeveloperModeIcon className='icon' />
                </div>
                <h2>Mobil Controlled Hovercraft</h2>
                <p>For university thesis i created a mobile controlled hovercraft with ultrasonic sensors.
                  Hovercraft was drawn in Solidworks and manufactured on a 3-D printer.
                  The control of the hovercraft was done with the Arduino program.
                </p>
              </div>
            </div>
            <div className="right">
              <img src="assets/programming-background-with-html-text.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <KeyboardArrowLeftIcon className='arrow left'/>
      <KeyboardArrowRightIcon className='arrow right'/>
    </div>
  )
}
