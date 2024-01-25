import { useState } from 'react'
import Home from './pages/home/Home';
import './App.css'
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import AddExpense from './pages/addExpense/AddExpense';
import Footer from './components/footer/Footer';

function App() {
  

  return (
    
    <Router>
   
    
   <Header/>
 
   <Routes>
   <Route path='/' exact element={<Home/>}/>
   <Route path='/addExpense'  element={<AddExpense/>}/>
   </Routes>
  <Footer/>
    
    
   
  
  </Router>
   
    
  );
}

export default App;
