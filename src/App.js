import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const nextPage = () => {
    if (page < data.length - 1) {
      setPage((p) => p + 1)
    } else {
      setPage(0)
    }
  }

  const prevPage = () => {
    if (page > 0) {
      setPage((p) => p - 1)
    } else {
      setPage(data.length - 1)
    }
  }

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'Pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {loading || (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => (
              <button
                className={index === page ? 'page-btn active-btn' : 'page-btn'}
                key={index}
                onClick={(e) => setPage(index)}
              >
                {index + 1}
              </button>
            ))}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
