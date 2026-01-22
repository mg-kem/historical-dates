import Event from './event';

export default function EventList() {
    return (
        <>
            <ul className="event-list">
                <Event heading='2015' description='13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' />
                <Event heading='2016' description='Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' />
                <Event heading='2017' description='Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' />
                <button className=" button next-event-button"></button>
            </ul>
        </>
    );
}