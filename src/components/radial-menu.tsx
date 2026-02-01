import { Link } from 'react-router-dom'
import { use, useEffect, useRef } from 'react'
import { gsap } from 'gsap';

interface IRadialMenuProps {
  categories: string[] | null
  currentCategory: string
  menuRef: React.RefObject<HTMLUListElement | null>
  labelCategoryRef: React.RefObject<HTMLDivElement | null>
}

export default function RadialMenu({ categories, currentCategory, menuRef, labelCategoryRef }: IRadialMenuProps) {

  if (!categories) return null;

  const radius = 265;
  const centerX = 265;
  const centerY = 265;
  const countLinks = categories.length;
  const angleOffset = -Math.PI / 3;
  const currentIndexOfCategory = categories.indexOf(currentCategory);

  const getPosition = (index: number) => {
    const angle = (2 * Math.PI * index) / countLinks + angleOffset;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  }

  return (
    <div className="circular-menu" >
      <ul className="circular-list" ref={menuRef}>
        {categories.map((category, index) => {
          const { x, y } = getPosition(index);
          return (
            <li
              key={category}
              className="circular-item"
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
            >
              <Link
                to={`/${category}`}
                className={`circular-item__link ${currentCategory === category ? 'circular-item__link-active' : ''}`}
              >
                <p className="circular-item__link-index">{index + 1}</p>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="circular-menu__text" ref={labelCategoryRef}>
        <h2 className="circular-item__link-text">
          {categories[currentIndexOfCategory]}
        </h2>
      </div>
    </div>
  )
}
