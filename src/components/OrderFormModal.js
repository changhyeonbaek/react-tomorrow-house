import React from 'react'

const OrderFormModal = ({ isOpen, closeModal }) => {
  return (
    <aside
      className={`order-form-modal lg-hidden ${isOpen ? 'is-active' : ''} `}
    >
      <h1 className="visually-hidden">주문창</h1>

      <form className="order-form" action="/" method="POST">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="order-inputs">
                <div className="select-group">
                  <select className="form-select">
                    <option value="">선택</option>
                    <option value="0">선택사항 1</option>
                    <option value="1">선택사항 2</option>
                    <option value="2">선택사항 3</option>
                    <option value="3">선택사항 4</option>
                    <option value="4">선택사항 5</option>
                  </select>
                  <i className="ic-caret" aria-hidden></i>
                </div>
              </div>

              <div className="order-checkouts">
                <ul className="checkout-list">
                  <li className="checkout-item">
                    <div className="checkout-card">
                      <header className="checkout-header">
                        <h4 className="checkout-title">65-65cm</h4>
                        <button
                          className="delete-button"
                          type="button"
                          aria-label="해당 상품을 삭제하기"
                        >
                          <i className="ic-close"></i>
                        </button>
                      </header>
                      <footer className="checkout-footer">
                        <div className="checkout-quantity">
                          <span>
                            <i className="ic-minus1"></i>
                          </span>
                          <button type="button">1</button>
                          <span>
                            <i className="ic-plus1"></i>
                          </span>
                        </div>
                        <output className="checkout-output">
                          <div className="price-16">
                            <span className="amount">142,800</span>
                            <span className="amount">원</span>
                          </div>
                        </output>
                      </footer>
                    </div>
                  </li>
                </ul>
              </div>

              <hr className="order-form-divider" />

              <dl className="order-summary">
                <dt>주문금액</dt>
                <dd>
                  <output>
                    <div className="price-20">
                      <span className="amount">142,800</span>
                      <span className="amount">원</span>
                    </div>
                  </output>
                </dd>
              </dl>

              <button type="button" className="order-coupon">
                <span>받지 않은 쿠폰이 더 있어요</span>
                <div className="order-coupon-download">
                  <span>쿠폰 받기</span>
                  <i className="ic-download"></i>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button type="button" className="btn-secondary btn-44">
            장바구니
          </button>
          <button type="button" className="btn-primary btn-44">
            바로구매
          </button>
        </div>
      </form>
    </aside>
  )
}

export default OrderFormModal
