import { Suspense } from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import Loading from '@/components/Loading'
import router from './router'

function App() {

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} ></RouterProvider>
    </Suspense>
  )
}

export default App
