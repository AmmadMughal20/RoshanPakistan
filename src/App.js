import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing/landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
