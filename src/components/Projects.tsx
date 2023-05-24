import '../App.css';
import noximity from '../assets/noximity.svg';
import astradark from '../assets/astradark.svg';
import cubed from '../assets/cubedslo.svg';
import pipebomb from '../assets/pipebomb.svg';
import possiest from '../assets/possiest.svg';
import skypiea from '../assets/skyPieaMC.svg';
import skykingdoms from '../assets/skykingdoms.svg';

export default function Projects() {

    return (
        <div className='projects-component'>
            <div className="projects-card">
                <div className="projects-card-content">
                    <h2>Projects</h2>
                    <p>Here are some of the active projects</p>
                    </div>
                    <div className="projects-display">
                        <h2>Projects</h2>
                        <ul>
                            <li>
                            <img src={noximity} alt="Mathias Clari Drenik" />
                                <h4>Noximity</h4>
                                <p>Founder</p>
                                </li>
                                <li>
                                    <img src={skypiea} alt="Mathias Clari Drenik" />
                                    <h4>SkyPieaMC</h4>
                                    <p>Owner</p>
                                </li>
                                <li>
                                    <img src={pipebomb} alt="Mathias Clari Drenik" />
                                    <h4>PipeBomb</h4>
                                    <p>UI UX Designer</p>
                                </li>
                                <li>
                                    <img src={astradark} alt="Mathias Clari Drenik" />
                                    <h4>AstraDark</h4>
                                    <p>Owner</p>
                                </li>
                                <li>
                                    <img src={possiest} alt="Mathias Clari Drenik" />
                                    <h4>Possiest</h4>
                                    <p>Founder</p>
                                </li>
                                <li>
                                    <img src={cubed} alt="Mathias Clari Drenik" />
                                    <h4>CubedSI</h4>
                                    <p>Founder</p>
                        
                                </li>
                                <li>
                                    <img src={skykingdoms} alt="Mathias Clari Drenik" />
                                    <h4>SkyKingdoms</h4>
                                    <p>Developer</p>
                        
                                </li>
                                </ul>
                                </div>
                                </div>
                                </div>
                                )

}