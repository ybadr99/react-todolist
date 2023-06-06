import TodoApp from './components/TodoApp';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/about" element={<About />}>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
