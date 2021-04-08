import {BtnLg} from './components/atoms'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword'
import Products from './pages/Products'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'

function App() {
  return (
    // <div className='m-5'>
    //     <BtnLg
    // value='submit'
    // color='btn-orange'
    // rounded='rounded-sm'
    // />
    // </div>
    <BrowserRouter>
        <Switch>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="/products" component={Products}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
