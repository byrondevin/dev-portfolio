import Head from 'next/head';
import Script from 'next/script';

export default function Portfolio() {
    return (
      <>
      <div className="container-fluid text-light" id="whole-page-container">



        <Head>
          <title>Portfolio</title>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-B5LK04QXWQ"/>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || []
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-B5LK04QXWQ');`
                }
            </Script>
        </Head>

        {/* CUSTOM WEB APS */}
        <div className="container-fluid " id="portContainer">
            {/* Heading 1 */}
            <h1 className="text-center py-5">Custom Web Apps</h1>

            {/* Itunes API search */}
                <div className="row siteRow align-items-center">
                    <div className="col-4 text-center">
                    <h2 id="h2Port">iTunes API Lookup App</h2>
                    <p className="mb-0 pb-0" id="portCat">Coursework</p>
                    <p id="line">------------------------------</p>
                    <p id="pWork">React | Express | API </p>
                    <a href="https://itunes-search-byron.herokuapp.com/">
                        <button type="button" className="btn btn-info mt-2">
                        iTunes app
                        </button>
                    </a>
                    </div>

                    <div className="col-8 sitePic imgSitePreview" id="imgiTunesPreview" ></div>
                </div>



            {/* Minesweeper game */}
                <div className="row siteRow align-items-center ">
                    <div className="col-8 al sitePic imgSitePreview" id="imgMinePreview" ></div>

                    <div className="col-4 text-center">
                    <h2 id="h2Port">Minesweeper Game</h2>
                    <p className="mb-0 pb-0" id="portCat">Coursework</p>
                    <p id="line">------------------------------</p>
                    <p id="pWork">React | Bootstrap | JS </p>
                    <a href="https://serene-cliffs-66378.herokuapp.com/">
                        <button type="button" className="btn btn-info mt-2">
                        Minesweeper App
                        </button>
                    </a>
                    </div>
                </div>     
        </div>



        {/* WOOCOMMERCE WEBSITES */}
        <div className="container-fluid pt-5" id="portContainer">


            {/* heading 2 */}
            <h2 className="h1 text-center py-5">Woocommerce Websites</h2>



            {/* <!------ Bellezza Site------> */}
            <div className="row siteRow align-items-center ">
                <div className="col-4 text-center">
                <h2 id="h2Port">Bellezza Apparel</h2>
                <p className="mb-0 pb-0" id="portCat">Fashion</p>
                <p id="line">------------------------------</p>
                <p id="pWork">Front-end | Mobile | Web | UX | UI</p>
                <a href="https://bellezza.live/">
                    <button type="button" className="btn btn-info mt-2">
                    bellezza.live
                    </button>
                </a>
                </div>

                <div className="col-8 sitePic imgSitePreview" id="imgBellPreview" ></div>
            </div>



            {/* <!------ Culture Lab  Site------> */}
            <div className="row siteRow align-items-center ">


                <div className="col-8 al sitePic imgSitePreview" id="imgCLabPreview" ></div>


                <div className="col-4 text-center">
                    <h2 id="h2Port">Culture Lab</h2>
                    <p className="mb-0 pb-0" id="portCat">Kombucha</p>
                    <p id="line">------------------------------</p>
                    <p id="pWork">Front-end | Mobile | Web | UX | UI</p>
                    <a href="https://culturelabkombucha.com/">
                        <button type="button" className="btn btn-info mt-2">
                        culturelab.com
                        </button>
                    </a>
                </div>
            </div>


            {/* <!------ Lost at SEA Site------> */}
            <div className="row siteRow align-items-center ">
                <div className="col-4 text-center">
                    <h2 id="h2Port">Lost at SEA</h2>
                    <p className="mb-0 pb-0" id="portCat">Marketing</p>
                    <p id="line">------------------------------</p>
                    <p id="pWork">Front-end | Mobile | Web | UX | UI</p>
                    <a href="https://lostatseamarketing.com/">
                        <button type="button" className="btn btn-info mt-2">
                        lostatsea.com
                        </button>
                    </a>
                </div>
                
                <div className="col-8 sitePic imgSitePreview text-center align-items-center" id="imgLASPreview" >
                </div>
                
            </div>
            </div>


        </div>
        {/* JSX Styling for this page. Cannot comment inside the backdashes */}
        <style jsx>
            {
                `
                #whole-page-container{
                    background-color: #1D3557;
                }
                .siteRow{
                    min-height: 75vh
                }

                #imgiTunesPreview{
                    background-image: url('/portfolio-iTunes.png');
                       
                }

                #imgMinePreview{
                    background-image: url('/portfolio-minesweeper.png');
                       
                }

                #imgBellPreview{
                    background-image: url('/portfolio-card-bg-bellezza.png');
                    
                }

                #imgCLabPreview{
                    background-image: url('/portfolio-card-bg-culture-lab.png');
                    
                }

                #imgLASPreview{
                    background-image: url('/portfolio-card-bg-las.png');
                    
                    
                }
                .imgSitePreview{
                    
                    min-height: 75vh;
                    opacity:0.6;
                    transition:0.5s;
                    background-size: cover;
                    
                }
                .imgSitePreview:hover{
                    
                    transform: scale(1.1);
                    opacity:1;
                    
                }
                .btn{
                    transition:0.5s;
                  }
                .btn:hover{
                    transform: scale(1.1);
                  }
                `

            }
            
        </style>
      </>
    )
  }