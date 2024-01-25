import React from 'react';
import './Home.css';
import TopFold from '../../components/topFold/TopFold';
import ExpenseList from '../../components/expenseList/ExpenseList';
const Home = () => {
  return (
    <div className='home'>
       <TopFold/>
       <ExpenseList/>
       
    </div>
  )
}

export default Home;
