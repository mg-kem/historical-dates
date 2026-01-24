import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import { useRef, useState } from 'react';
import Event from './event';

export default function EventList() {
    const swiperRef = useRef<SwiperRef | null>(null);
    console.log(swiperRef);

    const [isEnd, setIsEnd] = useState(false); // Достигли ли мы конца слайдов
    const [isBeginning, setIsBeginning] = useState(true); // Находимся ли мы в начале
    const [hasMoved, setHasMoved] = useState(false); // Был ли слайдер сдвинут хотя бы раз

    const handleSlideChange = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;

            setIsEnd(swiper.isEnd); // isEnd - true когда достигнут конец
            setIsBeginning(swiper.isBeginning); // isBeginning - true когда мы в начале

            // Если слайдер был сдвинут (не в начале), отмечаем это
            if (!swiper.isBeginning) {
                setHasMoved(true);
            }
        }
    };

    return (
        <ul className="event-list">
            <Swiper
                ref={swiperRef}
                spaceBetween={80}
                slidesPerView={3}
                onSlideChange={handleSlideChange} // Вызывается при каждом изменении слайда
                onSwiper={handleSlideChange} // Вызывается при инициализации для установки начального состояния
            >
                <SwiperSlide>
                    <Event heading='2015' description='13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' />
                </SwiperSlide>
                <SwiperSlide>
                    <Event heading='2016' description='Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' />
                </SwiperSlide>
                <SwiperSlide>
                    <Event heading='2017' description='Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' />
                </SwiperSlide>

                <SwiperSlide>
                    <Event heading='2017' description='Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' />
                </SwiperSlide>
                <SwiperSlide>
                    <Event heading='2017' description='Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' />
                </SwiperSlide>
            </Swiper>

            {/* Кнопка "Назад" - показывается только если слайдер был сдвинут и можно вернуться */}
            {hasMoved && !isBeginning && (
                <button
                    className="button button-prev-event"
                    onClick={() => swiperRef.current?.swiper.slidePrev()}
                >
                </button>
            )}

            {/* Кнопка "Вперед" - скрывается когда достигнут конец */}
            {!isEnd && (
                <button
                    className="button button-next-event"
                    onClick={() => swiperRef.current?.swiper.slideNext()}
                >
                </button>
            )}
        </ul >
    );
}