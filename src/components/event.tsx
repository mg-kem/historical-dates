import { JSX } from 'react'

interface EventProps {
    heading: string;
    description: string;
}

export default function Event({ heading, description }: EventProps): JSX.Element {
    return (
        <li className="event-item">
            <h2 className="event-title">{heading}</h2>
            <p className="event-description">{description}</p>
        </li>
    )
}