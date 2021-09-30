import {faDoorOpen, faLock, faTag, faWifi, faShieldAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/index.module.scss'
import React from 'react'
import handleViewport from 'react-in-viewport'


import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

class SellingPoints extends React.Component<{inViewport : boolean, enterCount : number}> {
    constructor(props : any) {
        super(props);
    }

    getStyle() {
        const {inViewport, enterCount} = this.props;

        if (inViewport && enterCount === 1) {
            return { WebkitTransition: 'opacity 0.75s ease-in' };
          } else if (!inViewport && enterCount < 1) {
            return { WebkitTransition: 'none', opacity: '0' };
          } else {
            return {};
          }
    }

    render() {
        return (
            <div>
                <div className={styles.sellingPointsHeading}>Features</div>
                <div className={styles.sellingPoints}>
                    <div className={styles.spWifi}>
                    <FontAwesomeIcon icon={faWifi} className={styles.sellingPointIcon} style={this.getStyle()}/>
                    <h4 className={styles.sellingPointsItem} style={this.getStyle()}>Smart</h4>
                    <h3 className={styles.sellingPointDescription} style={this.getStyle()}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    </div>

                    <div className={styles.spPriceTag}>
                    <FontAwesomeIcon icon={faTag} className={styles.sellingPointIcon} style={this.getStyle()}/>
                    <h4 className={styles.sellingPointsItem} style={this.getStyle()}>Affordable</h4>
                    <h3 className={styles.sellingPointDescription} style={this.getStyle()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    </div>

                    <div className={styles.spShield}>
                    <FontAwesomeIcon icon={faShieldAlt} className={styles.sellingPointIcon} style={this.getStyle()}/>
                    <h4 className={styles.sellingPointsItem} style={this.getStyle()}>Secure</h4>
                    <h3 className={styles.sellingPointDescription} style={this.getStyle()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    </div>

                    <div className={styles.spLock}>
                    <FontAwesomeIcon icon={faLock} className={styles.sellingPointIcon} style={this.getStyle()}/>
                    <h4 className={styles.sellingPointsItem} style={this.getStyle()}>Universal</h4>
                    <h3 className={styles.sellingPointDescription} style={this.getStyle()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    </div>

                    <div className={styles.spDoor}>
                    <FontAwesomeIcon icon={faDoorOpen} className={styles.sellingPointIcon} style={this.getStyle()}/>
                    <h4 className={styles.sellingPointsItem} style={this.getStyle()}>Invisible</h4>
                    <h3 className={styles.sellingPointDescription} style={this.getStyle()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    </div>
                </div>
            </div>

        )
    }

}

const MySection = handleViewport(SellingPoints, { rootMargin: '-1.0px' });
export default MySection;