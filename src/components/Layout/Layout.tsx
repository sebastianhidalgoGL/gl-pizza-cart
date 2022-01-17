import { ReactElement, ReactNode } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type PageProps = {
  children: ReactNode
}

function Layout({ children }: PageProps): ReactElement {
  return (
    <div className='min-h-screen relative'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
