import './projects.scss'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid'
import WebIcon from '@mui/icons-material/Web';
import CarRentalIcon from '@mui/icons-material/CarRental';
import { useState } from 'react';


export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: '1',
      icon: DeveloperModeIcon,
      title: 'Mobil Controlled Hovercraft',
      desc: 'Hovercraft was drawn in Solidworks (CAD) and manufactured on a 3-D printer. The control of the hovercraft was done with the Arduino program. I used android studio for mobile app. ',
      img: 'assets/programming-background-with-html-text.jpg',
    },
    {
      id: '2',
      icon: TabletAndroidIcon,
      title: 'Responsive Web Design',
      desc: 'I designed it using HTML and CSS in Visual Studio Code.',
      img: 'assets/programming-background-with-html-text.jpg',
    },
    {
      id: '3',
      icon: AccountTreeIcon,
      title: 'E-Trade System Database Design',
      desc: 'I created tables in excel to code the relational database clearly. Then I transferred this database that I created to Sql Server Management Studio. I created random data in Sql Management Studio.',
      img: './assets/programming-background-with-html-text.jpg',
    },
    {
      id: '4',
      icon: WebIcon,
      title: 'Todo List Design',
      desc: 'I designed it using JavaScript, HTML and CSS in Visual Studio Code.Bootstrap library were used in this project. At the end of this project, I got an idea about document object model.',
      img: './assets/programming-background-with-html-text.jpg',
    },
    {
      id: '5',
      icon: CarRentalIcon,
      title: 'Auto Gallery Project',
      desc: 'I designed it using JavaScript, HTML and CSS in Visual Studio Code. Bootstrap and Jquery libraries were used in this project. At the end of this project, I got an idea about object-oriented programming.',
      img: './assets/programming-background-with-html-text.jpg',
    }
  ]

  const handleClick = (way) => {
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4) :
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className='projects' id='projects'>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <d.icon className='icon' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} />
              </div>
            </div>
          </div>))}
      </div>
      <KeyboardArrowLeftIcon className='arrow left' onClick={() => handleClick('left')} />
      <KeyboardArrowRightIcon className='arrow right' onClick={() => handleClick()} />
    </div>
  )
}
