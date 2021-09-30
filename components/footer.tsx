import styles from '../styles/index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Link from 'next/link'

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default class Footer extends React.Component {

    constructor(props : Object) {
        super(props);
    }

    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.socialIcons}>
                <Link href={'https://www.facebook.com/densmarthome/'}>
                    <a><FontAwesomeIcon icon={faFacebook} className={styles.icon}/></a>
                </Link>
                <Link href={'https://www.instagram.com/densmarthome/'}>
                    <a><FontAwesomeIcon icon={faInstagram} className={styles.icon}/></a>
                </Link>
                <Link href={'https://nl.linkedin.com/company/densmarthome'}>
                    <a><FontAwesomeIcon icon={faLinkedin} className={styles.icon}/></a>
                </Link>
                </div>
                <h6 className={styles.copyrightNote}>DEN Smart Home ©</h6>
            </div>
        )
    }
}
