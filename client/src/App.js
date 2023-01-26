import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthFrom from './components/form/AuthFrom';
import GlobalStyle from './components/globalStyle/GlobalStyle';
import Header from './components/header/Header';
import { routes } from './routes/routes';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowFrom = () => {
    setShowForm(!showForm);
  };
  return (
    <BrowserRouter>
      <GlobalStyle>
        <Header showForm={handleShowFrom} />
        {showForm ? <AuthFrom showForm={handleShowFrom} /> : null}
        <Routes>
          {routes.map((data, index) => {
            return (
              <Route path={data.path} element={data.element} key={index} />
            );
          })}
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  );
}

export default App;
