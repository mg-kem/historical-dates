
import EventList from '../components/event-list';
import RadialMenu from '../components/radial-menu';
import SwitchButtons from '../components/switch-buttons';
import { IMockData } from '../mock/mock';
import YearsContainer from '../components/years-container';
import { useParams } from 'react-router-dom';
import Caption from '../components/caption';

interface IMainPageProps {
    data: IMockData[];
    categories: string[];
}

const getYears = (data: IMockData[], currentCategory: string) => {
    const yearStart = data.find((item) => item.category === currentCategory)?.dateStart;
    const yearEnd = data.find((item) => item.category === currentCategory)?.dateEnd;
    return [yearStart, yearEnd];
}

export default function MainPage({ data, categories }: IMainPageProps) {
    const { category } = useParams();
    const [yearStart, yearEnd] = getYears(data, category as string);

    return (
        <div className="container">
            <div className="historical-dates">
                <Caption />
                <YearsContainer yearStart={yearStart as string} yearEnd={yearEnd as string} />
                <RadialMenu categories={categories} currentCategory={category as string} />
                <SwitchButtons categories={categories} currentCategory={category as string} />
            </div>
            <EventList data={data} currentCategory={category as string} />
        </div>
    )
}