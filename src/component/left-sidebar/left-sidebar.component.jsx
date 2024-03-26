import React from "react";

import './left-sidebar.styles.scss'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faAddressBook, faFolderOpen, faPaperPlane, faHistory, faSave, faSignInAlt, faChartBar } from '@fortawesome/free-solid-svg-icons';

import {Link} from 'react-router-dom';

import Logo from '../../assets/image-removebg-preview.png'

const LeftSidebar = () => (
    <div className="left-sidebar">
        <div className="logo">
            <img
                src={Logo}
                alt="Logo"
                className="image"
            />
            <span className="text">SMS-Sender APP</span>
        </div>
        <nav className="navbars">
            <ul>
                <li>
                    <Link to={'/'} className="home">
                        <FontAwesomeIcon icon={faHome} className="icon"/>
                        <span className="text">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/dashboard/create-contact'} className="home">
                        <FontAwesomeIcon icon={faUserPlus} className="icon"/>
                        <span className="text">Create Contact</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/dashboard/send-message'} className="home">
                        <FontAwesomeIcon icon={faAddressBook} className="icon"/>
                        <span className="text">View Contacts</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/dashboard/send-message'} className="home">
                        <FontAwesomeIcon icon={faPaperPlane} className="icon"/>
                        <span className="text">Send a message</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/dashboard/create-template'} className="home">
                        <FontAwesomeIcon icon={faSave} className="icon"/>
                        <span className="text">Create Template</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/'} className="home">
                        <FontAwesomeIcon icon={faFolderOpen} className="icon"/>
                        <span className="text"> View Templates</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/'} className="home">
                        <FontAwesomeIcon icon={faHistory} className="icon"/>
                        <span className="text">Message History</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/'} className="home">
                        <FontAwesomeIcon icon={faSignInAlt} className="icon"/>
                        <span className="text">Opt-In</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/'} className="home">
                        <FontAwesomeIcon icon={faChartBar} className="icon"/>
                        <span className="text">Report</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
)

export default LeftSidebar