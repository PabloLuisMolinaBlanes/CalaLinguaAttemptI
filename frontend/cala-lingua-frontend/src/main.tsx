import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage/HomePage.tsx'
import Auth from './pages/Auth/Auth.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainPage from './pages/MainPage/MainPage.tsx'
import { Provider } from 'react-redux'
import store from './utlis/state/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import QuestionnairePage from './pages/QuestionnairePage/QuestionnairePage.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <Auth isSignUp={false} />
  },
  {
    path: '/signup',
    element: <Auth isSignUp={true} />
  },
  {
    path: '/main',
    element: <MainPage />
  },
  {
    path: '/questionnaire/:id',
    element: <QuestionnairePage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
