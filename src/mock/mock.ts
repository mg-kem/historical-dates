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
        ]
    },
    {
        id: 3,
        category: 'Литература',
        dateStart: '1990',
        dateEnd: '2000',
        events: [
            {
                id: 1,
                year: '1990',
                description: 'Книга 1',
            },
        ]
    },
    {
        id: 4,
        category: 'Наука',
        dateStart: '2015',
        dateEnd: '2022',
        events: [
            {
                id: 1,
                year: '2015',
                description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
            },
            {
                id: 2,
                year: '2016',
                description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
            },
            {
                id: 3,
                year: '2017',
                description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                id: 3,
                year: '2017',
                description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
        ]
    }
]

export default mockData;