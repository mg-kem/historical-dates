import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import 'swiper/css'
import { useRef, useState } from 'react'
import Event from './event'
import { IMockData } from '../mock/mock'

interface IEventListProps {
  data: IMockData[]
  currentCategory: string
}

export default function EventList({ data, currentCategory }: IEventListProps) {
  const swiperRef = useRef<SwiperRef | null>(null)

  const [isEnd, setIsEnd] = useState(false) // Достигли ли мы конца слайдов
  const [isBeginning, setIsBeginning] = useState(true) // Находимся ли мы в начале
  const [hasMoved, setHasMoved] = useState(false) // Был ли слайдер сдвинут хотя бы раз

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper

      setIsEnd(swiper.isEnd) // isEnd - true когда достигнут конец
      setIsBeginning(swiper.isBeginning) // isBeginning - true когда мы в начале

      // Если слайдер был сдвинут (не в начале), отмечаем это
      if (!swiper.isBeginning) {
        setHasMoved(true)
      }
    }
  }

  const filteredEvents = data.find(
    (item) => item.category === currentCategory
  )?.events

  return (
    <ul className='event-list'>
      <Swiper
        ref={swiperRef}
        key={currentCategory}
        spaceBetween={80}
        centeredSlides={false}
        slidesPerView={3}
        onSlideChange={handleSlideChange} // Вызывается при каждом изменении слайда
        onSwiper={handleSlideChange} // Вызывается при инициализации для установки начального состояния
      >
        {filteredEvents?.map((filterEvent) => (
          <SwiperSlide key={filterEvent.id}>
            <Event
              heading={filterEvent.year}
              description={filterEvent.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {hasMoved && !isBeginning && (
        <button
          className='button button-prev-event'
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        ></button>
      )}

      {!isEnd && (
        <button
          className='button button-next-event'
          onClick={() => swiperRef.current?.swiper.slideNext()}
        ></button>
      )}
    </ul>
  )
}
