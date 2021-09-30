import styles from '../styles/index.module.scss'
import React from 'react'

export default class Top extends React.Component<{children : any}, {}>  {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <div className={styles.top}>
                {this.props.children}
            </div>
        )
    }
}
   
