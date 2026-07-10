import { Link } from 'react-router-dom'
import './v2.css'

const V2Landing = () => {
  return (
    <div className="v2-landing">
      <nav className="v2-nav">
        <span className="v2-logo">3D Weather</span>
        <div className="v2-nav-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <Link to="/">Back to v1</Link>
        </div>
      </nav>

      <section className="v2-hero">
        <span className="v2-badge">v2 &middot; in progress</span>
        <h1 className="v2-title">Weather, seen from street level.</h1>
        <p className="v2-subtitle">
          Explore live forecasts for iconic landmarks around the world,
          rendered in 3D.
        </p>
        <button className="v2-cta" type="button">
          Explore the globe
        </button>
        <img className="v2-hero-img" src="/img/hero.jpg" alt="3D rendered landmark with current weather" />
      </section>
    </div>
  )
}

export default V2Landing
