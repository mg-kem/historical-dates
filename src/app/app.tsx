import { JSX } from 'react';
import HistoricalDate from '../components/historical-dates';
import EventList from '../components/event-list';
import SwiperContent from '../components/swiper';

export default function App(): JSX.Element {
    return (
        <div className="container">
            <HistoricalDate />
            <EventList />
        </div>
    );
}
