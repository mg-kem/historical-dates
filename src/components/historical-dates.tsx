import YearsContainer from './years-container';
import SwitchButtons from './switch-buttons';

export default function HistoricalDate() {
    return (
        <div className="historical-dates">
            <h1 className="header-title">
                Исторические даты
            </h1>
            <YearsContainer />
            <div className="link-container">
                <a href='#'></a>
            </div>
            <SwitchButtons />
        </div>
    );
}