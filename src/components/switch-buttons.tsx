interface ISwitchButtonsProps {
    categories: string[];
    currentCategory: string;
}

export default function SwitchButtons({ categories, currentCategory }: ISwitchButtonsProps) {
    const categoriesLength = categories.length;
    const indexCurrentCategory = categories.indexOf(currentCategory);

    const handlePrev = () => {
        console.log('prev');
    };

    const handleNext = () => {
        console.log('next');
    };

    return (
        <div className="switch-buttons">
            <p className="selected-info">{`0${indexCurrentCategory + 1}/0${categoriesLength}`}</p>
            <div className="switching-dates-container">
                <button className='button button-prev-date' onClick={handlePrev}></button>
                <button className='button button-next-date' onClick={handleNext}></button>
            </div>
        </div>
    );
}