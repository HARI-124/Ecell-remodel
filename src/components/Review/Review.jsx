import React from 'react'
import "./review.css"
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import Carousel from 'react-bootstrap/Carousel';

const Review = () => {
  return (
    <div className='ecell__review'>
    <h1><strong>What people think about us</strong></h1>
    <Carousel variant='dark'>
      <Carousel.Item>
        <div className='cItems'>
          
          <Carousel.Caption>
          
          <div className='cItems-captions'>

          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
            <h3>BV Jagadeesh</h3>
            <h4>Founder, KAAJ Ventures</h4>
            <p> IIT(BHU), Varanasi, is a very vibrant group of student entrepreneurs and mentors who are a very passionate group of alumni and friends of IIT(BHU). 
            whatever they do, whether the annual E-Summit, Culture E-Cell or ThingQbator, they do with so much enthusiasm and energy. As a friend of IIT(BHU), I very much enjoy teaching my entrepreneurship class every year to future entrepreneurs, organized by the dynamic IIT(BHU) E-Cell volunteers. It is also a pleasure to enjoy the hospitality of the place and students which is very unique to IIT(BHU).</p>
          </div>
         
          </Carousel.Caption>
        </div>
        
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='cItems'>
        
          <Carousel.Caption>
          <div className='cItems-captions'>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

            <h3>Manish Gupta</h3>
            <h4>VP Architectures-APJ, Cisco</h4>
            <p>It was an honor to participate in the E-Summit 2020. The amount of energy and passion displayed by the budding entrepreneurs was impressive at the very least. It was heartening to see how the E-Cell and the ThingQbator teams are striving to provide a platform to nurture the entrepreneurship mindset among the students. I believe that in the world of startups, there are no "failures", there are "successes" and there are "successful-failures". So, to all involved, I wish you plenty of both in the coming years.

Previous
</p>
          
          </div>
          
          
          </Carousel.Caption>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='cItems'>
       

          <Carousel.Caption>
            
          <div className='cItems-captions'>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

              <h3>Vishwanathan Iyer</h3>
              <h4>Founder, Alphonso Inc.</h4>
                  <p>
                  IIT(BHU), Varanasi, is working to create a culture of innovation and entrepreneurship in the student community. So pleased to see this community grow with the active participation of the student community coupled with an equally passionate group of alumni, faculty, and friends of IIT(BHU). Happy to see this enthusiasm and energy in the annual E-Summit, Culture E-Cell or CiscoThingQbator. Looking forward to being back in person for the annual events on the campus in the not-so-distant future.

                  Previous

                  </p>
          </div>
            
        </Carousel.Caption>
          </div>
        
        
      </Carousel.Item>
    </Carousel>

    </div>




  )
}

export default Review