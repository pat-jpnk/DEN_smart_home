import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Layout from '../components/layout'
import Top from '../components/top'
import Menu from '../components/menu'
import LockRender from '../components/lockRender'
import RenderSectionContent from '../components/renderSectionContent'
import Footer from '../components/footer'
import Video from '../components/video'
import ContactForm from '../components/contactForm'
import Grid from '@material-ui/core/Grid'
import styles from '../styles/index.module.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import SellingPoints from '../components/sellingPoints';

export default function Index() {

  return (
    <div>
      <Head>
          <title>DEN Smart Home</title>

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
          <script src="dist/aoe-standalone.js"></script>
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta name="msapplication-TileColor" content="#da532c"></meta>
          <meta name="theme-color" content="#ffffff"></meta>

          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"></meta>
          <link
            rel="preload"
            href="/fonts/Quicksand-VariableFont_wght.ttf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/Yantramanav-Thin.ttf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/Yantramanav-Light.ttf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/Yantramanav-Regular.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>

      <div className={styles.landingPage}>
        <Top>
          <Image
          className={styles.menuIcon}
          src="/images/logo.svg"
          alt="DEN logo"
          height={150}
          width={100}
          layout="intrinsic"
          />
          <Menu/>
        </Top>
        
        <Video/>
      </div>

      <div className={styles.mentions}>
          <Image
            src="/images/AD-Logo.png"
            alt="award logo"
            height={150}
            width={150}
            layout="intrinsic"
            />
          <Image
            src="/images/cnet-logo.png"
            alt="award logo"
            height={187.5}
            width={256}
            layout="intrinsic"
            />
          <Image
            src="/images/pm-logo.png"
            alt="award logo"
            height={87.5}
            width={320}
            layout="intrinsic"
          />
          <Image
            src="/images/siw-logo.png"
            alt="award logo"
            height={150}
            width={250}
            layout="intrinsic"
          />
      </div>

      <div id="product">
        <Grid container className={styles.awards}>
                  <div className={styles.landing}>
                    <h1>
                      DEN Smart Home
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo. 
                    </p>
                  </div>

                <div className={styles.awardImage}>
                  <Image
                      src="/images/honoree.jpg"
                      alt="award logo"
                      height={200}
                      width={150}
                  />
                </div>
        </Grid>
      </div>
    
      <Layout>
        <Grid container className={styles.renderSection}>
          <Grid md={6}>
            <LockRender />
          </Grid>

          <Grid md={6}>
            <RenderSectionContent />
          </Grid>
        </Grid>


        <Grid id="features">
           <Grid md={12}>
            <SellingPoints />
          </Grid>
        </Grid>

        <h3 className={styles.contactHeading}>Contact</h3>

        <Grid container id="contact">
          <ContactForm/>
        </Grid>
      </Layout>


      <Footer/>

    </div>
  )
}