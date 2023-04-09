import React, { useEffect }from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import app from './firebase';
import { getAuth } from "firebase/auth";
import {auth}  from './firebase';

function App()  {

	const [{user}, dispatch ] = useStateValue();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if(authUser) {

				dispatch({
					type: "SET_USER" ,
					user: authUser
				})
			} else {
				dispatch({
					type: "SET_USER" ,
					user: null
				
				})
			}
		})
			return () => {
				unsubscribe();
			}
	}, [])

		console.log(user);
	return (
	<Router>
		<div className="App">
			
		<Routes>
				
				<Route exact path='/' element={<><Header /><Home /></>}></Route>
				<Route exact path='/Checkout' element={<><Header /><Checkout /></>}></Route>
				<Route exact path='login' element={<Login />}></Route>
		</Routes>
		</div>
	</Router>
);
}


export default App;
