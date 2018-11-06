import React from 'react'

const StatsItem = (props) => {
  const {
    customClass,
    amount
  } = props

  const text = customClass.charAt(0).toUpperCase() + customClass.slice(1)

  return (
    <div className={`stats-elem ${customClass}`}>
      <span className="amount">{amount}</span>
      <span className="text">{text}</span>
    </div>
  )
}

export default StatsItem
