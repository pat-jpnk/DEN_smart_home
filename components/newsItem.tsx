import style from '../styles/news.module.scss'
import React from 'react'
import Link from 'next/link'
import NewsItemProperties from '../interfaces/NewsItemProperties';


export default class NewsItem extends React.Component<NewsItemProperties, {}> {
    
    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <div className={style.newsItem}>
                <h1 className={style.newsItemHeadline}><Link href={`/news/${this.props.id}`}>{this.props.title}</Link></h1>
            </div>
        )
    }
}