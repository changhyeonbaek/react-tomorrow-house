import React, { useEffect } from 'react'

const BookmarkToast = ({ isBookMarked, onClose }) => {
  useEffect(() => {
    if (typeof onClose === 'function') {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [onClose])

  return (
    <aside className="bookmark-toast">
      <div className="bookmark-item">
        <div className="bookmark-title">
          <p>
            {isBookMarked ? '스크랩했습니다.' : '스크랩북에서 삭제했습니다'}
          </p>
        </div>
        {isBookMarked && (
          <div className="button-group">
            <a href="/" className="btn-list">
              스크랩북 보기
            </a>
            <button className="btn-list" type="button">
              폴더에 담기
            </button>
          </div>
        )}
      </div>
    </aside>
  )
}

export default BookmarkToast
