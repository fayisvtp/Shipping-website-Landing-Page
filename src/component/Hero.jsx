import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../assets/hero1.jpg';
import image2 from '../assets/user.png'
function Hero() {
  const backgroundImageStyle = {
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={backgroundImageStyle} className="Hero-bgimg position-relative">
      <div className='hero-overlay position-absolute w-100 h-100' style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col>
            <p className='Hero_paraup text-white '>we are best logistic company</p>
              <h1 className="Hero_heading text-white ">Streamline Your Shipping with <br /> Our Cargo Services</h1>
              <p className="Hero_para1 text-white">Simplify your shipping process and make it more efficient with our <br /> cargo services. From start to finish, we'll handle everything to ensure <br /> your cargo arrives safely.</p>
            </Col>
        <div className="heroCard col-12 d-flex ">
          <div className="heroCard-left col-6 ml-5 d-flex">
<img src={image2} alt="user " />
<div className="d-flex w-5 justify-content-between ">
<div className="d-flex flex-column text-light">
                    <h1>26K</h1>
                    <p>Satisfied Clients</p>
                  </div>
                  <div className='line-dotted mx-3 bg-light' style={{ width: '1px', height: 'full', border: '1px dotted', borderSpacing: '5px' }}>
</div>

                  
<div className="d-flex flex-column text-light  ">
                    <h1>12K</h1>
                    <p>Years of Experience</p>
                  </div>
                  </div>

        
          </div>
         
          <div className="heroCard-right col-6 d-flex justify-content-start align-items-center " style={{ backgroundColor: '#090E23'  }}>
            <div className="col-12 d-flex justify-content-center text-light align-items-center" >
  <div className="inputt m-3 col-6 text-light">
    <input type="text" placeholder="tracking id" style={{background:'none'}} />
    <p className="">See the tracking id on shipping document. Help</p>
  </div>
  <div className="input_btn btn col-6 d-flex justify-content-center text-light align-items-center " style={{backgroundColor:'#1195D6',height:'50px',}}>
  <h5>TRACK</h5>
  </div>
</div>
</div>
        </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
