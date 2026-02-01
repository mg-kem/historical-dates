
import EventList from '../components/event-list';
import RadialMenu from '../components/radial-menu';
import SwitchButtons from '../components/switch-buttons';
import { IMockData } from '../mock/mock';
import YearsContainer from '../components/years-container';
import { useParams } from 'react-router-dom';
import Caption from '../components/caption';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface IMainPageProps {
  data: IMockData[];
  categories: string[];
}

const getYearsOfCurrentCategory = (data: IMockData[], currentCategory: string) => {
  const yearStart = data.find((item) => item.category === currentCategory)?.dateStart;
  const yearEnd = data.find((item) => item.category === currentCategory)?.dateEnd;
  return [yearStart, yearEnd];
}

export default function MainPage({ data, categories }: IMainPageProps) {
  const { category } = useParams();
  const menuRef = useRef<HTMLUListElement | null>(null);
  const labelCategoryRef = useRef<HTMLDivElement | null>(null);
  const yearsRef = useRef<HTMLDivElement | null>(null);
  const eventsRef = useRef<HTMLDivElement | null>(null);

  const angleStep = 360 / categories.length;
  const currentIndexOfCategory = categories.indexOf(category as string);
  const targetAngle = -currentIndexOfCategory * angleStep;

  useEffect(() => {
    if (!menuRef.current || !labelCategoryRef.current || !yearsRef.current || !eventsRef.current) return;

    const tl = gsap.timeline();
    tl
      .to(menuRef.current, {
        rotation: targetAngle,
        duration: 2,
        ease: 'expo.out',
      })
      .to('.circular-item__link-index', {
        rotation: -targetAngle,
        duration: 2,
        ease: 'expo.out',
      }, 0)
      .fromTo(labelCategoryRef.current, {
        opacity: 0,
        x: 50,
        y: 0
      },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 2,
          ease: 'expo.out',
        }, 0)
      .fromTo(yearsRef.current, {
        opacity: 0,

      },
        {
          opacity: 1,

          duration: 1.1,
          ease: 'expo.out',
        }, 0.5)
      .fromTo(eventsRef.current, {
        opacity: 0,
      },
        {
          opacity: 1,
          duration: 1.1,
          ease: 'expo.out',
        }, 0.5)

    return () => { tl.kill(); };
  }, [category, targetAngle]);

  const [yearStart, yearEnd] = getYearsOfCurrentCategory(data, category as string);

  return (
    <div className="wrapper-container">
      <section className="historical-dates">
        <Caption />
        <YearsContainer yearStart={yearStart as string} yearEnd={yearEnd as string} yearsRef={yearsRef} />
        <SwitchButtons categories={categories} currentCategory={category as string} />
        <RadialMenu categories={categories} currentCategory={category as string} menuRef={menuRef} labelCategoryRef={labelCategoryRef} />
      </section>
      <div className="events-container" ref={eventsRef}>
        <EventList data={data} currentCategory={category as string} />
      </div>
    </div>
  )
}