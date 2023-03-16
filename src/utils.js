const paginate = (data) => {
  const itemsPerPage = 9
  const pages = Math.ceil(data.length / itemsPerPage)

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    return data.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export default paginate
