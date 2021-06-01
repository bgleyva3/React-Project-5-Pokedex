import { createContext, useContext, useState } from 'react'

const authContext = createContext()

const fakeAuthService = {
  login: cb => {
    setTimeout(cb, 500)
  },
  logout: cb => {
    setTimeout(cb, 500)
  }
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null)

  const signIn = cb => {
    fakeAuthService.login(() => {
      setUser('Ash Ketchump')
      cb()
    })
  }

  const signOut = cb => {
    fakeAuthService.logout(() => {
      setUser(null)
      cb()
    })
  }

  return {
    user,
    signIn,
    signOut
  }
}

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => useContext(authContext)
