import './App.css';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import TicketPage from './pages/TicketPage';
import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <Helmet>
        <title>MOVIE</title>
      </Helmet>
      <Route component={MainPage} path="/" exact/>
      <Route component={TicketPage} path="/ticket" exact/>
    </>
  );
}

export default App;
