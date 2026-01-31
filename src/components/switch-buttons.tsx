import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface ISwitchButtonsProps {
  categories: string[]
  currentCategory: string
}

export default function SwitchButtons({
  categories,
  currentCategory,
}: ISwitchButtonsProps) {
  const navigate = useNavigate()
  const [isDisabledPrev, setIsDisabledPrev] = useState(true)
  const [isDisabledNext, setIsDisabledNext] = useState(false)

  const categoriesLength = categories.length
  const indexCurrentCategory = categories.indexOf(currentCategory)

  useEffect(() => {
    if (indexCurrentCategory === 0) {
      setIsDisabledPrev(true)
      setIsDisabledNext(false)
    } else if (indexCurrentCategory === categoriesLength - 1) {
      setIsDisabledPrev(false)
      setIsDisabledNext(true)
    } else {
      setIsDisabledPrev(false)
      setIsDisabledNext(false)
    }
  }, [indexCurrentCategory, categoriesLength])

  const handlePrev = () => {
    const indexPrevCategory = indexCurrentCategory - 1
    if (indexPrevCategory < 0) {
      return
    }
    const prevCategory = categories[indexPrevCategory]
    navigate(`/${prevCategory}`, { replace: true })
    setIsDisabledNext(false)
  }

  const handleNext = () => {
    const indexNextCategory = indexCurrentCategory + 1
    if (indexNextCategory >= categoriesLength) {
      return
    }
    const nextCategory = categories[indexNextCategory]
    navigate(`/${nextCategory}`, { replace: true })
    setIsDisabledPrev(false)
  }

  return (
    <div className="switch-buttons">
      <p className="switch-buttons__selected-info">{`0${indexCurrentCategory + 1}/0${categoriesLength}`}</p>
      <div className="switch-buttons__container">
        <button
          className={`button button-prev-date ${isDisabledPrev ? 'disabled-button' : ''}`}
          onClick={handlePrev}
          disabled={isDisabledPrev}
        ></button>
        <button
          className={`button button-next-date ${isDisabledNext ? 'disabled-button' : ''}`}
          onClick={handleNext}
          disabled={isDisabledNext}
        ></button>
      </div>
    </div>
  )
}
