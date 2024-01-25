import React from 'react';
import './AddExpense.css';
import TopFold from '../../components/topFold/TopFold';
import AddForm from '../../components/addForm/Addform';

const AddExpense = () => {
  return (
    <div className='add-expense'>
     <TopFold/>
     <AddForm/>
    </div>
  )
}

export default AddExpense;
