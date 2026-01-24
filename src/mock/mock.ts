export interface IMockData {
    id: number;
    category: string;
    dateStart: string;
    dateEnd: string;
    events: IEvent[];
}

export interface IEvent {
    id: number;
    year: string;
    description: string;
}

const mockData: IMockData[] = [
    {
        id: 1,
        category: 'Кино',
        dateStart: '1987',
        dateEnd: '1991',
        events: [
            {
                id: 1,
                year: '1987',
                description: `"Хищник"/ Predator, США (реж. Джон Мактирнан)`,
            },
            {
                id: 2,
                year: '1988',
                description: `"Кто поставил кролика Роджера"/ Who Framed Roger Rabbit, США (реж. Роберт Земекис)`,
            },
            {
                id: 3,
                year: '1989',
                description: `"Назад в будущее 2"/ Back to The Future 2, США (реж. Роберт Земекис)`,
            },
            {
                id: 4,
                year: '1990',
                description: `"Матрица"/ The Matrix, США (реж. Лана Вачовски, Лилли Вачовски)`,
            },
            {
                id: 5,
                year: '1991',
                description: `"Крестный отец 2"/ The Godfather Part II, США (реж. Фрэнсис Форд Коппола)`,
            }
        ]
    },
    {
        id: 2,
        category: 'Музыка',
        dateStart: '1989',
        dateEnd: '1997',
        events: [
            {
                id: 1,
                year: '1989',
                description: 'The Beatles',
            },
            {
                id: 2,
                year: '1991',
                description: 'The Rolling Stones',
            },
            {
                id: 3,
                year: '1997',
                description: 'The Who',
            }
        ]
    }
]

export default mockData;