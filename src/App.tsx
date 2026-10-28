import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { FilesPage } from './pages/FilesPage'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/files" element={<FilesPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
