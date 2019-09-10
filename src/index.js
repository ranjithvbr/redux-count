import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,combineReducers} from "redux";
import user1 from "./reducer/user1";
import user2 from "./reducer/user2";
import {Provider} from "react-redux"

    const allreducer=combineReducers({
      firsruser:user1,
      seconduser:user2,
    })

    const store=createStore(allreducer,{
      firsruser:"redux",
      seconduser:"reactredux"
    },
    window.devToolsExtension && window.devToolsExtension()
  )

    console.log(JSON.stringify(store.getState()))
    // 
    // const updateuser={
    //   type:"changeuser",
    //   payload:"ranjith"
    // }
    // store.dispatch(updateuser)
    // console.log(JSON.stringify(store.getState()))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
