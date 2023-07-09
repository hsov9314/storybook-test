import { Link } from 'react-router-dom'

export const HomePage = () => (
  <div>
    <h1>Welcome to Home Page</h1>
    <Link to="/about">Go to About Page</Link>
  </div>
)

export const AboutPage = () => <h1>Welcome to About Page</h1>
