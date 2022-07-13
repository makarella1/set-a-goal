import { Route, Routes } from 'react-router-dom';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <ToastContainer />
    </>
  );
};

export default App;
