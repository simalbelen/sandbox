import { FC, useState } from 'react';
import './App.css';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './Components/Home/Home';

/**
 * Created by Belen on 01/12/2022.
 */

export const App:FC<any> = (props):JSX.Element => {

  const history:any = useHistory()

  const [numero, setNumero] = useState<number>(0);

  return (
    <div>
      <Switch>
        <Route exact path={"/"}>
          <Home 
              num={numero} 
              setNum = {setNumero} 
              history={history}/>
        </Route>
        <Route render={() => <Redirect to={"/"}/>}/>
      </Switch>
    </div>
  );
}