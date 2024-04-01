import { createContext, FC, ReactNode } from 'react'

export const AppProviderContext = createContext<null | {
  mobile: boolean | null
}>(null)

export const AppProvider: FC<{
  mobile?: boolean | null
  children: ReactNode
}> = ({ children, mobile = null }) => {
  return (
    <AppProviderContext.Provider
      value={{
        mobile,
      }}
    >
      {children}
    </AppProviderContext.Provider>
  )
}
