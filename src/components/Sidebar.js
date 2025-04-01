import React, { useState } from 'react'

import logo from './../assets/images/Logo.svg'

const Sidebar = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState(null)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu))
  }

  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev)
  }

  return (
    <aside className={`sidebar sm-only ${isOpen ? 'is-active' : ''}`}>
      <header className="sidebar-header">
        <h1 className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </h1>

        {/* 로그인을 한 경우 */}
        <div className="sidebar-user">
          <a href="/">
            <div className="avatar-24">
              <img src="./assets/images/img-user-03.jpg" alt="꼽창현" />
            </div>
            <div className="username-wrapper">
              <strong className="username">꼽창현</strong>
            </div>
          </a>
        </div>
        <hr className="sidebar-divider" />

        {/* 로그인을 하지 않은 경우 */}
        {/* <div className="sidebar-auth">
          <a className="btn-outlined btn-44" href="/">
            로그인
          </a>
          <a className="btn-primary btn-44" href="/">
            회원가입
          </a>
        </div> */}
      </header>

      <nav className="sidebar-nav">
        <h2 className="visually-hidden">메뉴</h2>

        <div
          className={`drawer-menu is-community ${
            openMenu === 'community' ? 'open' : ''
          }`}
        >
          <button
            className="drawer-menu-button"
            type="button"
            onClick={() => toggleMenu('community')}
          >
            <i className="ic-community" aria-hidden></i>
            커뮤니티
            <i
              className={`ic-chevron ${openMenu === 'community' ? 'open' : ''}`}
              aria-hidden
            ></i>
          </button>

          <div className="drawer-menu-content">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item">
                <a href="/">홈</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">추천</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">#채널</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">집들이</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">집사진</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">살림수납</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">반려동물</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">육아</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">홈스토랑</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">플랜테리어</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">콜렉터블</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">캠핑</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">취미</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">핫플레이스</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">이벤트</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`drawer-menu is-store ${
            openMenu === 'store' ? 'open' : ''
          }`}
        >
          <button
            className="drawer-menu-button"
            type="button"
            onClick={() => toggleMenu('store')}
          >
            <i className="ic-store" aria-hidden></i>
            스토어
            <i
              className={`ic-chevron ${openMenu === 'store' ? 'open' : ''}`}
              aria-hidden
            ></i>
          </button>

          <div className="drawer-menu-content">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item">
                <a href="/">쇼핑홈</a>
              </li>
              <li className="drawer-menu-item">
                <button type="button" onClick={toggleCategory}>
                  카테고리
                  <i
                    className={`ic-chevron ${
                      openMenu === 'store' ? 'visible' : ''
                    } ${isCategoryOpen ? 'open' : ''}`}
                    aria-hidden="true"
                  ></i>
                </button>

                <div
                  className={`category-menu-content ${
                    isCategoryOpen ? 'open' : ''
                  }`}
                >
                  <ul className="category-menu-list">
                    <li className="category-menu-item">
                      <a href="/">크리스마스</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">가구</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">패브릭</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">가전·디지털</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">주방용품</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">식품</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">데코·식물</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">조명</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">수납·정리</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">생활용품</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">생필품</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">유아·아동</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">반려동물</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">캠핑·레저</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">공구·DIY</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">인테리어시공</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">렌탈·구독</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">장보기</a>
                    </li>
                    <li className="category-menu-item">
                      <a href="/">혼수·신혼</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="drawer-menu-item">
                <a href="/">베스트</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">오늘의딜</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">리퍼마켓</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">단독상품</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">빠른배송</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">오!쇼룸</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">바이너리샵</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">기획전</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`drawer-menu is-interior ${
            openMenu === 'interior' ? 'open' : ''
          }`}
        >
          <button
            className="drawer-menu-button"
            type="button"
            onClick={() => toggleMenu('interior')}
          >
            <i className="ic-expert" aria-hidden></i>
            인테리어/생활
            <i
              className={`ic-chevron ${openMenu === 'interior' ? 'open' : ''}`}
              aria-hidden
            ></i>
          </button>
          <div className="drawer-menu-content">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item">
                <a href="/">홈</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">주거공간시공</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">부분시공</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">시공자재랭킹</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">제품설치</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">이사</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">집보기체크리스트</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">아파트시공사례</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="sidebar-divider" />

        <div className="sidebar-user-menu">
          <ul className="user-menu-list">
            <li className="user-menu-item">
              <a href="/">
                마이페이지
                <i className="ic-new" lang="en" aria-label="New"></i>
              </a>
            </li>
            <li className="user-menu-item">
              <a href="/">나의 쇼핑</a>
            </li>
            <li className="user-menu-item">
              <a href="/">스크랩북</a>
            </li>
            <li className="user-menu-item">
              <a href="/">알림</a>
            </li>
            <li className="user-menu-item">
              <a href="/">이벤트</a>
            </li>
            <li className="user-menu-item">
              <a href="/">사진 올리기</a>
            </li>
            <li className="user-menu-item">
              <a href="/">집들이 글쓰기</a>
            </li>
            <li className="user-menu-item">
              <a href="/">노하우 글쓰기</a>
            </li>
            <li className="user-menu-item">
              <a href="/">상품 리뷰 쓰기</a>
            </li>
            <li className="user-menu-item">
              <a href="/">시공 전문가 리뷰 쓰기</a>
            </li>
            <li className="user-menu-item">
              <a href="/">고객센터</a>
            </li>
          </ul>

          <hr className="sidebar-divider" />

          <ul className="user-menu-footer">
            <li className="prosignup">
              <a href="/">전문가 신청</a>
            </li>
            <li className="license">
              <a href="/">판매자 신청</a>
            </li>
            <li className="logout">
              <a href="/">로그아웃</a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
