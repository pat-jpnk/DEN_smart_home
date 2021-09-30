import React from 'react'
import styles from '../styles/index.module.scss'
import {InputLabel, Paper, Input, Button} from '@material-ui/core';
import handleViewport from 'react-in-viewport'
import ViewPortProperties from '../interfaces/ViewPortProperties'



class Menu extends React.Component<ViewPortProperties> {
    
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
                <div className={styles.renderSectionText}>
                    <p style={this.getStyle()}>De macaron is van oorsprong een Frans koekje, bestaande uit twee luchtige amandelkoekjes met een smaakvolle ganache vulling ertussen.</p>
                    <Button className={styles.renderSectionButton} style={this.getStyle()} type="submit" variant="outlined">Unlock</Button>
                </div>
        )
    }
}


const NoSection = handleViewport(Menu, { rootMargin: '-1.0px' });
export default NoSection;