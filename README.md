# 🌟 React Tomorrow House

> **인테리어 플랫폼 '오늘의집'을 React로 구현한 클론 프로젝트**  
> 반응형 UI와 실시간 데이터 관리로 사용자 경험을 극대화

---

## 🛠 기술 스택
- **React**: 동적 UI 구축  
- **React Router**: 부드러운 페이지 전환  
- **Firebase**: 인증 & 데이터베이스  
- **Zustand**: 가볍고 빠른 상태 관리  
- **Styled-components**: 스타일링의 유연성  
- **SCSS**: 깔끔한 반응형 디자인  

---

## ✨ 프로젝트 개요
이 프로젝트는 인테리어 플랫폼 '오늘의집'을 모티브로, React 기반의 반응형 웹 애플리케이션을 구현한 것입니다. 
Firebase를 활용해 사용자 인증과 데이터를 관리하며, Zustand로 상태를 효율적으로 처리합니다. 
SCSS와 Styled-components를 조합해 모던하고 직관적인 UI를 완성했습니다.

---

## 📑 페이지별 상세 기능

### 1. 🏠 메인 페이지
- **기능**:  
  - 제품 목록을 카드 형태로 표시  
  - 최신 인테리어 아이템 추천  
- **특징**:  
  - SCSS로 구현된 반응형 그리드 레이아웃  
  - 화면 크기에 따라 1~4열로 자동 조정  
- **스크린샷**:  
  ![Main Page](https://github.com/changhyeonbaek/portfolio-images/blob/main/react-tomorrow-house-1.png?raw=true)

### 2. 🔒 로그인/회원가입 페이지
- **기능**:  
  - Firebase Authentication 기반 이메일/비밀번호 로그인  
  - 회원가입 시 사용자 정보 Firestore에 저장  
  - 로그인 상태에 따른 UI 전환  
- **특징**:  
  - Zustand로 로그인 상태 실시간 관리  
  - Styled-components로 애니메이션 효과 적용  
- **스크린샷**:  
  ![Login Page](https://github.com/changhyeonbaek/portfolio-images/blob/main/react-tomorrow-house-6.png?raw=true)

### 3. 🛋 제품 상세 페이지
- **기능**:  
  - 제품 이미지, 가격, 설명 표시  
  - 리뷰 및 평점 시스템  
  - '장바구니 추가' 버튼  
- **특징**:  
  - React Router로 동적 라우팅 구현  
  - Firestore에서 실시간 데이터 로드
  - 반응형 이미지 슬라이더  
- **스크린샷**:  
  ![Product Detail](https://github.com/changhyeonbaek/portfolio-images/blob/main/react-tomorrow-house-7.png?raw=true)

### 4. 👤 마이페이지 드롭다운 메뉴
- **기능**:  
  - 사용자 프로필사진 표시  
  - 로그아웃
  - 토글 버튼 클릭 시 드롭다운 메뉴 표시
  - 다시 클릭 시 메뉴 숨김
- **특징**:  
  - 로그인 여부에 따라 다른 UI 상태 표시
  - React 상태 관리로 토글 동작 구현
  - 모바일에서는 숨김 처리되고, 태블릿 이상 크기에서 반응형으로 표시
- **스크린샷**:  
  ![My Page](https://github.com/changhyeonbaek/portfolio-images/blob/main/react-tomorrow-house-17.png?raw=true)


### 5. 📑 북마크 토스트
- **기능**: 
  - 제품 북마크 추가/제거 시 알림 표시
  - 북마크 상태 Firestore에 저장
- **특징**:  
  - 짧은 시간 동안 화면에 표시되는 토스트 UI
  - Zustand로 북마크 상태 관리
  - SCSS로 부드러운 페이드 인/아웃 효과
- **스크린샷**:  
  ![Bookmark Toast](https://github.com/changhyeonbaek/portfolio-images/blob/main/react-tomorrow-house-19.png)


### 6. 🛍️ 주문 폼 모달 (Order Form Modal)
- **기능**: 
  - 제품 옵션 선택(사이즈 등) 표시
  - 수량 선택 UI(증가/감소 버튼)
  - 총 구매 금액 표시
- **특징**:  
  - 모달 형태로 제품 상세 페이지 위에 오버레이
  - SCSS로 깔끔한 UI와 버튼 스타일링
  - 마크업만 구현된 상태로, 동적 기능(수량 변경에 따른 금액 업데이트, 장바구니 추가 등)은 미구현
- **스크린샷**:  
  ![Bookmark Toast](https://github.com/changhyeonbaek/portfolio-images/blob/main/react-tomorrow-house-18.png?raw=true)


---

## 🌐 배포
- **배포 링크**: [[/projects/react-tomorrow-house](https://changhyeonbaek.github.io/react-tomorrow-house/)](#)  
- **GitHub**: [https://github.com/changhyeonbaek/react-tomorrow-house](https://github.com/changhyeonbaek/react-tomorrow-house)

---

## 🎨 디자인 하이라이트
- **반응형 디자인**: 모바일부터 데스크톱까지 완벽 호환  
- **애니메이션**: 페이지 전환 및 버튼 클릭 시 부드러운 효과  
- **컬러 테마**: '오늘의집' 스타일의 따뜻한 톤 적용  

---

## 📜 라이선스
MIT License
