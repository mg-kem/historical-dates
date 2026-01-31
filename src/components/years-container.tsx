interface IYearsContainerProps {
  yearStart: string;
  yearEnd: string;
}

export default function YearsContainer({ yearStart, yearEnd }: IYearsContainerProps) {
  return (
    <div className="years-container">
      <p className="years-container__date-start">
        {yearStart}
      </p>
      <p className="years-container__date-end">
        {yearEnd}
      </p>
    </div>
  )
}