import {
  createBrowserRouter,
} from "react-router"
import App from '@pages/App.tsx'
import UI from '@pages/UI.tsx'

const router = createBrowserRouter([
  {
    path: "/",
		// element: <App />,
		Component: App,
  },
	{
		path: "/ui",
		Component: UI,
	}
])

export default router
