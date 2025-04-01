import React, { useCallback, useEffect, useState } from 'react'

const getHeaderOffset = () => {
  return window.innerWidth < 768 ? 130 : 184
}

const ProductTab = ({ sectionRefs }) => {
  const tabPanels = [
    { id: 'product-spec', label: '상품정보' },
    { id: 'product-review', label: '리뷰' },
    { id: 'product-inquiry', label: '문의' },
    { id: 'product-shipment', label: '배송/환불' },
    { id: 'product-recommendation', label: '추천' },
  ]

  const tabPanelIds = tabPanels.map((panel) => panel.id)
  const [currentTab, setCurrentTab] = useState('product-spec')
  const [isManualScroll, setIsManualScroll] = useState(false)

  const handleScroll = useCallback(() => {
    if (isManualScroll) return

    let activeTab = 'product-spec'

    for (const id of tabPanelIds) {
      const section = sectionRefs[id]?.current
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= getHeaderOffset() && rect.bottom > getHeaderOffset()) {
          activeTab = id
          break
        }
      }
    }

    setCurrentTab(activeTab)
  }, [isManualScroll, sectionRefs, tabPanelIds])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleTabClick = (id) => {
    const section = sectionRefs[id]?.current
    if (section) {
      const yOffset =
        section.getBoundingClientRect().top + window.scrollY - getHeaderOffset()

      setCurrentTab(id)
      setIsManualScroll(true)

      window.scrollTo({ top: yOffset, behavior: 'smooth' })

      setTimeout(() => {
        setIsManualScroll(false)
      }, 800)
    }
  }

  return (
    <div className="product-tab">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            <ul className="product-tab-list" role="tablist">
              {tabPanels.map(({ id, label }) => (
                <li
                  key={id}
                  className={`product-tab-item ${
                    currentTab === id ? 'is-active' : ''
                  }`}
                  role="tab"
                >
                  <button type="button" onClick={() => handleTabClick(id)}>
                    <p>{label}</p>
                    {id === 'product-review' && (
                      <strong className="badge" aria-label="312개 리뷰">
                        312
                      </strong>
                    )}
                    {id === 'product-inquiry' && (
                      <strong className="badge" aria-label="19개 문의">
                        19
                      </strong>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTab
