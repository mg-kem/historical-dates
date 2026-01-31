import { Link } from 'react-router-dom'
import './error-page.css'

export default function ErrorPage() {
  return (
    <div className='error-page'>
      <div className='error-404'>
        <b >Ошибка 404</b>
        <p >Страница не существует</p>
      </div>

      <div className='error__link-to-main'>
        <Link to='/'>На главную</Link>
      </div>
    </div>

  )
}