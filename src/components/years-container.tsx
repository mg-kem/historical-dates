interface IYearsContainerProps {
    yearStart: string;
    yearEnd: string;
}

export default function YearsContainer({ yearStart, yearEnd }: IYearsContainerProps) {
    return (
        <div className="years-container">
            <p className="date-up">
                {yearStart}
            </p>
            <p className="date-to">
                {yearEnd}
            </p>
        </div>
    )
}