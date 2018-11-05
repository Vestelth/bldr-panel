const dateDiff = (date) => {
  const now = new Date()
  const then = new Date(date)

  const timeDiff = Math.abs(then.getTime() - now.getTime())
  const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24))

  return diffDays
}

export default dateDiff
