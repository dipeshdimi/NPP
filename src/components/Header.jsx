import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="assets/logo.png" alt="National People's Party" />
            </div>

            <nav>
                <div className="top disappear">
                    <select name="language" id="language">
                        <option value="eng">English</option>
                        <option value="khasi">Khasi</option>
                        <option value="garo">Garo</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <span>JOIN NPP</span>
                    <button>
                        MAKE A DONATION
                        <span><FontAwesomeIcon icon={faArrowRight} /></span>
                    </button>
                </div>
                <ul>
                    <li className="disappear" style={{ textDecoration: 'underline #e6b800' }}>HOME</li>
                    <li className="disappear">THE PARTY</li>
                    <li className="disappear">CORE ISSUES</li>
                    <li className="disappear">MEDIA</li>
                    <li style={{ display: 'flex', columnGap: '2em', justifyContent: 'center', alignItems: 'center' }}>
                        <span className="disappear">CANDIDATES WITH CRIMINAL ANTECEDENTS</span>
                        <img className="menu" src='assets/menu.png' alt="menu" style={{ width: 'auto', height: '2.7vh' }} />
                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;
