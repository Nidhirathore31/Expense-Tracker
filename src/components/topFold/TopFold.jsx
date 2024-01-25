import React, { useState } from 'react';
import './TopFold.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/Expenses';

const TopFold = () => {
    const [query,setQuery] = useState("");
    const dispatch = useDispatch();
    const handleQuery = (e) =>{
       setQuery(e.target.value);
       dispatch(searchExpense(e.target.value))
    }
  return (
    <div className='topfold'>
        {window.location.pathname ==='/' ? (<div className="home-topfold">
        <div className="searchbar">
        <i className="fi fi-rr-search-dollar"></i>
        <input placeholder='Search For Expenses'
         value={query}
          onChange={(e)=>handleQuery(e)}/>
        </div>
        <Link to='/addExpense'>
        <div className="add-button">
        <i className="fi fi-rr-add"></i>
        <label>Add</label>
        </div>
        </Link>
        
       </div>): (<div className='add-topfold'>
                 <Link to='/'>
                 <div className='add-topfold-btn'>
                <i className="fi fi-rr-angle-circle-left"></i>
                <label>Back</label>
                 </div>
                 </Link>
                <Link to='/'>
                <div className='add-topfold-btn'>
                 <i className="fi fi-rr-cross-circle"></i>
                <label>Cancel</label>
                 </div>
                </Link>
                 
                

        
        </div>)}
       
    </div>
  )
}

export default TopFold;
