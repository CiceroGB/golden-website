import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Services } from '../pages/Services';
import { Products } from '../pages/Products';
import { SignUp } from '../pages/SignUp';



export function Routes() {
    return (
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        </Switch>
    )
}