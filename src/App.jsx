import React from 'react'

export function App() {
  const LazyLoaded = React.lazy(() => import('./components/LazyLoaded.jsx'))

  return (
    <div>
      <div>Hello Cypress</div>
      <React.Suspense fallback='Loading...'>
        <LazyLoaded />
      </React.Suspense>
    </div>
  )
}
