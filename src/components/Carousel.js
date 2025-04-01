import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image1 from '../assets/images/img-product-01.jpg'
import image2 from '../assets/images/img-product-02.jpg'
import image3 from '../assets/images/img-product-03.jpg'
import image4 from '../assets/images/img-product-04.jpg'

function Carousel() {
  const items = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
  ]

  const settings = {
    customPaging: function (i) {
      const id = items[i].id
      const src = items[i].src
      return (
        <button>
          <img src={src} alt={`${id}번 이미지`} />
        </button>
      )
    },
    arrows: false,
    autoplay: true,
    infinite: true,
    dots: true,
    dotsClass: 'product-carousel-thumbnail sm-hidden',
  }

  return (
    <div className="row">
      <div className="col-sm-4 col-md-6 col-lg-7">
        <div className="product-carousel" role="region">
          <div className="product-carousel-slider">
            <Slider {...settings}>
              {items.map((item) => {
                return (
                  <div
                    className="slider-item"
                    role="tabpanel"
                    aria-labelledby={`product-carousel-tab-${item.id}`}
                    key={item.id}
                  >
                    <figure>
                      <img src={item.src} alt="" />
                      <figcaption className="visually-hidden">
                        {`보아르 전기히터 상세 이미지 ${item.id}`}
                      </figcaption>
                    </figure>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div className="col-sm-4 col-md-6 col-lg-5">
        <section className="product-info">
          <header className="product-info-header">
            <a href="/" className="info-brand">
              보아르
            </a>
            <h1 className="info-title">
              캠핑/가정용 400W 미니멀 전기히터 VO-HT015 (안전장치기능탑재)
            </h1>

            <div className="info-review">
              <div className="star-rating">
                <i className="ic-star is-active"></i>
                <i className="ic-star is-active"></i>
                <i className="ic-star is-active"></i>
                <i className="ic-star is-active"></i>
                <i className="ic-star is-active"></i>
              </div>

              <p>
                <span className="sm-only">(</span>
                <strong>332</strong>
                <span className="sm-only">)</span>
                <span className="sm-hidden">개 리뷰</span>
              </p>
            </div>
          </header>

          <div className="product-info-price sm-only">
            <div className="info-original-price">
              <div className="discount-rate">
                <span className="rate">34</span>
                <span className="percent">%</span>
              </div>

              <div className="price-off">
                <strong className="amount">73,900</strong>
              </div>
            </div>

            <div className="info-sale-price">
              <div className="price-20">
                <strong className="amount">48,900</strong>
                <span className="currency">원</span>
              </div>

              <strong className="tag-red">특가</strong>
            </div>

            <div className="info-sale-cprice">
              <div className="price-20">
                <strong className="amount">44,010</strong>
                <span className="currency">원</span>
                <span className="final-price">쿠폰적용시</span>
              </div>

              <button className="btn-32" type="button">
                쿠폰받기
              </button>
            </div>
          </div>

          {/* NOTE: 태블릿 이후 가격 표시 */}
          <div className="product-info-price sm-hidden">
            <div className="info-price-wrapper">
              <div className="discount-rate">
                <span className="rate">34</span>
                <span className="percent">%</span>
              </div>

              <div className="info-price">
                <div className="price-off">
                  <strong className="amount">49,900</strong>
                  <span className="currency">원</span>
                </div>
              </div>
            </div>
            <div className="info-sale-price">
              <div className="price-32">
                <strong className="amount">48,900</strong>
                <span className="currency">원</span>
                <strong className="tag-red">특가</strong>
              </div>
            </div>
          </div>

          <div className="product-info-cprice sm-hidden">
            <div className="price-32">
              <strong className="amount">39,120</strong>
              <span className="currency">원</span>
              <span className="final-price">쿠폰적용시</span>
            </div>
            <button className="btn-32" type="button">
              쿠폰받기
            </button>
          </div>

          <div className="product-info-banner">
            <h3 className="header">
              <i className="ic-cart"></i>
              쿠폰가에서 5% 더 할인돼요!
            </h3>
            <p className="caption">8만원 이상 결제시 장바구니 쿠폰 적용 가능</p>
          </div>
        </section>

        <section className="product-detail">
          <div className="product-detail-promotion">
            <div className="promotion-title">
              <span>혜택</span>
            </div>
            <div className="promotion-content">
              <p>
                <strong>49P </strong>
                적립 (WELCOME 0.1% 적립)
              </p>
            </div>
          </div>
          <div className="product-detail-delivery">
            <div className="delivery-title">
              <span>배송</span>
            </div>
            <div className="delivery-content">
              <span className="delivery-fee">
                <span>
                  <strong>3,500원 </strong>
                  <small>(60,000원 이상 구매시 무료배송)</small>
                </span>
              </span>
              <span className="delivery-type">
                <span>일반택배</span>
              </span>
              <span className="delivery-disclaimer">
                <i className="ic-check"></i>
                <span>제주도/도서산간 지역 5,000원</span>
              </span>
              <div className="delivery-expectation">
                <div className="delivery-expectation-wrapper">
                  <div className="delivery-expectation-header">
                    <i className="ic-store"></i>
                    <span className="text">
                      <span className="date">10/18 (금) </span>
                      도착 예정
                    </span>
                  </div>
                </div>
              </div>
              <span className="delivery-group">
                <a className="delivery-group-button" href="/">
                  묶음배송 상품 추가하기
                  <i className="ic-chevron"></i>
                </a>
              </span>
            </div>
          </div>
          <a className="product-detail-brand" href="/">
            <div className="brand-info">
              <i className="ic-community"></i>
              <div className="brand-name">
                <span>믹스앤매치</span>
              </div>
            </div>
            <div className="brand-home-link">
              <span>브랜드홈</span>
              <i className="ic-chevron"></i>
            </div>
          </a>
        </section>

        <form
          action="/"
          className="order-form sm-hidden"
          method="POST"
        >
          <div className="order-inputs">
            <div className="select-group is-active">
              <select
                className="form-select"
                id="floating-order-form-select-1"
                required
              >
                <option value="">사이즈</option>
                <option value="0">SS(47,900 ~ 48,900원)</option>
                <option value="1">Q(67,900원)</option>
              </select>
              <i className="ic-caret" aria-hidden></i>
            </div>
            <div className="select-group">
              <select className="form-select" id="floating-order-form-select-2">
                <option value="">추가상품 (선택)</option>
                <option value="1">선택사항 1</option>
                <option value="2">선택사항 2</option>
                <option value="3">선택사항 3</option>
                <option value="4">선택사항 4</option>
                <option value="5">선택사항 5</option>
              </select>
              <i className="ic-caret" aria-hidden></i>
            </div>
          </div>

          <div className="order-checkouts">
            <ul className="checkout-list">
              <li className="checkout-item">
                <div className="checkout-card">
                  <header className="checkout-header">
                    <h4 className="checkout-title">
                      사이즈: SS / 컬러: 블루블랙
                    </h4>
                    <button
                      className="delete-button"
                      type="button"
                      aria-label="해당 상품을 삭제하기"
                    >
                      <i className="ic-close" aria-hidden></i>
                    </button>
                  </header>
                  <footer className="checkout-footer">
                    <div className="checkout-select">
                      <select id="floating-order-form-checkout-item-1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <i className="ic-caret" aria-hidden></i>
                    </div>

                    <output
                      className="checkout-output"
                      htmlFor="floating-order-form- checkout-item-1"
                    >
                      <div className="price-16">
                        <strong className="amount">47,900</strong>
                        <span className="currency">원</span>
                      </div>
                    </output>
                  </footer>
                </div>
              </li>
            </ul>
          </div>

          <hr className="sidebar-divider" />

          <dl className='order-summary'>
            <dt>주문금액</dt>
            <dd>
              <output htmlFor="select-1 select-2">
                <div className='price-20'>
                  <strong className='amount'>47,900</strong>
                  <span className='currency'>원</span>
                </div>
              </output>
            </dd>
          </dl>

          <div className="button-group">
            <button className='btn-outlined btn-55'>장바구니</button>
            <button className='btn-primary btn-55'>바로구매</button>
          </div>
        </form>


      </div>
    </div>
  )
}

export default Carousel
