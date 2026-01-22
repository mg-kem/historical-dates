import YearsContainer from '../components/years-container';
import Event from '../components/event';

export default function App() {
    return (
        <div className="container">

            <div className="historical-dates">
                <h1 className="header-title">
                    Исторические даты
                </h1>
                <YearsContainer />
            </div>

            <div className="event-list">
                <Event heading='2015' description='13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' />
                <Event heading='2016' description='Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' />
                <Event heading='2017' description='Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' />
            </div>
        </div>
    );
}
