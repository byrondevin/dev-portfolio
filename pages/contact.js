import Head from 'next/head'
import Image from 'next/image'

export default function Contact() {
    return (
        <>
      <div id="wholePage">
        <Head>
          <title>Contact</title>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-B5LK04QXWQ"/>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-B5LK04QXWQ');`
                }
            </Script>
        </Head>
        
        {/* <!-------------- Contact--------------> */}

        {/* fluid container surrounding all content */}
        <div className="container-fluid py-3">


            {/* ROW: Heading and Subheading  */}
            <div className="row pt-5">
              <div className="col text-center text-light">
                <h2 id="experienceH2" className="h1">Say Hello</h2>
                <p id="conSub">I&apos;d love to hear from you...</p>
              </div>
            </div>

                        
                        
            {/* ROW: Profile iamge */}
            <div className="row pt-2 justify-content-center">

                <Image src="/byron-profile-pic.jpeg" alt="me" width="300" height="300" id="profilePic" className='rounded shadow'/>

            </div>

            {/* ROW: Form */}
            <div className="row py-5 p-3 justify-content-center" >
              <div
                className="col-sm-12 col-md-8 rounded shadow p-3"
                id="contactForm"
              >
                {/* ROW: Radio Buttons in form */}
                <form>
                    <div className="row mb-3">
                    <div className="col text-center">
                        <div className="btn-group btn-group-toggle pt-3" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input
                            type="radio"
                            name="options"
                            id="option1"
                            autoComplete="off"
                            checked
                            />
                            Web Development
                        </label>
                        <label className="btn btn-secondary">
                            <input
                            type="radio"
                            name="options"
                            id="option2"
                            autoComplete="off"
                            />
                            Marketing
                        </label>
                        <label className="btn btn-secondary">
                            <input
                            type="radio"
                            name="options"
                            id="option3"
                            autoComplete="off"
                            />
                            Custom Quote
                        </label>
                        </div>
                    </div>
                    </div>
      
                {/* ROW: NAme & Email inputs */}
                  <div className="row">

                    {/* COL:Name input */}
                    <div className="col">
                      <div className="form-group shadow">
                        <input
                          type="email"
                          className="form-control"
                          id="contactName"
                          aria-describedby="nameHelp"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    {/* COL: email input */}
                    <div className="col">
                      <div className="form-group shadow">
                        <input
                          type="password"
                          className="form-control"
                          id="contactEmail"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                {/* Message input */}
                  <div className="form-group shadow my-3">
                    <textarea
                      className="form-control"
                      id="contactMessage"
                      rows="3"
                      placeholder="What do you have to say?"
                    ></textarea>
                  </div>
      
                  {/* Submit BUTTON */}
                  <div className="row">
                    <div className="col text-center">
                      <button type="submit" className="btn btn-danger">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
      {/* JSX Styling for this page. Cannot comment inside the backdashes */}
      <style jsx>
            {
                `
               #wholePage{
                   background-color: #A8DADC;
               }
               #contactForm{
                   background-color: #F1FAEE;
               }
                `
            }
            
        </style>
      </>
    )
  }