
import './App.scss';
import { Routes, Route } from 'react-router';
import { Layout } from './component/Layout/layout.component';
import { Home } from './component/home/home.component';
import About from './component/about/about.component';
import Contact from './component/contact/contact.component';

function App() {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App;
