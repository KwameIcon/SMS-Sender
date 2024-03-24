import React from "react";

import './page-header.styles.scss'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faUserCircle, faEllipsisV} from '@fortawesome/free-solid-svg-icons';

import {Link} from 'react-router-dom';


class PageHeader extends React.Component {

    render(){
        return (
            <div className="page-header">
                <div className="wrapper">
                <div className="header-text">
                    <h1 className="title">Dashboard</h1>
                    <span className="text">Send SMS for only 0.00256 points per message!</span>
                </div>
                <div className="actions-container">
                    <div className="help">
                        <Link to={'/'} className="help-link">
                            <FontAwesomeIcon icon={faQuestionCircle} className="icon"/>
                        </Link>
                    </div>
                    <div className="account">
                        <Link to={'/'} className="account-link">
                            <FontAwesomeIcon icon={faUserCircle} className="icon"/>
                            <span className="text">Account</span>
                        </Link>
                    </div>
                    <div className="settings">
                        <div className="fontIcon">
                            <FontAwesomeIcon icon={faEllipsisV} className="icon"/>
                        </div>
                        <div className="actions">
                            <ul>
                                <li>
                                    <Link to={'/'} className="action-btn">Settings</Link>
                                    <Link to={'/'} className="action-btn">Log Out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default PageHeader;