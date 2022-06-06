import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>About Byron</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
      </Head>

      <div className="containerFluid homeHeader text-light">


        <div className="row align-items-center">


          {/*---------- ABOUT BYRON & CONTACT COL ----------*/}
          <div className="col" id="aboutCol">
             
            <div className="row align-items-center">
              {/* Job Title */}
              <h2 className='my-5 text-center'>Web Developer & <br/> SEO Specialist</h2>
            </div> 

            <div className="row align-items-center text-center" display= "block">
              {/* Profile image */}
              <Image
                id="profileImg"
                src="/byron-profile-pic.jpeg"
                alt="byron"
                className="profileImg my-5 shadow text-center"
                width={250}
                height={250}
                display= "block"
                
              />
            </div> 

            <div className="row align-items-center">
              {/* Name */}
              <p className='h4 my-5 text-center'>Byron Devin</p>
            </div> 

            <div className="row align-items-center m-3">
              {/* Button: contact page link */}
              
                <div className='col text-center '>
                  <Link href='/contact'>
                    <button type="button" className="btn btn-light shadow">Contact</button>
                  </Link>
                </div>
     
            </div> 
            <div className="row align-items-center m-3">
              {/* Button: CV on canva. can download from linked page */}
              

                <div className='col text-center '>

                  <Link href='https://www.canva.com/design/DAE_05CSqs4/iDgDO5Fzh5BP6nlpExXjbQ/view?utm_content=DAE_05CSqs4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>
                    
                    <button type="button" className="btn btn-light shadow">Download CV</button>
                  
                  </Link>
                </div>
            </div> 
          </div>


          {/*---------- WEB DEV AND SEO COL ----------*/}
          <div className="col bg-light">

            <div className="containerFluid">

              {/* Web Development Skill */}
              <div className="row homeHeadSkill align-items-center shadow" id="homeHeadSkillDev">

                <Link href='/portfolio'>

                  <div className="col hoverGrowSkill">

                    <h3 className="h1 text-center ">Web Development</h3>
                    
                  </div>
                </Link>
              </div>

              {/* SEO Skill */}
              <div className="row homeHeadSkill align-items-center shadow" id="homeHeadSkillSeo">

                <Link href='/portfolio'>

                  <div className="col hoverGrowSkill">

                    <h3 className="h1 text-center text-dark" id="seo-heading">SEO</h3>

                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* CSS for this page */}
      <style jsx>
        {
        // setting main container with all components to be the sze of device
        //cannot make any other comments inside the string temperate literal. However, did use descriptive classnames which should help you understand
        `
          .homeHeader{
            height: 100vh;
          }
          .homeHeadSkill{
            height: 50vh;
          }
          #aboutCol{
            height: 100vh;
            background-color: #457B9D;
          }
          #aboutCol img{
            
            margin: auto;    
            display: block;
          }
          #profileImg{
            object-position: 50% 50%;
            width:250px;
            height:250px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            border-radius: 50%;
            transition: 0.5s;
          }
          #profileImg:hover{
            transform: scale(1.1);
          }

        
          
          #homeHeadSkillDev{
            background-image: url('/web-dev-4.jpg');
            background-repeat: no-repeat;
            background-size: cover;

            transition: 0.5s;
        
          }

          #homeHeadSkillSeo{
            background-image: url('/seo-3.jpg');
            background-repeat: no-repeat;
            background-size: cover;

          }
          .hoverGrowSkill{
            transition: 0.5s;
          }
          .hoverGrowSkill:hover{
            transform: scale(1.3);
          }
          h1, h2, h3, h4, p{
            color: #F1FAEE;
          }
          #seo-heading{
            color: #1D3557;
          }
          .btn{
            transition:0.5s;
          }
          .btn:hover{
            transform: scale(1.1);
          }
        `}
      </style>
      
    </>
  )
}
