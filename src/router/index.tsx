import {
  createBrowserRouter,
} from "react-router"
import App from '@pages/App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
		// element: <App />,
		Component: App,
  }
])

export default router
