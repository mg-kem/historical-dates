import { JSX } from 'react';
import HistoricalDate from '../components/historical-dates';
import EventList from '../components/event-list';

export default function App(): JSX.Element {
    return (
        <div className="container">
            <HistoricalDate />
            <EventList />
        </div>
    );
}
