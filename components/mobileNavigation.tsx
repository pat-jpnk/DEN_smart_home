import styles from '../styles/index.module.scss'
import Link from 'next/link'
import React from 'react'

// TODO: remove if icons not used
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


export default class MobileNavigation extends React.Component {
    
    constructor(props : Object) {
        super(props);
    }

    render() {
        return (
            <div className={styles.mobileNavigation}>
                <Link href="/news"><div className={styles.mobileNavigationItem}>News</div></Link>
            </div>
        )
    }
}
