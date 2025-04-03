import React, { useState } from 'react'
import Logo from '../assets/images/Logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const GlobalHeader = ({ openSidebar, openSearchModal }) => {
  const [isMyMenuOpen, setIsMyMenuOpen] = useState(false)
  const location = useLocation()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  const toggleMyMenu = () => {
    setIsMyMenuOpen((prev) => !prev)
  }

  const handleLogout = (e) => {
    e.preventDefault()
    signOut(auth)
      .then(() => {
        useAuthStore.getState().setIsAuthenticated(false)
        useAuthStore.getState().setUser(null)
      })
      .catch((error) => {
        console.log('Logout Faild: ', error)
      })
  }

  return (
    <>
      <header className="global-header">
        <div className="gnb">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="gnb-wrapper">
                  <div className="gnb-left">
                    <h1 className="logo">
                      <a href="/">
                        <img src={Logo} alt="내일의집" />
                      </a>
                    </h1>

                    <nav className="gnb-nav sm-hidden">
                      <h2 className="visually-hidden">메뉴</h2>
                      <ul className="gnb-nav-list">
                        <li className="gnb-nav-item">
                          <NavLink
                            to="/community"
                            className={({ isActive }) =>
                              isActive || location.pathname === '/'
                                ? 'is-active'
                                : ''
                            }
                          >
                            커뮤니티
                          </NavLink>
                        </li>
                        <li className="gnb-nav-item">
                          <NavLink
                            to="/shopping"
                            className={({ isActive }) =>
                              isActive ? 'is-active' : ''
                            }
                          >
                            쇼핑
                          </NavLink>
                        </li>
                        <li className="gnb-nav-item">
                          <NavLink
                            to="/experts"
                            className={({ isActive }) =>
                              isActive ? 'is-active' : ''
                            }
                          >
                            인테리어/생활
                          </NavLink>
                        </li>
                      </ul>
                    </nav>

                    <button
                      className="gnb-icon-button is-menu sm-only"
                      type="button"
                      aria-label="메뉴 열기 버튼"
                      onClick={openSidebar}
                    >
                      <i className="ic-menu"></i>
                    </button>
                  </div>

                  <div className="gnb-right">
                    <div className="gnb-search lg-only">
                      <div className="input-group">
                        <i className="ic-search" aria-hidden></i>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="통합검색"
                        />
                      </div>
                      <section className="search-history">
                        <header className="search-history-header">
                          <h2>최근 검색어</h2>
                          <button type="button">전체 삭제</button>
                        </header>
                        <div className="search-history-content">
                          <p className="placeholder">
                            최근 검색한 내용이 없습니다.
                          </p>
                        </div>
                      </section>
                    </div>

                    {isAuthenticated ? (
                      <div className="button-group logged-in">
                        <button
                          className="gnb-icon-button is-search lg-hidden"
                          type="button"
                          aria-label="검색창 열기 버튼"
                          onClick={openSearchModal}
                        >
                          <i className="ic-search"></i>
                        </button>
                        <a
                          href="/"
                          className="gnb-icon-button sm-hidden"
                          aria-label="스크랩북 페이지 이동"
                        >
                          <i className="ic-bookmark"></i>
                        </a>
                        <a
                          href="/"
                          className="gnb-icon-button sm-hidden"
                          aria-label="내 소식 페이지 이동"
                        >
                          <i className="ic-bell"></i>
                          <strong className="badge">2</strong>
                        </a>
                        <a
                          href="/"
                          className="gnb-icon-button is-cart"
                          aria-label="장바구니 페이지로 이동"
                        >
                          <i className="ic-cart"></i>
                          <strong className="badge">4</strong>
                        </a>

                        <div
                          className={`my-menu sm-hidden ${
                            isMyMenuOpen ? 'is-active' : ''
                          }`}
                        >
                          <button
                            className="my-menu-button"
                            type="button"
                            aria-label="마이메뉴 열기 버튼"
                            onClick={toggleMyMenu}
                          >
                            <img
                              src="../assets/images/img-user-03.jpg"
                              alt="김애용"
                            />
                          </button>

                          <div className="my-menu-content">
                            <ul className="my-menu-list">
                              <li className="my-menu-item">
                                <a href="/">마이페이지</a>
                              </li>
                              <li className="my-menu-item">
                                <a href="/">나의 쇼핑</a>
                              </li>
                              <li className="my-menu-item">
                                <a href="/">이벤트</a>
                              </li>
                              <li className="my-menu-item">
                                <a href="/">마이페이지</a>
                              </li>
                              <li className="my-menu-item">
                                <a href="/">전문가 신청</a>
                              </li>
                              <li className="my-menu-item">
                                <a href="/">판매자 신청</a>
                              </li>
                              <li className="my-menu-item">
                                <a href="/">고객센터</a>
                              </li>
                              <li className="my-menu-item">
                                <a href="/" onClick={handleLogout}>
                                  로그아웃
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="button-group logged-out">
                        <button
                          className="gnb-icon-button is-search lg-hidden"
                          type="button"
                          aria-label="검색창 열기 버튼"
                          onClick={openSearchModal}
                        >
                          <i className="ic-search"></i>
                        </button>
                        <a
                          className="gnb-icon-button is-cart"
                          href="/"
                          aria-label="장바구니 페이지로 이동"
                        >
                          <i className="ic-cart"></i>
                        </a>
                        <div className="gnb-auth sm-hidden">
                          <NavLink to="/sign_in">로그인</NavLink>
                          <a href="/">회원가입</a>
                        </div>
                      </div>
                    )}

                    <button
                      className="btn-primary btn-40 sm-hidden"
                      type="button"
                    >
                      <span>글쓰기</span>
                      <i className="ic-chevron lg-only"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lnb">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h1 className="visually-hidden">스토어 메뉴</h1>

                <ul className="lnb-list">
                  <li className="lnb-item is-active">
                    <a href="/">홈</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">추천</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">#채널</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">집들이</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">3D인테리어</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">살림수납</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">반려동물</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">육아</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">홈스토랑</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">플랜테리어</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">콜렉터블</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">캠핑</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">취미</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">핫플레이스</a>
                  </li>
                  <li className="lnb-item">
                    <a href="/">
                      이벤트
                      <i className="ic-new" lang="en" aria-label="New"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default GlobalHeader
