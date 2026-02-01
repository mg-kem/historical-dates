interface IYearsContainerProps {
  yearStart: string;
  yearEnd: string;
  yearsRef: React.RefObject<HTMLDivElement | null>
}

export default function YearsContainer({ yearStart, yearEnd, yearsRef }: IYearsContainerProps) {
  return (
    <div className="years-container" ref={yearsRef}>
      <p className="years-container__date-start">
        {yearStart}
      </p>
      <p className="years-container__date-end">
        {yearEnd}
      </p>
    </div>
  )
}