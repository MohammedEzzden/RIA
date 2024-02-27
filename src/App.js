import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// React Router Import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
	return (
		<div>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/News' element={<News />} />
					<Route path='/Contacts' element={<Contacts />} />
					<Route path='/Details'>
						<Route path=':id' element={<Details />} />
					</Route>

					<Route element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>

			<Footer />
		</div>
	);
}

export default App;
