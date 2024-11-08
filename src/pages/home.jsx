import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the phone icon
import Slider from "react-slick";
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Icons for arrows

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling
  });
};

const PreviousArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    onClick={onClick}
  >
    <div className="nxtarrow">
      <img src="/images/back.png" />
    </div>
  </div>
);

// Custom Right Arrow
const NextArrow = ({ className, onClick }) => (
  <div className={className} onClick={onClick} >
    <div className="nxtarrow">
      <img src="/images/next.png" />
    </div>

  </div>
);

function Home() {
  const handleDownload = () => {
    const fileUrl = '/images/resume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'gowshick_resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const product = [
    { id: 1, name: "News Application", link:"https://reflectnews.org/ ", image: "/images/1.jpg", paragraph: "React, Node JS, Mongo DB, Html, CSS, Bootstrap" },
    { id: 2, name: "B2B and B2C Application",link:"https://tatlub.vercel.app/ ", image: "/images/2.jpg", paragraph: "React, Node JS, Mongo DB, Html, CSS, Bootstrap" },
    { id: 3, name: "Learning portal", link:"https://mentaroo.com/",image: "/images/3.jpg", paragraph: "React Js, Node JS, Mongo DB, Html, CSS, Bootstrap, ans Azure" },
    { id: 3, name: "Realestate CRM", link:"https://listezadmin.vrikshatech.in/auth", image: "/images/6.jpg", paragraph: "React, Node JS, Mongo DB, Html, CSS, Bootstrap" },
    { id: 3, name: "Campaign Application", link:"https://theatom.co.in/dashboard", image: "/images/7.jpg", paragraph: "React, Node JS, Mongo DB, Html, CSS, Bootstrap" },
    { id: 3, name: "Rental Cars Application",image: "/images/8.jpg", link: "https://play.google.com/store/apps/details?id=com.zonecar.rental&pcampaignid=web_share", paragraph: "Flutter ,Dart, Firebase" },
    { id: 3, name: "Property Sell/Rent & Services Application",image: "/images/10.jpg", link: "https://play.google.com/store/apps/details?id=com.ownhouse.customer&pcampaignid=web_share", paragraph: "Flutter ,Dart, Firebase" },
    { id: 3, name: "Property Buy/Rent Application",image: "/images/9.jpg", link: "https://play.google.com/store/apps/details?id=com.housingroyce.app&pcampaignid=web_share", paragraph: "Flutter ,Dart, Firebase" },
    { id: 3, name: "Astrology Application",image: "/images/4.jpg", paragraph: "Flutter ,Dart" },
    { id: 3, name: "E-Commerce Application for Aquarium", image: "/images/11.png", paragraph: "Flutter ,Dart, Firebase" },
    { id: 3, name: "E-Commerce Application for Pet Store", image: "/images/12.png", paragraph: "Flutter ,Dart, Firebase" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);  // Set the clicked image as selectedImage
  };

  const closeModal = () => {
    setSelectedImage(null);  // Close modal by resetting selectedImage
  };

  const products = [
    { id: 1, name: "Web Development", image: "/images/UIUX.png", paragraph: "React js, HTML, CSS, Bootstrp, Node js, Express js" },
    { id: 2, name: "Database Management", image: "/images/Graphic.png", paragraph: "MongoDB, Firebase and MySQL" },
    { id: 1, name: "Flutter Development", image: "/images/UIUX.png", paragraph: "Flutter, Dart" },
    { id: 3, name: "Development tools", image: "/images/Tools.png", paragraph: "Visual studio code, Android Studio, Postman" },
    { id: 3, name: "Version Control", image: "/images/version.png", paragraph: "Git, GitHub" },
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 3000,
    slidesToShow: 3, // Number of slides per view
    slidesToScroll: 1,
    // nextArrow: <NextArrow />, // Custom right arrow
    // prevArrow: <PreviousArrow />, // Custom left arrow
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="mailto:mpgowshick@gmail.com">
            <img className="emailicon me-2" src="/images/mail-inbox-app.png" />
            <a href="mailto:mpgowshick@gmail.com"> <p className="mb-0">mpgowshick@gmail.com</p></a>
          </a>
          <a className="navbar-brand d-flex align-items-center" href="tel:7010288569">
            <img className="phoneicon me-1" src="/images/phone.png" />
            <a href="tel:7010288569"> <p className="mb-0">+91 70102 88569</p></a>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#about">About</a>
              <a className="nav-link" href="#skilltool">Skills & Tools </a>
              <a className="nav-link" href="#portfolio">Portfolio</a>
              <a className="nav-link" href="#Contact" >Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className=" py-xl-5 py-lg-4  banner-section text-center w-100w">
        <div className="container d-flex flex-column align-items-center py-4">
          <img className="profileimg mb-3" src="/images/profile.jpg" />
          <div className="d-flex align-items-center " >
            <h4>Hi! I'm Gowshick <span className="iconclo"><FontAwesomeIcon icon={faHandPeace} className="iconclo" /> </span></h4>

          </div>

          <h2 className="my-xxl-4 my-3">React Full stack & <br />Flutter Developer.</h2>
          <p>Results-driven Full Stack Developer with 2 years of experience in MERN stack and Flutter
            development. Proven ability to deliver high-quality applications on time and within budget. Adept
            at problem-solving, optimizing performance, and collaborating effectively with cross-functional
            teams. Seeking to leverage my skills and experience to contribute to innovative projects at a
            dynamic company
          </p>
          <div className="row justify-content-center w-100 align-items-center">
            <div className="col-6 d-flex justify-content-end">
           <a  href="#portfolio"><button className="explore" >Explore My Work</button></a>
            </div>
            <div className="col-6">
            <div className="d-flex align-items-center dncv">
      <p className="mb-0 me-2" style={{ cursor: 'pointer' }} onClick={handleDownload}>
        Download CV
      </p>
      <img
        className="download"
        src="/images/document.png"
        alt="Download CV"
        style={{ cursor: 'pointer' }}
        onClick={handleDownload}
      />
    </div>

             
            </div>
          </div>
        </div>

      </div>


      <div className="about_section py-3" id='about'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className="about" src="/images/animation-for-UX-design.gif" />
            </div>

            <div className="col-lg-6">
              <h2>About Me </h2>
              <p>As a Full Stack Developer, I specialize in transforming ideas into high-performance, scalable web and mobile applications. With strong expertise in HTML, CSS, JavaScript, React.js, Dart, and Flutter, I build seamless user experiences and robust solutions across both front-end and back-end. Passionate about writing clean, efficient code, I focus on delivering high-quality applications that are both functional and scalable. I excel in fast-paced environments, leveraging my problem-solving skills and technical knowledge to tackle complex challenges. Adept at collaborating with cross-functional teams, I ensure the seamless integration of design, functionality, and business objectives. Always eager to stay ahead of industry trends, I strive to contribute to innovative projects that make a real impact.
              </p>
              <p>My goal is to create clean, efficient code that powers modern web applications. I'm driven by a love for learning and continuously expanding my skills to stay at the cutting edge of the latest technologies.
              </p>
              <div className="d-flex">
                <a href='tel:7010288569' className='text-dark me-3'>
                <div className="callbtn">
                  <img className="phoneicon me-1" src="/images/phone.png" />
                  +91 70102 88569
                </div>
                </a>
                <a href='mailto:mpgowshick@gmail.com' className='text-dark'>
                <div className="callbtn">
                  <img className="emailicon me-2" src="/images/mail-inbox-app.png" />
                  mpgowshick@gmail.com
                </div>
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="position-relative" id='skilltool'>
        <img className="img0backgrud" src="/images/Skill bg.jpg" />
        <div>
          <div className="skillandtool">
            <div className="container py-xl-5 py-3">

              <h2 className="mb-3 text-center">Skills & Tools </h2>
              <Slider {...settings}>
                {products.map(product => (
                  <div className='h-100'>
                    <div className="slide_content p-3" key={product.id} >

                      <div className="img_bg mb-3">
                        <img src={product.image} alt={product.name} className="service" />
                      </div>

                      <h5 className="mb-3">{product.name}</h5>
                      <p>{product.paragraph}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

       <div className='mb-sm-5 mb-4'>
         <div className='container'>
           <div className='resumepg p-xl-5 p-3 mt-xl-5 mt-5'>
             <div className='d-md-flex justify-content-between align-items-center'>
                 <div className='mb-md-0 mb-3'>
                   <h2>Take a look at my <br/> Resume</h2>
                 </div>
                 <div className=''>
                    <div className='d-flex align-items-center'>
                    <a href='tel:7010288569' className='text-dark'>
                       <div className="callbtn-fhg">
                          <FontAwesomeIcon icon={faPhone} className="me-2" />
                          +91 70102 88569
                       </div></a>

                       <div className="callbtn-fhg-blc" style={{ cursor: 'pointer' }} onClick={handleDownload}>
                           Download CV
                           <FontAwesomeIcon icon={faDownload} className="ms-2" />
                       </div>
                    </div>
                 </div>
             </div>
           </div>
         </div>
       </div>
       <div className='cusyienfbh mb-3'>
         <div className='container'>
            <h2 className='mb-4'>My Experience & <br/> Education</h2>
            <div className='row '>
              <div className='col-lg-6 col-5'>
                <h6>Software Developer</h6>
                <p>2.5 Years (Jun 2022 - Oct 2024)</p>
              </div>
              <div className='col-lg-6 col-7 d-flex px-1'>
                
                <div className='line'>
                   <div className='dot'>
                     <div className='dot-inner'></div>
                   </div>
                   <div className='linehight'></div>
                </div>
                <div className=''>
                   <h6>Vriksha Techno Solutions Private Limited.</h6>
                   <p>Chennai</p>
                   <p> I started my career as a Software Developer, and I currently have 2.5 years of experience in Web and Mobile application development.</p>
                </div>
              
              </div>
            </div>

            <div className='row '>
              <div className='col-lg-6 col-5'>
                <h6>B.E (Computer Science and Engineering)</h6>
                <p>(2016-2020)</p>
              </div>
              <div className='col-lg-6 col-7 d-flex px-1'>                
                <div className='line'>
                   <div className='dot'>
                     <div className='dot-inner'></div>
                   </div>
                   <div className='linehight'></div>
                </div>
                <div className=''>
                   <h6>LJCET</h6>
                   <p>Nagercoil</p>
                   <p>I graduated with a Bachelor's degree in Computer Science and Engineering from Anna University with First Class honors.</p>
                </div>              
              </div>
            </div>
         </div>
       </div>

       <div className="container port-folio" id='portfolio'>
         <p className="mt-3">Portfolio</p>
         <h2 className="mb-4">Let's have a look at my <br/> portfolio</h2>
         <div className="row mb-4">
         {product.map(product => (
          <div className="col-lg-4 col-sm-6 mb-3" key={product.id}>
              <a target='_blank h-100' href={product.link}>
            <div className="slide_content_tex h-100">
              <img
                src={product.image}
                alt={product.name}
                className="imag-slidpoer"
                onClick={() => handleImageClick(product.image)}  // Click event to open modal
                style={{ cursor: 'pointer' }}  // Add pointer to show clickable image
              />
              <h5 className="mb-3">{product.name}</h5>
              <p>{product.paragraph}</p>
            </div></a>
          </div>
        ))}
     
         </div>
       </div>

      <footer className="footer py-xl-5 py-4" id='Contact'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <a href="mailto:mpgowshick@gmail.com"><h4>mpgowshick@gmail.com</h4></a>
              <a href="tel:7010288569"><h4>+91 70102 88569</h4></a>              
              <p>Full stack developer in vriksha techno solutions</p>
            </div>
            <div className="col-md-2"></div>

            <div className="col-md-2 col-4">
              <a target='_blank' href='https://www.linkedin.com/in/gowshickmp/'><h5>LinkedIn</h5></a>
            </div>

            <div className="col-md-2 col-4">
              <a  target='_blank' href='https://github.com/GowshickMP'> <h5>Github</h5></a>     
            </div>

            {/* <div className="col-md-2 col-4">
              <a  href='#'>
                <h5>Youtube</h5>
              </a>
             
          
            </div> */}

          </div>
        </div>
      </footer>
      <div className='logofooter' onClick={scrollToTop} style={{ cursor: 'pointer' }}>
      <img src='/images/icon.jpg' alt='Logo' />
    </div>

    </div>
  );
}

export default Home;