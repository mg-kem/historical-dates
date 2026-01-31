import { useEffect, useState } from 'react';
import { JSX } from 'react';
import { IMockData } from '../mock/mock';
import MainPage from '../pages/main-page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/error-page/error-page';


interface IAppProps {
  mockData: IMockData[];
}

const exportCategories = (data: IMockData[]) => {
  return data.map((item) => item.category);
}

export default function App({ mockData }: IAppProps): JSX.Element {
  const [categories, setCategories] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>('');

  useEffect(() => {
    const categories: string[] = exportCategories(mockData);
    setCategories(categories);
    setCurrentCategory(categories[0] || '');
  }, [mockData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={`/${currentCategory}`} replace />} />
        <Route path={`/:category`} element={<MainPage data={mockData} categories={categories} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>

  );
}
