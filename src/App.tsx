import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import Chat from "./view/pages/Chat/Chat"
import Optin from "./view/pages/Optin/Optin"

function AppRoutes() {
  let routes = useRoutes([
    { path: "/", element: <Optin /> },
    { path: "/chat", element: <Chat /> },
  ])

  return routes
}



function App () {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
