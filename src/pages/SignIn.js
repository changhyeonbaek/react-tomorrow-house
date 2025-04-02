import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import useAuthStore from '../store/authStore'
import { auth } from '../firebase'
import Logo from '../assets/images/Logo.svg'

function SignIn() {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)
  const setUser = useAuthStore((state) => state.setUser)
  const location = useLocation()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError(null)
    console.log('Attempting login with:', { email, password })

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      console.log('Login successful:', user) // 성공 시 사용자 정보
      setIsAuthenticated(true)
      setUser(user)
      const redirectTo = location.state?.from?.pathname || '/'
      console.log('Redirecting to:', redirectTo) // 리다이렉트 경로 확인
      navigate(redirectTo, { replace: true })
    } catch (err) {
      // 에러 코드에 따라 구체적 메시지 설정
      switch (err.code) {
        case 'auth/invalid-credential':
          setError('로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.')
          break
        case 'auth/user-not-found':
          setError('로그인 실패: 해당 이메일로 등록된 계정이 없습니다.')
          break
        case 'auth/wrong-password':
          setError('로그인 실패: 비밀번호가 틀렸습니다.')
          break
        case 'auth/invalid-email':
          setError('로그인 실패: 유효하지 않은 이메일 형식입니다.')
          break
        default:
          setError(`로그인 실패: ${err.message}`)
      }
      console.error('Login error:', err.code, err.message) // 상세 에러 출력
    }
  }

  return (
    <>
      <div className="sign-in-wrapper">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>

        <form className="form" onSubmit={handleLogin}>
          <div className="form-field">
            <input
              type="email"
              placeholder="이메일"
              className="sign-in-input email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <input
              type="password"
              placeholder="비밀번호"
              className="sign-in-input password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="sign-in-error">{error}</p>}
          <button type="submit" className="sign-in-submit">
            로그인
          </button>
        </form>

        <div className="sign-in-links">
          <a href="/" className="sign-in-links-item">
            비밀번호 재설정
          </a>
          <a href="/" className="sign-in-links-item">
            회원가입
          </a>
        </div>

        <section className="sign-in-social">
          <span className="sign-in-social-title">
            SNS계정으로 간편 로그인/회원가입
          </span>
          <a href="/">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#3B5998"
                  d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
                ></path>
                <path
                  fill="#FFF"
                  d="M25.77 35V24h3.384v-3.385h-3.385v-2.538c-.012-.756.08-1.285 1.693-1.692h1.692V13h-3.385c-3.25 0-4.52 1.84-4.23 5.077v2.538H19V24h2.538v11h4.231z"
                ></path>
              </g>
            </svg>
          </a>
          <a href="/">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#FFEB00"
                  d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
                ></path>
                <path
                  fill="#3C2929"
                  d="M24 11.277c8.284 0 15 5.306 15 11.85 0 6.545-6.716 11.85-15 11.85-.92 0-1.822-.066-2.697-.191l-6.081 4.105a.43.43 0 0 1-.674-.476l1.414-5.282C11.777 31.031 9 27.335 9 23.127c0-6.544 6.716-11.85 15-11.85zm6.22 8.407c-.416 0-.718.297-.718.707v5.939c0 .41.289.686.718.686.41 0 .718-.295.718-.686v-1.932l.515-.526 1.885 2.57c.277.374.426.54.691.568.037.003.075.005.112.005.154 0 .66-.04.716-.563.038-.293-.137-.52-.348-.796l-2.043-2.675 1.727-1.743.176-.196c.234-.26.353-.39.353-.587.009-.422-.34-.652-.687-.661-.274 0-.457.15-.57.262l-2.528 2.634v-2.3c0-.422-.288-.706-.717-.706zm-9.364 0c-.56 0-.918.432-1.067.837l-2.083 5.517a.84.84 0 0 0-.065.315c0 .372.31.663.706.663.359 0 .578-.162.69-.51l.321-.97h2.999l.313.982c.111.335.34.498.7.498.367 0 .655-.273.655-.62 0-.056-.017-.196-.081-.369l-2.019-5.508c-.187-.53-.577-.835-1.069-.835zm-2.92.064h-4.452c-.417 0-.642.337-.642.654 0 .3.168.652.642.652h1.51v5.21c0 .464.274.752.716.752.443 0 .718-.288.718-.751v-5.21h1.508c.474 0 .643-.352.643-.653 0-.317-.225-.654-.643-.654zm7.554-.064c-.442 0-.717.287-.717.75v5.707c0 .497.28.794.75.794h2.674c.434 0 .677-.321.686-.627a.642.642 0 0 0-.17-.479c-.122-.13-.3-.2-.516-.2h-1.99v-5.195c0-.463-.274-.75-.717-.75zm-4.628 1.306l.008.01 1.083 3.265h-2.192L20.842 21a.015.015 0 0 1 .028 0z"
                ></path>
              </g>
            </svg>
          </a>
          <a href="/">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#00C63B"
                  d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
                ></path>
                <path
                  fill="#FFF"
                  d="M21 25.231V34h-7V15h7l6 8.769V15h7v19h-7l-6-8.769z"
                ></path>
              </g>
            </svg>
          </a>
        </section>

        <a href="/" className="sign-in-cs">
          로그인에 문제가 있으신가요?
        </a>

        <section className="guest-order">
          <button type="button">비회원 주문 조회하기</button>
          <div className="divider"></div>
        </section>
      </div>

      <footer className="sign-in-footer">
        © <a href="/">changhyeonbaek</a>. All Rights Reserved
      </footer>
    </>
  )
}

export default SignIn
