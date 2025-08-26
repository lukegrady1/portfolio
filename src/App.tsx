import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjectDetail } from './pages/ProjectDetail'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Resume } from './pages/Resume'
import { Uses } from './pages/Uses'
import { Contact } from './pages/Contact'
import { Playground } from './pages/Playground'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Layout>
  )
}

export default App