import React from 'react'
import Image from 'next/image'
import styles from '../styles/index.module.scss'
import handleViewport from 'react-in-viewport'
import ViewPortProperties from '../interfaces/ViewPortProperties'

class LockRender extends React.Component<ViewPortProperties> {

    constructor(props : any) {
        super(props);
    }

    getStyle() {
        const {inViewport, enterCount} = this.props;

        if (inViewport && enterCount === 1) {
            return { WebkitTransition: 'opacity 0.75s ease-in'};
          } else if (!inViewport && enterCount < 1) {
            return { WebkitTransition: 'none', opacity: '0' };
          } else {
            return {};
          }
    }

    render() {
        return (
            <div className={styles.lockRender} style={this.getStyle()}>
                <Image 
                  src="/images/lock-render.png"
                  alt="award logo"
                  height={700}
                  width={650}
                  layout="intrinsic"
                />
              </div>
        )
    }
}


const TheSection = handleViewport(LockRender, { rootMargin: '-1.0px' });
export default TheSection;