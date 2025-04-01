import React, { useState, useRef } from 'react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import styled from 'styled-components'
import Carousel from './Carousel'
import MultipleRows from './MultipleRows'
import ProductTab from './ProductTab'

const StyledButton = styled.a`
  display: block;
  margin: 0 auto;
  width: 100%;
  margin-top: 20px;
  max-width: 400px;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.3px;
  padding: 12px 10px;
  background-color: $white;
  text-align: center;
`

const StyledItem = styled.p`
  display: list-item;
  list-style: none;

  margin-left: 12px;
  margin-top: 12px;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  color: rgb(194, 200, 204);
`

const ProductShow = () => {
  const specRef = useRef(null)
  const reviewRef = useRef(null)
  const inquiryRef = useRef(null)
  const shipmentRef = useRef(null)
  const recommendationRef = useRef(null)

  const sectionRefs = {
    'product-spec': specRef,
    'product-review': reviewRef,
    'product-inquiry': inquiryRef,
    'product-shipment': shipmentRef,
    'product-recommendation': recommendationRef,
  }

  const images = [
    {
      name: 'image1',
      src: require('../assets/images/img-detail-01.jpg'),
      alt: 'Image 1',
    },
    {
      name: 'image2',
      src: require('../assets/images/img-detail-02.jpg'),
      alt: 'Image 2',
    },
    {
      name: 'image3',
      src: require('../assets/images/img-detail-03.jpg'),
      alt: 'Image 3',
    },
    {
      name: 'image4',
      src: require('../assets/images/img-detail-04.jpg'),
      alt: 'Image 4',
    },
    {
      name: 'image5',
      src: require('../assets/images/img-detail-05.jpg'),
      alt: 'Image 5',
    },
  ]

  const profileImages = [
    {
      name: 'profileImage1',
      src: require('../assets/images/img-user-01.jpg'),
      alt: 'Image1',
    },
    {
      name: 'profileImage2',
      src: require('../assets/images/img-user-02.jpg'),
      alt: 'Image2',
    },
    {
      name: 'profileImage3',
      src: require('../assets/images/img-user-03.jpg'),
      alt: 'Image3',
    },
    {
      name: 'profileImage4',
      src: require('../assets/images/img-user-04.jpg'),
      alt: 'Image4',
    },
    {
      name: 'profileImage5',
      src: require('../assets/images/img-user-05.jpg'),
      alt: 'Image5',
    },
  ]

  const [reviews, setReviews] = useState([
    {
      id: 1,
      username: '꼽창현',
      rating: 5,
      date: '2025.10.06',
      reviewText: '포인트로는 믹스앤매치 침구만한게없죠..💙💙',
      profileImageIndex: 0,
      reviewImageIndex: 0,
      likeCount: 3,
      isReviewLiked: true,
    },
    {
      id: 2,
      username: '김애용',
      rating: 4,
      date: '2024.10.17',
      reviewText: '너무좋아용',
      profileImageIndex: 1,
      reviewImageIndex: null,
      likeCount: 0,
      isReviewLiked: false,
    },
    {
      id: 3,
      username: '박코딩',
      rating: 3,
      date: '2024.11.01',
      reviewText: '괜찮은 제품이네요',
      profileImageIndex: 2,
      reviewImageIndex: 1,
      likeCount: 2,
      isReviewLiked: false,
    },
    {
      id: 4,
      username: '이리뷰',
      rating: 5,
      date: '2024.12.01',
      reviewText: '정말 만족스럽습니다!',
      profileImageIndex: 0,
      reviewImageIndex: 2,
      likeCount: 5,
      isReviewLiked: true,
    },
    {
      id: 5,
      username: '최고최고',
      rating: 4,
      date: '2024.12.05',
      reviewText: '추천합니다!',
      profileImageIndex: 3,
      reviewImageIndex: null,
      likeCount: 1,
      isReviewLiked: false,
    },
    {
      id: 6,
      username: '신박한리뷰',
      rating: 5,
      date: '2024.12.10',
      reviewText: '신박해요!',
      profileImageIndex: 1,
      reviewImageIndex: null,
      likeCount: 0,
      isReviewLiked: false,
    },
    {
      id: 7,
      username: '별다섯개',
      rating: 5,
      date: '2024.12.12',
      reviewText: '별 다섯개 만점이에요!',
      profileImageIndex: 2,
      reviewImageIndex: null,
      likeCount: 4,
      isReviewLiked: false,
    },
    {
      id: 8,
      username: '하이루',
      rating: 4,
      date: '2024.12.14',
      reviewText: '잘 받았습니다!',
      profileImageIndex: 0,
      reviewImageIndex: 1,
      likeCount: 1,
      isReviewLiked: false,
    },
    {
      id: 9,
      username: '그냥좋음',
      rating: 4,
      date: '2024.12.15',
      reviewText: '그냥 좋습니다.',
      profileImageIndex: 3,
      reviewImageIndex: 2,
      likeCount: 2,
      isReviewLiked: false,
    },
  ])

  const reviewImages = [
    { id: 0, src: './assets/images/img-review-01.jpg' },
    { id: 1, src: './assets/images/img-review-02.jpg' },
    { id: 2, src: './assets/images/img-review-03.jpg' },
  ]

  const [currentPage, setCurrentPage] = useState(1)

  const reviewsPerPage = 5

  const sortedReviews = reviews.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  const currentReviews = sortedReviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  )

  const toggleReviewLike = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? {
              ...review,
              isReviewLiked: !review.isReviewLiked,
              likeCount: review.isReviewLiked
                ? review.likeCount - 1
                : review.likeCount + 1,
            }
          : review
      )
    )
  }

  return (
    <>
      <main className="product-show">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="breadcrumb">
                <a href="/">가전</a>
                <i className="ic-chevron" aria-hidden></i>
                <a href="/">계절가전</a>
                <i className="ic-chevron" aria-hidden></i>
                <a href="/">전기히터/온풍기</a>
                <i className="ic-chevron" aria-hidden></i>
                <a href="/">전기히터</a>
              </div>
            </div>
          </div>
          <Carousel></Carousel>
          <div className="row sm-only">
            <div className="col-sm-4 col-lg-8">
              <div className="product-section-divider" aria-hidden></div>
              <section className="product-section product-user-gallery">
                <header className="product-section-header">
                  <h1 className="title">유저들의 스타일링샷</h1>
                  <strong className="badge">270</strong>
                  <a
                    href="/"
                    className="icon-button is-right"
                    aria-label="더보기"
                  >
                    <i className="ic-chevron" aria-hidden></i>
                  </a>
                </header>
                <MultipleRows></MultipleRows>
                <div className="product-section-content">
                  <StyledButton href="/" className="btn-outlined">
                    스타일링샷 전체보기
                    <i className="ic-chevron" aria-hidden></i>
                  </StyledButton>
                </div>
                <StyledItem>
                  해당 상품을 사용하는 유저들이 직접 태그한 콘텐츠로, 스타일링샷
                  속 상품과 실제 판매 상품이 다를 수 있습니다.
                </StyledItem>
              </section>

              <div
                className="product-section-divider sm-only"
                aria-hidden
              ></div>
            </div>
          </div>
        </div>
        <ProductTab sectionRefs={sectionRefs} />
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-lg-8">
              <section className="product-section product-user-gallery sm-hidden">
                <header className="product-section-header">
                  <h1 className="title">유저들의 스타일링샷</h1>
                  <strong className="badge" aria-label="270개">
                    270
                  </strong>
                  <a
                    className="icon-button is-right"
                    href="/"
                    aria-label="더보기"
                  >
                    <i className="ic-chevron" aria-hidden></i>
                  </a>
                </header>

                <div className="product-section-content">
                  <div className="user-gallery is-desktop">
                    <div className="user-gallery-slider">
                      <MultipleRows></MultipleRows>
                      <div className="product-section-content">
                        <StyledButton href="/" className="btn-outlined">
                          스타일링샷 전체보기
                          <i className="ic-chevron" aria-hidden></i>
                        </StyledButton>
                      </div>
                      <StyledItem>
                        해당 상품을 사용하는 유저들이 직접 태그한 콘텐츠로,
                        스타일링샷 속 상품과 실제 판매 상품이 다를 수 있습니다.
                      </StyledItem>
                    </div>
                  </div>
                </div>
              </section>
              <section
                ref={specRef}
                className="product-section product-spec is-open"
                id="product-spec"
              >
                <header className="product-section-header sm-hidden">
                  <h1 className="title">상품 정보</h1>
                </header>

                <div className="product-section-content">
                  <div className="button-wrapper sm-only">
                    <button className="btn-primary btn-55" type="button">
                      펼치기
                    </button>
                  </div>
                  <figure>
                    <img src="/" alt="" />
                    <figcaption className="visually-hidden">
                      보아르 전기 히터 상세 이미지 01
                    </figcaption>
                  </figure>

                  {images.map((image, index) => (
                    <figure key={index}>
                      <img src={image.src} alt="" />
                      <figcaption className="visually-hidden">
                        보아르 전기 히터 상세 이미지 {index}
                      </figcaption>
                    </figure>
                  ))}

                  <table className="product-table">
                    <tbody>
                      <tr>
                        <th scope="row">품명 및 모델명</th>
                        <td>VO-HT015</td>
                      </tr>
                      <tr>
                        <th scope="row">KC 인증 필 유무</th>
                        <td>SU071586-19003</td>
                      </tr>
                      <tr>
                        <th scope="row">정격전압, 소비전력</th>
                        <td>AC220V, 60Hz, 400W</td>
                      </tr>
                      <tr>
                        <th scope="row">에너지소비효율등급</th>
                        <td>해당사항없음</td>
                      </tr>
                      <tr>
                        <th scope="row">동일모델의 출시년월</th>
                        <td>2019.11</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          제조자, 수입품의 경우 수입자를 함께 표기
                        </th>
                        <td>보아르주식회사</td>
                      </tr>
                      <tr>
                        <th scope="row">제조국</th>
                        <td>중국</td>
                      </tr>
                      <tr>
                        <th scope="row">크기</th>
                        <td>338*122*300 mm</td>
                      </tr>
                      <tr>
                        <th scope="row">냉난방면적</th>
                        <td>개인용</td>
                      </tr>
                      <tr>
                        <th scope="row">추가설치비용</th>
                        <td>해당사항없음</td>
                      </tr>
                      <tr>
                        <th scope="row">품질보증기준</th>
                        <td>구매일로부터 1년 이내 무상 A/S가능</td>
                      </tr>
                      <tr>
                        <th scope="row">A/S 책임자와 전화번호</th>
                        <td>1661-4555</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div
                className="product-section-divider sm-only"
                aria-hidden
              ></div>

              <section
                ref={reviewRef}
                className="product-section product-review"
                id="product-review"
              >
                <header className="product-section-header">
                  <h1 className="title">리뷰</h1>
                  <strong className="badge" aria-label="295개">
                    295
                  </strong>
                  <a href="/" className="text-button">
                    리뷰쓰기
                  </a>
                </header>

                <div className="product-section-content">
                  <div className="review-scoreboard">
                    <div className="score-summary">
                      <strong className="average-score" aria-label="평점 4.8">
                        4.8
                      </strong>
                      <div className="star-rating">
                        <i className="ic-star is-active"></i>
                        <i className="ic-star is-active"></i>
                        <i className="ic-star is-active"></i>
                        <i className="ic-star is-active"></i>
                        <i className="ic-star is-active"></i>
                      </div>
                    </div>

                    <div className="score-detail">
                      <dl className="score-stats-list">
                        <div className="score-stats-item is-active">
                          <dt>5점</dt>
                          <dd>
                            <div className="bar-graph">
                              <div
                                className="active-bar"
                                style={{ width: '83.72881355%' }}
                              ></div>
                            </div>
                            <strong className="count" aria-label="247명">
                              247
                            </strong>
                          </dd>
                        </div>

                        <div className="score-stats-item">
                          <dt>4점</dt>
                          <dd>
                            <div className="bar-graph">
                              <div
                                className="active-bar"
                                style={{ width: '12.54237288%' }}
                              ></div>
                            </div>
                            <strong className="count" aria-label="37명">
                              37
                            </strong>
                          </dd>
                        </div>

                        <div className="score-stats-item">
                          <dt>3점</dt>
                          <dd>
                            <div className="bar-graph">
                              <div
                                className="active-bar"
                                style={{ width: '2.37288135%' }}
                              ></div>
                            </div>
                            <strong className="count" aria-label="7명">
                              7
                            </strong>
                          </dd>
                        </div>

                        <div className="score-stats-item">
                          <dt>2점</dt>
                          <dd>
                            <div className="bar-graph">
                              <div className="active-bar"></div>
                            </div>
                            <strong className="count" aria-label="0명">
                              0
                            </strong>
                          </dd>
                        </div>

                        <div className="score-stats-item">
                          <dt>1점</dt>
                          <dd>
                            <div className="bar-graph">
                              <div
                                className="active-bar"
                                style={{ width: '1.35593220%' }}
                              ></div>
                            </div>
                            <strong className="count" aria-label="4명">
                              4
                            </strong>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="product-section-content">
                    <ol className="review-list">
                      {currentReviews.map((review) => (
                        <li key={review.id} className="review-item">
                          <article className="review-card">
                            <header className="review-card-header">
                              <h3 className="visually-hidden">
                                {review.username} 님이 작성한 리뷰
                              </h3>
                              <a href="/" className="avatar-24">
                                <img
                                  src={
                                    profileImages[review.profileImageIndex].src
                                  }
                                  alt={
                                    profileImages[review.profileImageIndex].alt
                                  }
                                />
                              </a>

                              <div className="info">
                                <a href="/" className="username">
                                  <strong>{review.username}</strong>
                                </a>

                                <div className="detail">
                                  <button
                                    className="star-rating-16"
                                    aria-label={`${review.rating}점`}
                                  >
                                    <div className="rate-wrapper">
                                      <i className="ic-star is-active"></i>
                                      <i className="ic-star is-active"></i>
                                      <i className="ic-star is-active"></i>
                                      <i className="ic-star is-active"></i>
                                      <i className="ic-star is-active"></i>
                                    </div>
                                    <i className="ic-chevron"></i>
                                  </button>

                                  <div className="misc">
                                    <time dateTime={review.date}>
                                      {review.date}{' '}
                                    </time>
                                    <span> 오늘의집 구매</span>
                                  </div>
                                </div>
                              </div>
                            </header>

                            <div className="review-card-body">
                              {review.reviewImageIndex !== null && (
                                <div className="review-image">
                                  <img
                                    src={
                                      reviewImages[review.reviewImageIndex].src
                                    }
                                    alt={`리뷰 이미지 ${review.reviewImageIndex}`}
                                  />
                                </div>
                              )}

                              <p>{review.reviewText}</p>
                            </div>

                            <footer className="review-card-footer">
                              <button
                                className={`btn-32 ${
                                  review.isReviewLiked
                                    ? 'btn-primary'
                                    : 'btn-outlined'
                                }`}
                                onClick={() => {
                                  toggleReviewLike(review.id)
                                }}
                              >
                                {review.isReviewLiked
                                  ? '도움됨'
                                  : '도움이 돼요'}
                              </button>

                              {review.likeCount > 0 && (
                                <p>
                                  <strong>
                                    <span>{review.likeCount}</span>명
                                  </strong>
                                  에게 도움이 되었습니다.
                                </p>
                              )}
                            </footer>
                          </article>
                        </li>
                      ))}
                    </ol>

                    <div className="pagination">
                      <ol className="page-list">
                        {[
                          ...Array(
                            Math.ceil(sortedReviews.length / reviewsPerPage)
                          ),
                        ].map((_, index) => (
                          <li
                            key={index}
                            className={`page-item ${
                              currentPage === index + 1 ? 'is-active' : ''
                            }`}
                            onClick={() => setCurrentPage(index + 1)}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setCurrentPage(index + 1)
                              }}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}
                      </ol>
                      <button className="page-control page-next" type="button">
                        <i className="ic-chevron"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <div
                className="product-section-divider sm-only"
                aria-hidden
              ></div>

              <section
                ref={inquiryRef}
                className="product-section product-inquiry is-open"
                id="product-inquiry"
              >
                <header className="product-section-header">
                  <h1 className="title">문의</h1>
                  <strong className="badge" aria-label="96개">
                    96
                  </strong>
                  <a className="text-button" href="/">
                    문의하기
                  </a>
                  <button
                    className="icon-button sm-only"
                    type="button"
                    aria-label="더보기"
                  >
                    <i className="ic-chevron" aria-hidden></i>
                  </button>
                </header>

                <div className="product-section-content">
                  <ol className="inquiry-list">
                    {/* 답변이 달린 경우 */}
                    <li className="inquiry-item">
                      <article className="inquiry-card">
                        <header className="inquiry-card-header">
                          <h3 className="visually-hidden">
                            공* 님이 남기신 문의
                          </h3>
                          <dl className="detail">
                            <dt className="visually-hidden">구매 여부</dt>
                            <dd>비구매</dd>
                            <dt className="visually-hidden">문의 유형</dt>
                            <dd>상품</dd>
                            <dt className="visually-hidden">답변 여부</dt>
                            <dd>미답변</dd>
                          </dl>

                          <div className="misc">
                            <strong>공*</strong>
                            <time dateTime="2024-11-08 01:49">
                              2024년 11월 08일 01시 49분
                            </time>
                          </div>
                        </header>

                        <div className="inquiry-card-body">
                          <div className="inquiry-content">
                            <span>Q</span>
                            <p>
                              화이트 재입고 날짜 알려 주세요 그리고 4평 남짓
                              방에 두려고 하는데 너무 가까울까요
                            </p>
                          </div>
                        </div>
                      </article>
                    </li>

                    {/* 비밀글인 경우 */}
                    <li className="inquiry-item">
                      <article className="inquiry-card">
                        <header className="inquiry-card-header">
                          <h3 className="visually-hidden">
                            꼽창* 님이 남기신 문의
                          </h3>
                          <dl className="detail">
                            <dt className="visually-hidden">구매 여부</dt>
                            <dd>비구매</dd>
                            <dt className="visually-hidden">문의 유형</dt>
                            <dd>상품</dd>
                            <dt className="visually-hidden">답변 여부</dt>
                            <dd>미답변</dd>
                          </dl>

                          <div className="misc">
                            <strong>꼽창*</strong>
                            <time dateTime="2024-11-07 21:20">
                              2024년 11월 07일 21시 20분
                            </time>
                          </div>
                        </header>

                        <div className="inquiry-card-body">
                          <div className="inquiry-content">
                            <span>Q</span>
                            <p>
                              <i className="ic-lock" aria-hidden></i>
                              비밀글입니다.
                            </p>
                          </div>
                        </div>
                      </article>
                    </li>

                    <li className="inquiry-item">
                      <article className="inquiry-card">
                        <header className="inquiry-card-header">
                          <h3 className="visually-hidden">
                            삼* 님이 남기신 문의
                          </h3>
                          <dl className="detail">
                            <dt className="visually-hidden">구매 여부</dt>
                            <dd>구매</dd>
                            <dt className="visually-hidden">문의 유형</dt>
                            <dd>상품</dd>
                            <dt className="visually-hidden">답변 여부</dt>
                            <dd>답변완료</dd>
                          </dl>

                          <div className="misc">
                            <strong>삼*</strong>
                            <time dateTime="2024-10-15 12:34">
                              2024년 10월 15일 12시 34분
                            </time>
                          </div>
                        </header>

                        <div className="inquiry-card-body">
                          <div className="inquiry-content">
                            <span>Q</span>
                            <p>
                              안녕하세요 기본으로 오는 배게는 리본인가요
                              일반인가요?
                            </p>
                          </div>
                          <div className="inquiry-content">
                            <span>A</span>
                            <div className="seller">
                              <strong>_믹스앤매치_</strong>
                              <time dateTime="2024-10-16 09:04">
                                2024년 10월 16일 09시 04분
                              </time>
                            </div>
                            <p>
                              안녕하세요 고객님 리본베개커버로 진행이 되며
                              일반베개커버로 진행을 원하실 경우 배송메세지에
                              기재해주시면 확인 후 변경 처리를 도와드리고
                              있습니다 :) 저희 믹스앤매치를 찾아주셔서
                              감사합니다.
                            </p>
                          </div>
                        </div>
                      </article>
                    </li>
                  </ol>
                </div>
              </section>
              <div
                className="product-section-divider sm-only"
                aria-hidden
              ></div>

              <div
                ref={shipmentRef}
                className="product-shipment"
                id="product-shipment"
              >
                <header className="product-section-header sm-only">
                  <h1 className="title">배송/교환/환불</h1>

                  <button
                    className="icon-button"
                    type="button"
                    aria-label="더보기"
                  >
                    <i className="ic-chevron" aria-hidden></i>
                  </button>
                </header>

                <section className="product-section">
                  <header className="product-section-header">
                    <h1 className="title">배송</h1>
                  </header>

                  <div className="product-section-content">
                    <table className="product-table">
                      <tbody>
                        <tr>
                          <th scope="row">배송</th>
                          <td>일반택배</td>
                        </tr>
                        <tr>
                          <th scope="row">배송비</th>
                          <td>무료 배송</td>
                        </tr>
                        <tr>
                          <th scope="row">배송불가 지역</th>
                          <td>배송불가 지역이 없습니다</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <div
                  className="product-section-divider sm-only"
                  aria-hidden
                ></div>

                <section className="product-section">
                  <header className="product-section-header">
                    <h1 className="title">교환/환불</h1>
                  </header>

                  <div className="product-section-content">
                    <table className="product-table">
                      <tbody>
                        <tr>
                          <th scope="row">반품배송비</th>
                          <td>
                            2,500원 (최초 배송비가 무료인 경우 5,000원 부과)
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">교환배송비</th>
                          <td>5,000원</td>
                        </tr>
                        <tr>
                          <th scope="row">보내실 곳</th>
                          <td>(00000) 서울 종로구 누하동</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductShow
