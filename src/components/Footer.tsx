import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/content'

export function Footer() {
  const onHome = useLocation().pathname === '/'

  return (
    <footer>
      <div className="container">
        <span>© {new Date().getFullYear()} {profile.shortName}</span>
        <span>Designed & built with intention.</span>
        {onHome ? <a href="#top">Back to top ↑</a> : <Link to="/">Back to home ↑</Link>}
      </div>
    </footer>
  )
}
