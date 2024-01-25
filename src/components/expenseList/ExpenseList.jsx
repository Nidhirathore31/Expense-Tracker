import React from 'react';
import './ExpenseList.css';
import Card from './Card';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const ExpenseList = () => {
const {expenseList:list,query} = useSelector(state => state.expenses);
const filteredList = list.filter(item =>item.title.includes(query))
const notifySuccess = () =>  toast.success("Expense Deleted")



  return (
    <div className='expense-list'>
        <ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
/>
        {filteredList.length?filteredList.map(item=>(
            <Card item={item} notifySuccess={notifySuccess}/>
        )) : <div className='empty-state'>
            <img src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150292676.jpg?w=740&t=st=1706024296~exp=1706024896~hmac=c21962a11e2f0ec47dbcf9ee0cf55a7028d9199fe2dedb1ebb80129cf917e9f4"
             alt="empty list" 
             className='empty-img' />
             <label>Uh Oh! your list is empty</label>
            </div>}
    
    </div>
  )
}

export default ExpenseList;
