import "@fortawesome/fontawesome-svg-core/styles.css"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import newsStyles from '../../styles/news.module.scss'
import indexStyles from '../../styles/index.module.scss'

import Top from '../../components/top'
import Menu from '../../components/menu'
import NewsFeed from '../../components/newsFeed'
import Layout from '../../components/layout'
import Footer from '../../components/footer'


export default function News() {
    return (
        <div>
            <Top>
                <Link href="/">
                    <a>
                        <Image
                            className={indexStyles.menuIcon}
                            src="/images/logo.svg"
                            alt="DEN logo"
                            height={150}
                            width={100}
                            layout="intrinsic"
                        />
                    </a>
                </Link>
                <Menu/>
            </Top>

            <Layout>
                <div className={newsStyles.newsContainer}>
                    <div className={newsStyles.newsHeadingContainer}>
                        <h3 className={newsStyles.newsHeading}>News</h3>
                    </div>
                <NewsFeed/>
                </div>
            </Layout>
        
            <Footer/>    
       </div>    
    )
}