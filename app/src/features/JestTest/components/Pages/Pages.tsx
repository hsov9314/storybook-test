import { Link } from 'react-router-dom'

export const HomePage = () => (
  <div>
    <h1 className="mb-5">Welcome to Home Page</h1>
    <Link
      to="/about"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Go to About Page
    </Link>
  </div>
)

export const AboutPage = () => <h1>Welcome to About Page</h1>
