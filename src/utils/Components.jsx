import React from 'react'
import c from "./Components.module.scss"

const Components = ({children}) => {
  return (
    <div className={c.container}>
        {children}
    </div>
  )
}

export default Components