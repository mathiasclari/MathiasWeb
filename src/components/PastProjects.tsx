import '../App.css';
import songoda from '../assets/songoda.svg';
import techscode from '../assets/techscode.svg';
import cosmetica from '../assets/cosmetica.svg';
import jeracraft from '../assets/jeracraft.svg';
import rabbitcompany from '../assets/rabbit.svg';

export default function PastProjects() {
    return (
        <div className='projects-component'>
            <div className="projects-card">
                <div className="projects-card-content">
                    <h2>Work Experience</h2>
                    <p>Here are some of the projects I ussed to work or contribute at</p>
                    </div>
                    <div className="projects-display">
                        <h2>Projects</h2>
                        <ul>
                            <li>
                            <img src={songoda} alt="Mathias Clari Drenik" />
                                <h4>Songoda</h4>
                                <p>Developer</p>
                                </li>
                                <li>
                                    <img src={techscode} alt="Mathias Clari Drenik" />
                                    <h4>TechsCode</h4>
                                    <p>Marketing Team, Community Manager</p>
                                </li>
                                <li>
                                    <img src={cosmetica} alt="Mathias Clari Drenik" />
                                    <h4>Cosmetica</h4>
                                    <p>Contributor</p>
                                </li>
                                <li>
                                    <img src={jeracraft} alt="Mathias Clari Drenik" />
                                    <h4>JeraCraft </h4>
                                    <p>Owner</p>
                                </li>
                                <li>
                                    <img src={rabbitcompany} alt="Mathias Clari Drenik" />
                                    <h4>RabbitCompany LLC</h4>
                                    <p>Developer</p>
                                </li>
                                </ul>
                                </div>
                                </div>
                                </div>
                                )

}