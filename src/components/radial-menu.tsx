import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

interface IRadialMenuProps {
    categories: string[] | null;
    currentCategory: string
}

export default function RadialMenu({ categories, currentCategory }: IRadialMenuProps) {
    return (
        <ul className="link-container">
            {
                categories?.map((category) => (
                    <li key={category} className='link-item'>
                        <Link to={`/${category}`} className={currentCategory === category ? 'active-link' : ''}> {category} </Link>
                    </li>
                ))
            }
        </ul>
    );
}