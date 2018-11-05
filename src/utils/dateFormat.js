const dateFormat = () => {
  const rightNow = new Date()

  return rightNow.toISOString().substring(0, 10)
}

export default dateFormat
