import YearsContainer from './years-container';

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
        </div>
    );
}