import React, { useState } from 'react'
import BookmarkToast from './BookmarkToast'

const OrderCta = ({ openModal }) => {
  const [isBookMarked, setIsBookMarked] = useState(false)
  const [bookmarkCount, setBookmarkCount] = useState(87689)
  const [showToast, setShowToast] = useState(false)

  const toggleBookmark = () => {
    setIsBookMarked((prev) => !prev)
    setBookmarkCount((prevCount) => prevCount + (isBookMarked ? -1 : 1))
    setShowToast(true)
    console.log(showToast)

    setTimeout(() => {
      setShowToast(false)
    }, 2000)
  }

  return (
    <div className="order-cta sm-only">
      <button
        className={`btn-ghost btn-48 ${isBookMarked ? 'is-active' : ''}`}
        onClick={toggleBookmark}
      >
        <i
          className={`${isBookMarked ? 'ic-bookmark-filled' : 'ic-bookmark'}`}
        ></i>
        <span aria-label={`북마크 ${bookmarkCount.toLocaleString()}회`}>
          {bookmarkCount.toLocaleString()}
        </span>
      </button>

      <button className="btn-primary btn-48" onClick={openModal}>
        구매하기
      </button>

      {showToast && (
        <BookmarkToast
          isBookMarked={isBookMarked}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  )
}

export default OrderCta
