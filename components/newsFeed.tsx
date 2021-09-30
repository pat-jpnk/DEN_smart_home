import style from '../styles/news.module.scss'

import React from 'react'
import axios from 'axios'
import NewsFeedState from '../interfaces/NewsFeedState'
import NewsItem from './newsItem'
import NewsItemProperties from '../interfaces/NewsItemProperties'


export default class Menu extends React.Component<{},NewsFeedState> {
    
    constructor(props : any) {
        super(props);
        this.state = {
            loaded: false,
            news: []
        }
    }

    componentDidMount() {
        axios.get('https://60588231c3f49200173ae48d.mockapi.io/news')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    loaded: true,
                    news: res.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        const {error, loaded, news} = this.state;
        if(error) {
            return (
                <h1>Failed to load news</h1>
            )
        } else {
            return (
                <div className={style.newsFeed}>
                    {news.map( (item: NewsItemProperties) => (
                        <NewsItem id={item.id} title={item.title} text={item.text} />
                    ))}
                </div>   
            )
        }
    }
}