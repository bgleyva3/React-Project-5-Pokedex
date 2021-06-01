import { Redirect, Route } from 'react-router'
import { useAuth } from '../provider/AuthProvider'

const ProtectedRoute = ({ children, ...props }) => {
  const auth = useAuth()
  console.log(useAuth())
  return (
    <Route
      {...props}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute