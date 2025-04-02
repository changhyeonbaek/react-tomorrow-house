import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image1 from './../assets/images/img-review-01.jpg'
import image2 from './../assets/images/img-review-02.jpg'
import image3 from './../assets/images/img-review-03.jpg'
import image4 from './../assets/images/img-review-05.jpg'
import image5 from './../assets/images/img-review-01.jpg'
import image6 from './../assets/images/img-review-02.jpg'
import styled from 'styled-components'

const StyledArea = styled.div`

`

const MultipleRows = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768, // 화면 크기가 768px 이하일 때
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  }

  const images = [image1, image2, image3, image4, image5, image6]
  return (
    <StyledArea>
      <Slider {...settings} style={{ maxWidth: '96%' }}>
        {images.map((image, index) => (
          <div key={index} style={{ width: '100%', margin: '0 auto' }}>
            <div style={{ width: '100%', padding: '2px' }}>
              <img
                src={image}
                alt={`slide-${index}`}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            {images[index + 1] && (
              <div style={{ width: '100%', padding: '2px' }}>
                <img
                  src={images[index + 1]}
                  alt={`slide-${index + 1}`}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            )}
          </div>
        ))}
      </Slider>
    </StyledArea>
  )
}

export default MultipleRows
