import React from 'react'

const Layout = ({children , className=""}) => {
  return (
    <div className={`w-full h-full inline-block px-28 xl:p-24 lg:p-16 md:p-12 sm:p-4 sm:px-4 xs:px-3 ${className}`}>
           {children}
    </div>
  )
}

export default Layout