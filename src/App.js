import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TicketPage from './pages/TicketMainPage';
import 'antd/dist/antd.css';

export 
function App() {
  return (
    <>
      <Helmet>
        <title>MOVIE</title>
      </Helmet>
      <Switch>
        <Route component={TicketPage} path="/ticket" exact/>
        <Route component={LoginPage} path="/login" exact/>
        <Route component={RegisterPage} path="/register" exact/>
        <Route component={MainPage} path="/" />
      </Switch>
    </>
  );
}

export default App;
