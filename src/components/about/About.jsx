import './about.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { useEffect, useState } from 'react'
import { experiencePortfolio, educationPortfolio, licensesCertificationPortfolio, skillsPortfolio } from '../../data'


export default function About() {
    const [selected, setSelected] = useState('experience')
    const [data, setData] = useState([])
    const list = [
        {
            id: 'experience',
            title: 'Experience',
        },
        {
            id: 'education',
            title: 'Education',
        },
        {
            id: 'licenses&certifications',
            title: 'Licenses & certifications',
        },
        {
            id: 'skills',
            title: 'Skills',
        },
    ]

    useEffect(() => {
        switch (selected) {
            case 'experience': setData(experiencePortfolio)
                break
            case 'education': setData(educationPortfolio)
                break
            case 'licenses&certifications': setData(licensesCertificationPortfolio)
                break
            case 'skills': setData(skillsPortfolio)
                break
            default:
                setData(experiencePortfolio)
        }
    }, [selected])
    return (
        <div className="about" id='about'>
            <ul>
                {list.map((item) => (
                    <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <h3>{d.title}</h3>
                        <p>{d.desc}</p>
                        <span>{d.date}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
