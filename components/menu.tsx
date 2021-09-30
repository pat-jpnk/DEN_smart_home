import styles from '../styles/index.module.scss'
import React from 'react'
import MobileNav from '../components/mobileNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


export default class Menu extends React.Component<{}, {showMobileMenu : boolean}> {
    
    constructor(props : Object) {
        super(props);
        this.state = {
            showMobileMenu: false
        }
    }

    toggleMenu = () => {
        this.setState({showMobileMenu: !this.state.showMobileMenu})
    }

    render() {
        return (
            <div>
                <div className={styles.menu}>
                    <a href="/news"><h5>News</h5></a>
                </div>

                <div className={styles.mobileMenu}>
                    <div>
                        <a><FontAwesomeIcon onClick={this.toggleMenu} icon={faBars} className={styles.mobileMenuIcon}/></a>
                    </div>
                </div>

                {this.state.showMobileMenu ? <MobileNav/> : undefined}

            </div>
        )
    }
}