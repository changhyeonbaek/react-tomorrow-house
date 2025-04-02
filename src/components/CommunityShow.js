import React, { useEffect, useRef, useState } from 'react'
import { db } from '../firebase'
import { create } from 'zustand'

import ProjectImage01 from '../assets/images/project-image-01.jpg'
import PromotionImage01 from '../assets/images/promotion-image-01.png'
import PromotionImage02 from '../assets/images/promotion-image-02.png'
import PromotionImage03 from '../assets/images/promotion-image-03.png'
import PromotionImage04 from '../assets/images/promotion-image-04.png'
import PromotionImage05 from '../assets/images/promotion-image-05.png'
import PromotionImage06 from '../assets/images/promotion-image-06.png'
import PromotionImage07 from '../assets/images/promotion-image-07.png'
import PromotionImage08 from '../assets/images/promotion-image-08.png'
import PromotionImage09 from '../assets/images/promotion-image-09.png'
import PromotionImage10 from '../assets/images/promotion-image-10.png'
import promotionData from '../data/promotion-data.json'
import userImage05 from '../assets/images/img-user-05.jpg'
import recommendImage01 from '../assets/images/recommend-img-01.jpg'
import recommendImage02 from '../assets/images/recommend-img-02.jpg'
import recommendImage03 from '../assets/images/recommend-img-03.jpg'
import recommendImage04 from '../assets/images/recommend-img-04.jpg'
import CommerceSliderImg01 from '../assets/images/commerce-slider-img-01.jpg'
import CommerceSliderImg02 from '../assets/images/commerce-slider-img-02.jpg'
import HouseDecoImg01 from '../assets/images/house-deco-img-01.jpg'
import HouseDecoImg02 from '../assets/images/house-deco-img-02.jpg'
import HouseDecoImg03 from '../assets/images/house-deco-img-03.jpg'
import HouseDecoImg04 from '../assets/images/house-deco-img-04.jpg'
import CategoryImg01 from '../assets/images/category-img-01.jpg'
import CategoryImg02 from '../assets/images/category-img-02.jpg'
import CategoryImg03 from '../assets/images/category-img-03.jpg'
import CategoryImg04 from '../assets/images/category-img-04.jpg'
import CategoryImg05 from '../assets/images/category-img-05.jpg'
import CategoryImg06 from '../assets/images/category-img-06.jpg'
import CategoryImg07 from '../assets/images/category-img-07.jpg'
import CategoryImg08 from '../assets/images/category-img-08.jpg'
import CategoryImg09 from '../assets/images/category-img-09.jpg'
import CategoryImg10 from '../assets/images/category-img-10.jpg'
import CategoryImg11 from '../assets/images/category-img-11.jpg'
import CategoryImg12 from '../assets/images/category-img-12.jpg'
import CategoryImg13 from '../assets/images/category-img-13.jpg'
import CategoryImg14 from '../assets/images/category-img-14.jpg'
import CategoryImg15 from '../assets/images/category-img-15.jpg'
import categoryData from '../data/category-data.json'
import DeliveryBadgeToday from '../assets/images/today-delivery-01.png'
import ItemImage01 from '../assets/images/item-img-01.jpg'
import ItemImage02 from '../assets/images/item-img-02.jpg'
import ItemImage03 from '../assets/images/item-img-03.jpg'
import ItemImage04 from '../assets/images/item-img-04.jpg'
import InteriorReviewImg01 from '../assets/images/interior-reivew-01.jpg'
import InteriorReviewImg02 from '../assets/images/interior-reivew-02.jpg'
import InteriorReviewImg03 from '../assets/images/interior-reivew-03.jpg'
import SpecialExhibitionImg01 from '../assets/images/special-exihibition-img-01.jpg'
import SpecialExhibitionImg02 from '../assets/images/special-exihibition-img-02.jpg'
import SpecialExhibitionImg03 from '../assets/images/special-exihibition-img-03.jpg'
import SpecialExhibitionImg04 from '../assets/images/special-exihibition-img-04.jpg'

import bestCategoryData from '../data/best-category-data.json'
import { collection, getDocs } from 'firebase/firestore'

const useStore = create(() => ({
  count: 34,
}))

const imageMap = {
  'promotion-image-01': PromotionImage01,
  'promotion-image-02': PromotionImage02,
  'promotion-image-03': PromotionImage03,
  'promotion-image-04': PromotionImage04,
  'promotion-image-05': PromotionImage05,
  'promotion-image-06': PromotionImage06,
  'promotion-image-07': PromotionImage07,
  'promotion-image-08': PromotionImage08,
  'promotion-image-09': PromotionImage09,
  'promotion-image-10': PromotionImage10,
}

const categoryImageMap = {
  'category-img-01': CategoryImg01,
  'category-img-02': CategoryImg02,
  'category-img-03': CategoryImg03,
  'category-img-04': CategoryImg04,
  'category-img-05': CategoryImg05,
  'category-img-06': CategoryImg06,
  'category-img-07': CategoryImg07,
  'category-img-08': CategoryImg08,
  'category-img-09': CategoryImg09,
  'category-img-10': CategoryImg10,
  'category-img-11': CategoryImg11,
  'category-img-12': CategoryImg12,
  'category-img-13': CategoryImg13,
  'category-img-14': CategoryImg14,
  'category-img-15': CategoryImg15,
}

const CommunityShow = () => {
  const categoryListRef = useRef(null)
  const [bestItems, setBestItems] = useState([])
  const {count} = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bestItemsSnapShot = await getDocs(collection(db, 'bestItems'))
        const bestItemsData = bestItemsSnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setBestItems(bestItemsData)
      } catch (error) {
        console.error('데이터 가져오기 오류: ', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const categoryList = categoryListRef.current
    if (!categoryList) return

    const updateAfterVisibility = () => {
      const scrollLeft = categoryList.scrollLeft
      const maxScroll = categoryList.scrollWidth - categoryList.clientWidth
      if (scrollLeft >= maxScroll - 5) {
        categoryList.classList.add('hide-after')
      } else {
        categoryList.classList.remove('hide-after')
      }
    }

    categoryList.addEventListener('scroll', updateAfterVisibility)
    updateAfterVisibility()

    return () =>
      categoryList.removeEventListener('scroll', updateAfterVisibility)
  }, [])

  return (
    <>
      <div className="community-show">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="media-wrapper">
                <section className="project-image sm-hidden">
                  <a href="/">
                    <img src={ProjectImage01} alt="" />
                    <div className="project-image-desc">
                      <p>오묘한 매력이 있는 33평 스타일링🖤</p>
                      <span>
                        <div className="avatar-20">
                          <img src={userImage05} alt="" />
                        </div>
                        <span className="username">꼽창현</span>
                      </span>
                    </div>
                  </a>
                </section>
                <section className="commerce-carousel">
                  <a href="/">
                    {/* <img src={CommerceSliderImg01} alt="" /> */}
                    <picture>
                      {/* 태블릿 이상 (768px 이상) */}
                      <source
                        media="(min-width: 768px)"
                        srcSet={CommerceSliderImg01}
                      />
                      {/* 모바일 (767px 이하) */}
                      <source
                        media="(max-width: 767px)"
                        srcSet={CommerceSliderImg02}
                      />
                      {/* 기본 이미지 (Fallback) */}
                      <img
                        src={CommerceSliderImg01}
                        alt="슬라이드 이미지"
                        className="commerce-carousel-img"
                      />
                    </picture>
                  </a>
                </section>
              </div>
              <div className="promotion-wrapper">
                <div className="promotion-content">
                  {promotionData.map((item, index) => (
                    <div className="promotion-content-list" key={index}>
                      <a href="/">
                        <img
                          src={imageMap[item.name]}
                          alt={`프로모션 이미지: ${item.name}`}
                        />
                        <span className="title">{item.title}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="section-divider sm-only" />

              <div className="community-section recommendation-wrapper">
                <div className="community-section-header">
                  <div className="title">
                    <strong>이런 사진 찾고 있나요?</strong>
                    <span>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</span>
                  </div>
                  <div className="icon sm-only">
                    <i className="ic-chevron"></i>
                  </div>
                  <div className="icon sm-hidden">
                    <button type="button" className="more-button">
                      더보기
                    </button>
                  </div>
                </div>
                <div className="media">
                  <ul className="recommendation-list">
                    <li className="recommendation-list-item">
                      <a href="/">
                        <img src={recommendImage01} alt="" />
                        <div className="username">
                          <span>supadope</span>
                        </div>
                      </a>
                    </li>
                    <li className="recommendation-list-item">
                      <a href="/">
                        <img src={recommendImage02} alt="" />
                        <div className="username">
                          <span>thankstoyall</span>
                        </div>
                      </a>
                    </li>
                    <li className="recommendation-list-item">
                      <a href="/">
                        <img src={recommendImage03} alt="" />
                        <div className="username">
                          <span>iamthebest</span>
                        </div>
                      </a>
                    </li>
                    <li className="recommendation-list-item">
                      <a href="/">
                        <img src={recommendImage04} alt="" />
                        <div className="username">
                          <span>nbt</span>
                        </div>
                      </a>
                    </li>
                    <li className="recommendation-list-item">
                      <a href="/">
                        <img src={recommendImage02} alt="" />
                        <div className="username">
                          <span>nbt</span>
                        </div>
                      </a>
                    </li>
                    <li className="recommendation-list-item">
                      <a href="/">
                        <img src={recommendImage04} alt="" />
                        <div className="username">
                          <span>nbt</span>
                        </div>
                      </a>
                    </li>
                    <li className="load-more">
                      <a href="/">
                        <div>
                          <i className="ic-chevron"></i>
                        </div>
                        <span>더보기</span>
                      </a>
                    </li>
                  </ul>
                  {/* <div className="photo-nav lg-only">
                    <button className="prev-btn">이전</button>
                    <button className="next-btn">다음</button>
                  </div> */}
                </div>
              </div>

              <hr className="section-divider sm-only" />

              <div className="community-section decoration-wrapper">
                <div className="community-section-header">
                  <div className="title">
                    <strong>집 꾸미고 계시다면 참고해보세요🪑</strong>
                  </div>
                  <div className="icon sm-only">
                    <i className="ic-chevron"></i>
                  </div>
                  <div className="icon sm-hidden">
                    <button type="button" className="more-button">
                      더보기
                    </button>
                  </div>
                </div>
                <div className="media">
                  <ul className="decoration-list">
                    <li className="decoration-list-item">
                      <a href="/">
                        <div className="decoration-card">
                          <div className="decoration-card-image">
                            <img src={HouseDecoImg01} alt="" />
                          </div>
                          <div className="decoration-card-desc">
                            <p>
                              <span>36년 된 구축</span>체리몰딩 그대로 감각적인
                              빈티지 무드 완성!
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="decoration-list-item">
                      <a href="/">
                        <div className="decoration-card">
                          <div className="decoration-card-image">
                            <img src={HouseDecoImg02} alt="" />
                          </div>
                          <div className="decoration-card-desc">
                            <p>
                              <span>모든 것을 갖추기 보다는</span>심플함 속
                              재치를 발휘하는 집😏
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="decoration-list-item">
                      <a href="/">
                        <div className="decoration-card">
                          <div className="decoration-card-image">
                            <img src={HouseDecoImg03} alt="" />
                          </div>
                          <div className="decoration-card-desc">
                            <p>
                              <span>키 큰 부부에 맞춘 주방 시공으로</span> 완벽
                              업그레이드된 신혼집
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="decoration-list-item">
                      <a href="/">
                        <div className="decoration-card">
                          <div className="decoration-card-image">
                            <img src={HouseDecoImg04} alt="" />
                          </div>
                          <div className="decoration-card-desc">
                            <p>
                              <span>현대적인 감각에</span>전통적 아름다움을
                              더한, 34평 스타일링
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="section-divider sm-only" />

              <div className="community-section category-wrapper">
                <div className="community-section-header">
                  <div className="title">
                    <strong>카테고리별 상품 찾기</strong>
                  </div>
                </div>
                <div className="media">
                  <ul className="category-list" ref={categoryListRef}>
                    {categoryData.map((item, index) => (
                      <li key={index} className="category-list-item">
                        <a href="/">
                          <img
                            src={categoryImageMap[item.image]}
                            alt={item.title}
                          />
                          <div className="category-title">
                            <span>{item.title}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="community-section today-deal-wrapper">
                <div className="community-section-header">
                  <div className="title">
                    <strong>오늘의딜</strong>
                  </div>
                  <div className="icon sm-only">
                    <i className="ic-chevron"></i>
                  </div>
                  <div className="icon sm-hidden">
                    <button type="button" className="more-button">
                      더보기
                    </button>
                  </div>
                </div>
                <div className="media">
                  <ul className="today-deal-list">
                    <li className="list-item">
                      <a href="/">
                        <div className="today-deal-card">
                          <div className="today-deal-card-image">
                            <img src={ItemImage01} alt="" />
                            <div className="list-item-overlay"></div>
                          </div>

                          <div className="desc">
                            <span className="today-deal-card-brand">송월타월</span>
                            <h3 className="today-deal-card-title">
                              30수/40수 고중량호텔수건 130-220g10장
                            </h3>

                            <dl className="today-deal-card-detail">
                              <div className="rating">
                                <dt>
                                  <i className="ic-star"></i>
                                  <span className="visually-hidden">평점</span>
                                </dt>
                                <dd>4.6</dd>
                              </div>

                              <div className="review">
                                <dt>리뷰</dt>
                                <dd>3,605</dd>
                              </div>
                            </dl>

                            <div className="today-deal-card-price">
                              <span className="percent">72%</span>
                              <strong className="price">49,000</strong>
                            </div>

                            <div className="today-deal-card-delivery">
                              <img src={DeliveryBadgeToday} alt="" />
                              <span>평일 12:00까지 결제시</span>
                            </div>

                            <div className="today-deal-card-tag">
                              <strong className="tag-beige">무료배송</strong>
                              <strong className="tag-red">특가</strong>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <hr className="section-divider is-community sm-only" />
                    <li className="list-item">
                      <a href="/">
                        <div className="today-deal-card">
                          <div className="today-deal-card-image">
                            <img src={ItemImage02} alt="" />
                            <div className="list-item-overlay"></div>
                          </div>

                          <div className="desc">
                            <span className="today-deal-card-brand">유니레버</span>
                            <h3 className="today-deal-card-title">
                              도브 바디워시 1L x 3개 외 뷰티바/바세린/데오드란트
                              특가
                            </h3>

                            <dl className="today-deal-card-detail">
                              <div className="rating">
                                <dt>
                                  <i className="ic-star"></i>
                                  <span className="visually-hidden">평점</span>
                                </dt>
                                <dd>4.9</dd>
                              </div>

                              <div className="review">
                                <dt>리뷰</dt>
                                <dd>9,088</dd>
                              </div>
                            </dl>

                            <div className="today-deal-card-price">
                              <span className="percent">38%</span>
                              <strong className="price">19,500 외</strong>
                            </div>

                            {/* <div className="today-deal-card-delivery">
                              <img src={DeliveryBadgeToday} alt="" />
                              <span>평일 12:00까지 결제시</span>
                            </div> */}

                            <div className="today-deal-card-tag">
                              <strong className="tag-beige">무료배송</strong>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <hr className="section-divider is-community sm-only" />
                    <li className="list-item">
                      <a href="/">
                        <div className="today-deal-card">
                          <div className="today-deal-card-image">
                            <img src={ItemImage03} alt="" />
                            <div className="list-item-overlay"></div>
                          </div>

                          <div className="desc">
                            <span className="today-deal-card-brand">르젠</span>
                            <h3 className="today-deal-card-title">
                              BLDC 제나블라스 음이온 드라이기 LZDR-MCR1
                            </h3>

                            <dl className="today-deal-card-detail">
                              <div className="rating">
                                <dt>
                                  <i className="ic-star"></i>
                                  <span className="visually-hidden">평점</span>
                                </dt>
                                <dd>4.8</dd>
                              </div>

                              <div className="review">
                                <dt>리뷰</dt>
                                <dd>62</dd>
                              </div>
                            </dl>

                            <div className="today-deal-card-price">
                              <span className="percent">54%</span>
                              <strong className="price">49,800</strong>
                            </div>

                            <div className="today-deal-card-delivery">
                              <img src={DeliveryBadgeToday} alt="" />
                              <span>평일 12:00까지 결제시</span>
                            </div>

                            <div className="today-deal-card-tag">
                              <strong className="tag-beige">무료배송</strong>
                              <strong className="tag-red">특가</strong>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <hr className="section-divider is-community sm-only" />
                    <li className="list-item">
                      <a href="/">
                        <div className="today-deal-card">
                          <div className="today-deal-card-image">
                            <img src={ItemImage04} alt="" />
                            <div className="list-item-overlay"></div>
                          </div>

                          <div className="desc">
                            <span className="today-deal-card-brand">매직캔</span>
                            <h3 className="today-deal-card-title">
                              3/5단하루![22%쿠폰+결제할인]히포, 스텔라,애니블리
                              냄새 차단 국민휴지통 모음전
                            </h3>

                            <dl className="today-deal-card-detail">
                              <div className="rating">
                                <dt>
                                  <i className="ic-star"></i>
                                  <span className="visually-hidden">평점</span>
                                </dt>
                                <dd>4.9</dd>
                              </div>

                              <div className="review">
                                <dt>리뷰</dt>
                                <dd>235</dd>
                              </div>
                            </dl>

                            <div className="today-deal-card-price">
                              <span className="percent">56%</span>
                              <strong className="price">60,930 외</strong>
                            </div>

                            {/* <div className="today-deal-card-delivery">
                              <img src={DeliveryBadgeToday} alt="" />
                              <span>평일 12:00까지 결제시</span>
                            </div> */}

                            <div className="today-deal-card-tag">
                              <strong className="tag-beige">무료배송</strong>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <button className="btn-more sm-only" type="button">
                    오늘의딜 더보기
                  </button>
                </div>
              </div>

              <div className="community-section interior-review-wrapper">
                <div className="community-section-header">
                  <div className="title">
                    <strong>유저들의 인테리어 시공 리뷰</strong>
                  </div>
                  <div className="icon sm-only">
                    <i className="ic-chevron"></i>
                  </div>
                  <div className="icon sm-hidden">
                    <button type="button" className="more-button">
                      더보기
                    </button>
                  </div>
                </div>
                <div className="media">
                  <ul className="interior-review-list">
                    <li className="list-item">
                      <a href="/">
                        <div className="interior-review-card">
                          <div className="interior-review-card-image">
                            <img src={InteriorReviewImg01} alt="" />
                          </div>

                          <div className="desc">
                            <h3 className="interior-review-card-title">
                              디자인코드인테리어
                            </h3>

                            <span className="interior-review-card-content">
                              제가 여러 업체 실측&상담을 한 끝에 디자인 코드를
                              선택했습니다 모든면에서 다 좋았지만! 정해진 예산에
                              최대한으로 맞춰 도와주셨구 무엇보다 소통이 정말
                              잘됐습니다 전체공사라 의논할게 정말 많았는데 밤낮
                              가리지않고 소통을 잘 해주셔서 정말 만족스러운
                              결과물이 나왔습니다 제 지인들께도 무조건 추천
                              할꼬에욧
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="/">
                        <div className="interior-review-card">
                          <div className="interior-review-card-image">
                            <img src={InteriorReviewImg02} alt="" />
                          </div>

                          <div className="desc">
                            <h3 className="interior-review-card-title">
                              요즘인테리어
                            </h3>

                            <span className="interior-review-card-content">
                              저희는 구축 아파트를 계약해서 무조건 올수리
                              인테리어를 생각했던 예비 신혼 부부입니다 여러
                              업체를 상담했지만 인테리어는 처음이라 판단이 잘
                              안섰는데 현실적으로 실현 가능한 인테리어를
                              고민해주시고 소통도 가장 잘된다고 느꼈던 권지헌
                              대표님과 최종 계약을 진행했습니다 결과적으로는
                              기대하던 것 보다도 훨씬 인테리어가 잘 나와서
                              너무나도 만족스럽습니다☺️ 우선 권지헌 대표님과
                              진행하면서 가장 만족스러웠던 점은 소통이었습니다
                              저희가 업체 선정을 일찍해서 첫미팅부터 공사
                              완성까지 약 5-6개월 정도가 걸렸는데 그 기간동안 단
                              한번도 연락 문제없이 바로바로 피드백을 주시고 더
                              나은 의견이 있으면 반영해서 수정해주셔서 더 좋은
                              인테리어가 나올 수 있었던 것 같습니다 그리고
                              대표님께서 젊은 감각을 가지고 해주셔서 그런지
                              타업체 분들 보다도 제가 원하는 그림을 대충
                              설명드려도 너무도 정확하고 빠르게 파악해주시고 제
                              취향에 맞게 인테리어적으로 제안도 많이 해주셔서
                              어려웠던 인테리어를 끝까지 잘 마무리할 수
                              있었습니다 정말 공사들어가는 그날 그날 바꾼 부분들
                              마저도 완벽했어요!! 공사뿐만 아니라 공사를
                              끝내고도 인테리어 업체의 역할이 중요하다고
                              생각하는데 그 부분에서도 너무 완벽하셨습니다🥲
                              문제가 있는 부분들은 그때 그때 다 처리해주시고
                              입주청소업체와도 문제가 있어서 혼란스러운 상황도
                              있었는데 그 부분들도 다 잘 처리할 수 있도록
                              도와주셨어요 대표님뿐만 아니라 공사해주시는 공사
                              팀 분들의 실력도 물론 출중하셔서 진짜 솔직히 거의
                              문제가 될 부분도 없었어요..아직은 가구가 덜
                              들어와서 조금 부족해보일 수 있지만 인테리어 자체를
                              너무 완벽하게 해주셔서 앞으로 채울 모습들이 더
                              기대가 됩니다 집 준비하면서 다른 신경쓸 것도
                              많아서 업체랑의 문제가 많으면 더 힘들었을텐데
                              대표님과 진행한 덕분에 잘 마무리할 수 있었구요
                              앞으로 주변에 인테리어 고민하시면 무조건 추천드릴
                              예정이에요 저희의 첫 집을 맡길 수 있어서 정말
                              감사했습니다~!
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="/">
                        <div className="interior-review-card">
                          <div className="interior-review-card-image">
                            <img src={InteriorReviewImg03} alt="" />
                          </div>

                          <div className="desc">
                            <h3 className="interior-review-card-title">
                              ABLY_design
                            </h3>

                            <span className="interior-review-card-content">
                              구○빈 팀장님께서 소통도 원할히 잘 해주시고 젊은
                              감각으로 이런저런 부자재들을 트렌디한 것으로 잘
                              추천해주셨습니다. 첫 미팅때부터 3D 도면 준비해서
                              설명해주시니 이해도 잘 되고 저희 예산에 최대한
                              맞춰주시려고 애쓰셨습니다. 공사 후에도 A/S 요청
                              편히 받아주시고 최대한 불편함 없도록 신경써
                              주셨습니다.
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <button className="btn-more sm-only" type="button">
                    인테리어 시공업체 찾기
                  </button>
                </div>
              </div>

              <div className="community-section special-exhibition-wrapper">
                <div className="community-section-header">
                  <div className="title">
                    <strong>오늘의 기획전</strong>
                  </div>
                  <div className="icon sm-only">
                    <i className="ic-chevron"></i>
                  </div>
                  <div className="icon sm-hidden">
                    <button type="button" className="more-button">
                      더보기
                    </button>
                  </div>
                </div>
                <div className="media">
                  <ul className="special-exhibition-list">
                    <li className="list-item">
                      <a href="/">
                        <div className="special-exhibition-card">
                          <div className="special-exhibition-card-image">
                            <img src={SpecialExhibitionImg01} alt="" />
                          </div>

                          <div className="desc">
                            <p className="special-exhibition-card-title">
                              전시, 반품, 스크래치 득템의 기회!
                            </p>

                            <p className="special-exhibition-card-content">
                              빠른 품절! 리퍼마켓 ~88%
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="/">
                        <div className="special-exhibition-card">
                          <div className="special-exhibition-card-image">
                            <img src={SpecialExhibitionImg02} alt="" />
                          </div>

                          <div className="desc">
                            <p className="special-exhibition-card-title">
                              전상품 무료배송
                            </p>

                            <p className="special-exhibition-card-content">
                              매일 새로운 장보기 핫딜! 오마트
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="/">
                        <div className="special-exhibition-card">
                          <div className="special-exhibition-card-image">
                            <img src={SpecialExhibitionImg03} alt="" />
                          </div>

                          <div className="desc">
                            {/* <h3 className="special-exhibition-card-title"></h3> */}
                            <p className="special-exhibition-card-content">
                              오늘의집 Only
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="/">
                        <div className="special-exhibition-card">
                          <div className="special-exhibition-card-image">
                            <img src={SpecialExhibitionImg04} alt="" />
                          </div>

                          <div className="desc">
                            <p className="special-exhibition-card-title">
                              배송 걱정없이 원하는 날 한번에 설치해요!
                            </p>
                            <p className="special-exhibition-card-content">
                              오늘의집 배송 꿀조합 가구 추천
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-item load-more sm-hidden">
                      <a href="/">
                        <div>
                          <i className="ic-chevron"></i>
                        </div>
                        <span>더보기</span>
                      </a>
                    </li>
                  </ul>
                  <button className="btn-more sm-only" type="button">
                    기획전 더보기
                  </button>
                </div>
              </div>

              <div className="community-section best-item-wrapper">
                <div className="community-section-header">
                  <div className="title">
                    <strong>베스트</strong>
                  </div>
                  <div className="icon sm-only">
                    <i className="ic-chevron"></i>
                  </div>
                  <div className="icon sm-hidden">
                    <button type="button" className="more-button">
                      더보기
                    </button>
                  </div>
                </div>
                <div className="media">
                  <div className="best-category-wrapper">
                    <ul className="best-category-list">
                      {bestCategoryData.map((item, index) => (
                        <li className="best-category-item" key={index}>
                          <label
                            className={`best-category-item-label ${
                              item.checked ? 'is-active' : ''
                            }`}
                            htmlFor="/"
                          >
                            <input
                              type="checkbox"
                              index={`checkbox-${index}`}
                            />
                            <span>{item.text}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="best-item-list">
                    <li className="list-item">
                      <a href="/">
                        <div className="best-item-card">
                          <div className="best-item-card-image">
                            <div className="image-wrapper">
                              <img src={ItemImage01} alt="" />
                              <div className="list-item-overlay"></div>
                            </div>
                          </div>

                          <div className="desc">
                            <span className="best-item-card-brand">송월타월</span>
                            <h3 className="best-item-card-title">
                              30수/40수 고중량호텔수건 130-220g10장
                            </h3>

                            <div className="best-item-card-price">
                              <span className="percent">72%</span>
                              <strong className="price">49,000</strong>
                            </div>

                            <dl className="best-item-card-detail">
                              <div className="rating">
                                <dt>
                                  <i className="ic-star"></i>
                                  <span className="visually-hidden">평점</span>
                                </dt>
                                <dd>4.6</dd>
                              </div>

                              <div className="review">
                                <dt>리뷰</dt>
                                <dd>3,605</dd>
                              </div>
                            </dl>

                            <div className="best-item-card-delivery">
                              <img src={DeliveryBadgeToday} alt="" />
                              <span>평일 12:00까지 결제시</span>
                            </div>

                            <div className="best-item-card-tag">
                              <strong className="tag-beige">무료배송</strong>
                              <strong className="tag-red">특가</strong>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <hr className="section-divider is-community sm-only" />
                    <li className="list-item">
                      <a href="/">
                        <div className="best-item-card">
                          <div className="best-item-card-image">
                            <div className="image-wrapper">
                              <img src={ItemImage02} alt="" />
                              <div className="list-item-overlay"></div>
                            </div>
                          </div>

                          <div className="desc">
                            <span className="best-item-card-brand">유니레버</span>
                            <h3 className="best-item-card-title">
                              도브 바디워시 1L x 3개 외 뷰티바/바세린/데오드란트
                              특가
                            </h3>

                            <div className="best-item-card-price">
                              <span className="percent">38%</span>
                              <strong className="price">19,500 외</strong>
                            </div>

                            <dl className="best-item-card-detail">
                              <div className="rating">
                                <dt>
                                  <i className="ic-star"></i>
                                  <span className="visually-hidden">평점</span>
                                </dt>
                                <dd>4.9</dd>
                              </div>

                              <div className="review">
                                <dt>리뷰</dt>
                                <dd>{count}</dd>
                              </div>
                            </dl>

                            {/* <div className="today-deal-card-delivery">
                              <img src={DeliveryBadgeToday} alt="" />
                              <span>평일 12:00까지 결제시</span>
                            </div> */}

                            <div className="best-item-card-tag">
                              <strong className="tag-beige">무료배송</strong>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <hr className="section-divider is-community sm-only" />
                    <li className="list-item">
                      <a href="/">
                        <div className="best-item-card">
                          <div className="best-item-card-image">
                            <div className="image-wrapper">
                              <img src={ItemImage03} alt="" />
                              <div className="list-item-overlay"></div>
                            </div>
                          </div>

                          <div className="desc">
                            <span className="best-item-card-brand">르젠</span>
                            <h3 className="best-item-card-title">
                              BLDC 제나블라스 음이온 드라이기 LZDR-MCR1
                            </h3>

                            <div className="best-item-card-price">
                              <span className="percent">54%</span>
                              <strong className="price">49,800</strong>
                            </div>

                            <dl className="best-item-card-detail">
                              <div className="rating">
                                <dt>
                                  <i className="ic-star"></i>
                                  <span className="visually-hidden">평점</span>
                                </dt>
                                <dd>4.8</dd>
                              </div>

                              <div className="review">
                                <dt>리뷰</dt>
                                <dd>62</dd>
                              </div>
                            </dl>

                            <div className="best-item-card-delivery">
                              <img src={DeliveryBadgeToday} alt="" />
                              <span>평일 12:00까지 결제시</span>
                            </div>

                            <div className="best-item-card-tag">
                              <strong className="tag-beige">무료배송</strong>
                              <strong className="tag-red">특가</strong>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="community-section best-item-wrapper">
                <div className="community-section-header">
                  <div className="title">
                    <strong>베스트</strong>
                  </div>
                  <div className="icon sm-only">
                    <i className="ic-chevron"></i>
                  </div>
                  <div className="icon sm-hidden">
                    <button type="button" className="more-button">
                      더보기
                    </button>
                  </div>
                </div>
                <div className="media">
                  <div className="best-category-wrapper">
                    <ul className="best-category-list">
                      {bestCategoryData.map((item, index) => (
                        <li className="best-category-item" key={index}>
                          <label
                            className={`best-category-item-label ${
                              item.checked ? 'is-active' : ''
                            }`}
                            htmlFor={`checkbox-${index}`}
                          >
                            <input
                              type="checkbox"
                              id={`checkbox-${index}`}
                              checked={item.checked}
                              readOnly
                            />
                            <span>{item.text}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="best-item-list">
                    {bestItems.slice(0, 3).map((item ,index) => (
                      <React.Fragment key={index}>
                        <li className="list-item">
                          <a href={`/product/${item.id}`}>
                            <div className="best-item-card">
                              <div className="best-item-card-image">
                                <div className="image-wrapper">
                                  <img
                                    src={item.imageUrl || ItemImage01}
                                    alt={item.title || ''}
                                  />
                                  <div className="list-item-overlay"></div>
                                </div>
                              </div>
                              <div className="desc">
                                <span className="best-item-card-brand">
                                  {item.brand}
                                </span>
                                <h3 className="best-item-card-title">
                                  {item.title}
                                </h3>
                                <div className="best-item-card-price">
                                  <span className="percent">
                                    {item.discount}%
                                  </span>
                                  <strong className="price">
                                    {Number(item.price).toLocaleString('ko-KR')}
                                  </strong>
                                </div>
                                <dl className="best-item-card-detail">
                                  <div className="rating">
                                    <dt>
                                      <i className="ic-star"></i>
                                      <span className="visually-hidden">
                                        평점
                                      </span>
                                    </dt>
                                    <dd>{item.rating}</dd>
                                  </div>
                                  <div className="review">
                                    <dt>리뷰</dt>
                                    <dd>{item.reviewCount}</dd>
                                  </div>
                                </dl>
                                {item.delivery && (
                                  <div className="best-item-card-delivery">
                                    <img src={DeliveryBadgeToday} alt="" />
                                    <span>{item.delivery}</span>
                                  </div>
                                )}
                                <div className="best-item-card-tag">
                                  {item.tags &&
                                    item.tags.map((tag) => (
                                      <strong
                                        key={tag}
                                        className={`tag-${
                                          tag === '무료배송' ? 'beige' : 'red'
                                        }`}
                                      >
                                        {tag}
                                      </strong>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <hr className="section-divider is-community sm-only" />
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityShow
