import styles from '../styles/index.module.scss'
import React from 'react'
import ReactPlayer from 'react-player'
import gif from '../public/gifs/product.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'



export default class Video extends React.Component<{}, {url: string, light: any}> {
    [x: string]: any

    constructor(props : Object) {
        super(props);
        this.state = {
            url: 'https://vimeo.com/384763316',
            light: {gif}
        }
    }

    ref = (player : any) => {
        this.player = player
      }


    onEnded = () => {
        // explain to Robert:

        // TODO: remove

        //this.forceUpdate()
        //this.setState({url: '#'})
        //this.setState({url: 'https://vimeo.com/384763316'})
        
        //this.forceUpdate()
        //this.render()
        this.player.showPreview()
        //this.setState({light: this.state.light})
    }

    render() {
        return (
                <div className='playerWrapper'>
                    <ReactPlayer
                        url={this.state.url} 
                        width='100%'
                        height='100%'
                        light={gif} 
                        className={styles.reactPlayer}
                        playIcon={<FontAwesomeIcon icon={faPlay} className={styles.playIcon}/>}
                        onEnded={this.onEnded}

                        config={{
                            vimeo: {
                                playerOptions: {
                                        autoplay: true,
                                        controls: true,
                                        responsive: true,
                                        title: false,
                                        byline: false,
                                        dnt: true
                                }
                            }   
                        }}
                    />
                </div>
        )
    }
}

   
