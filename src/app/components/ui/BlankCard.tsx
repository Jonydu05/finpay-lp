import React from 'react'

type Props = {
  title: string;
  children: React.ReactNode;
  classNames?: string;
}

function BlankCard({title, children, classNames}: Props) {
  return (
    <div className={"blank-card " + (classNames ?? '')}>
      <h5>{title}</h5>
      {children}
    </div>
  )
}

export default BlankCard