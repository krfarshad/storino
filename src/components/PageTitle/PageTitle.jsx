import React from 'react'

const PageTitle = (props) => {
  return (
    <h1 className='font-bold text-slate-600 text-2xl leading-10 mb-4'>{props.children}</h1>
  )
}

export default PageTitle