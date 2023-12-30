
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faWindowRestore, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
const fontfaLayerGroup = <FontAwesomeIcon icon={faLayerGroup} />

const HomeProgressNumber = () =>{
    return(
        <section className="sec-homeProgressNumber">
            <div className="container">
                <ul>
                    <li>
                        <div className="ProgressIcon">
                            {fontfaLayerGroup}
                        </div>
                        <div className="ProgressNumber">97<span>%</span></div>
                        <div className="ProgressTitle">SUCCESSFUL PROJECT</div>
                    </li>
                    <li>
                        <div className="ProgressIcon">
                            {fontfaLayerGroup}
                        </div>
                        <div className="ProgressNumber">97<span>%</span></div>
                        <div className="ProgressTitle">SUCCESSFUL PROJECT</div>
                    </li>
                    <li>
                        <div className="ProgressIcon">
                            {fontfaLayerGroup}
                        </div>
                        <div className="ProgressNumber">97<span>%</span></div>
                        <div className="ProgressTitle">SUCCESSFUL PROJECT</div>
                    </li>
                    <li>
                        <div className="ProgressIcon">
                            {fontfaLayerGroup}
                        </div>
                        <div className="ProgressNumber">97<span>%</span></div>
                        <div className="ProgressTitle">SUCCESSFUL PROJECT</div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default HomeProgressNumber;