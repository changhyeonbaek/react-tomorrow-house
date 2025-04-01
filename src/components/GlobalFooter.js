import React from 'react'

const GlobalFooter = () => {
  return (
    <footer className="global-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="global-footer-title">
              고객센터
              <i className="ic-chevron" aria-hidden></i>
            </h3>
            <div className="global-footer-info">
              <a href="tel:15880000" className="global-footer-contact">
                1588-0000
              </a>
              <p className="global-footer-time">09:00 ~ 18:00</p>
            </div>

            <dl className="global-footer-detail-list">
              <div className="global-footer-detail-item">
                <dt>평일</dt>
                <dd>전체 문의 상담</dd>
              </div>
              <div className="global-footer-detail-item">
                <dt>토요일, 공휴일</dt>
                <dd>내일의집 직접배송 주문건 상담</dd>
              </div>
              <div className="global-footer-detail-item">
                <dt>일요일</dt>
                <dd>휴무</dd>
              </div>
            </dl>

            <div className="global-footer-inquiry">
              <button type="button" className="btn-32">
                카톡 상담(평일 09:00~18:00)
              </button>
              <a href="/" className="btn-32">
                이메일 문의
              </a>
            </div>
            <div className="global-footer-divider"></div>

            <div className="global-footer-link">
              <a href="/">회사소개</a>
              <a href="/">채용정보</a>
              <a href="/">이용약관</a>
              <a href="/" className="bold">
                개인정보 처리방침
              </a>
              <a href="/">공지사항</a>
              <a href="/">안전거래센터</a>
              <a href="/">입점신청</a>
              <a href="/">제휴/광고 문의</a>
              <a href="/">시공파트너 안내</a>
              <a href="/" className="bold">
                파트너 개인정보 처리방침
              </a>
              <a href="/">상품광고 소개</a>
              <a href="/">고객의 소리</a>
            </div>
            <div className="global-footer-divider"></div>

            <div className="global-footer-business">
              <div className="registration">
                <div className="button-wrapper">
                  <button type="button" className="btn-16">
                    백창현
                    <i className="ic-chevron"></i>
                  </button>
                </div>
                <div className="registration-info">
                  <div className="name">백창현</div>
                  <div className="address">
                    <address>서울 은평구</address>
                  </div>
                  <div className="email">
                    <a href="mailto:sabon@kakao.com">contact@sabon@kakao.com</a>
                  </div>
                  <div className="biz-number">
                    <span>사업자등록번호 000-00-00000</span>
                  </div>
                  <div className="approval-number">
                    <span>통신판매업신고번호 제0000-서울은평-0000호</span>
                  </div>
                </div>
              </div>
              <div className="notion">
                <span>
                  고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을
                  체결하여 안전거래를 보장하고 있습니다.
                </span>
              </div>
              <div className="notion-2">
                <span>
                  백창현은 통신판매중개자로 거래 당사자가 아니므로,
                  판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지
                  않습니다. 단, 백창현이 판매자로 등록 판매한 상품은
                  판매자로서 책임을 부담합니다.
                </span>
              </div>
              <div className="icon"></div>
              <p className="copyright">
                Copyright 2025. 백창현, Co., Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default GlobalFooter
