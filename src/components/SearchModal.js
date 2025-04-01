import React from 'react'

const SearchModal = ({ isSearchModalOpen, closeSearchModal }) => {
  return (
    <aside
      className={`search-modal lg-hidden ${
        isSearchModalOpen ? 'is-active' : ''
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <header className="search-modal-header">
              <h1 className="visually-hidden">검색창</h1>

              <div className="search-modal-form">
                <div className="input-group">
                  <i className="ic-search" aria-hidden></i>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="통합검색"
                  />
                </div>
                <button
                  type="button"
                  className="btn-ghost btn-40"
                  onClick={closeSearchModal}
                >
                  <span>취소</span>
                </button>
              </div>
            </header>

            <section className="search-history">
              <header className="search-history-header">
                <h2 className="title">최근 검색어</h2>
                <button type="button">전체 삭제</button>
              </header>

              {/* 최근 검색어 O */}
              <div className="search-history-content">
                <ol className="search-history-list">
                  <li className="search-history-item">
                    <button className="word-button">기록1</button>
                    <button className="delete-button">
                      <i className="ic-close"></i>
                    </button>
                  </li>
                  <li className="search-history-item">
                    <button className="word-button">기록2</button>
                    <button className="delete-button">
                      <i className="ic-close"></i>
                    </button>
                  </li>
                  <li className="search-history-item">
                    <button className="word-button">기록3</button>
                    <button className="delete-button">
                      <i className="ic-close"></i>
                    </button>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SearchModal
