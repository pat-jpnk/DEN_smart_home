import React from 'react'
import {GetStaticPaths, GetStaticProps} from 'next'
import axios, { AxiosResponse } from 'axios'
import NewsItemProperties from '../../interfaces/NewsItemProperties'
import Menu from '../../components/menu'
import Top from '../../components/top'
import Image from 'next/image'
import Link from 'next/link'

import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import indexStyles from '../../styles/index.module.scss'
import newsStyles from '../../styles/news.module.scss'
import Layout from '../../components/layout'
import Footer from '../../components/footer'

export default function NewsItem(props : any) {

    const { newsData } = props;

    return (
        <div className={newsStyles.singleNewsPage}>
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
            </div>
        
            <Layout>
                <div className={newsStyles.singleNewsContainer}>
                    <Link href={'/news'}>
                        <a><FontAwesomeIcon icon={faArrowLeft} className={newsStyles.icon}/></a>
                    </Link>
                    <h1 className={newsStyles.singleNewsHeadline}>{newsData.title}</h1>
                    <h2 className={newsStyles.singleNewsText}>{newsData.text}</h2>
                </div>
            </Layout>

            <Footer/>
        </div>
    )
}


export async function getStaticProps(context: any) {
    const {params} = context;
    const newsItemId = params.newsItemId;
    const path = 'https://60588231c3f49200173ae48d.mockapi.io/news/' + newsItemId;
    
    let requestResult : AxiosResponse<void | NewsItemProperties>;

    requestResult = await axios.get<NewsItemProperties | void>(path);
    const data : NewsItemProperties | void = requestResult.data;

   return {
       props: {
           newsData: data
       }
   }

}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
