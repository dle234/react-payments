import CardInformationInputPage from './pages/CardInformationInputPage';
import CompleteSubmitFormPage from './pages/CompleteSubmitFormPage';
import './reset.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename="/react-payments/dist/">
        <Routes>
          <Route path="/" element={<CardInformationInputPage />}></Route>
          <Route path="/complete" element={<CompleteSubmitFormPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
