import React, { useState } from 'react';
import './AddForm.css';
import { categories } from '../../constants/AddExpense';
import {useDispatch} from 'react-redux';
import { addExpense } from '../../redux/actions/Expenses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './SuccessModal';

const AddForm = () => {

  const categorie = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [modalOpen,setModalOpen] = useState(false)

  const dispatch = useDispatch();
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    setAmount(val)
  };
  const handleCategory = (category) => {
    setCategory(category)
    setCategoryOpen(false)
  };
  const hanndleSubmit = () => {
    if(title ==='' || amount==='' || !category){
      const notify = () => toast("Please enter a valid data!");
      notify()
      return;
    }
    const data  ={
     title,
     amount,
     category,
     createdAt: new Date()
    };
    console.log("here")
    dispatch(addExpense(data));
    setModalOpen(true);
  }
  return (
    <div className='add-form'>
      <ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
/>
  <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <div className="form-item">
        <label >Title</label>
        <input type="text"
          placeholder='Add Your Expenses'
          value={title}
          onChange={(e) => handleTitle(e)} />
      </div>
      <div className="form-item">
        <label>Amount ₹ </label>
        <input type='number' className='amount-input' value={amount} placeholder='Enter Amount' onChange={(e) => handleAmount(e)} />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div className='category-dropdown' onClick={() => setCategoryOpen(!categoryOpen)}>
            <label>{category ? category.title : 'Category'}</label>
            <i className="fi fi-rr-angle-small-down"></i>
          </div>
          {categoryOpen && <div className='category-container'>
            {categorie.map(category => (
              <div className='category-item'
                style={{ borderRight: `5px solid ${category.color}` }}
                key={category.id} onClick={() => handleCategory(category)} >
                <label >{category.title}</label>
                <img src={category.icon} alt={category.title} />

              </div>
            ))}
          </div>
          }
        </div>
      </div>
      <div className="form-add-btn">
        <div onClick={hanndleSubmit}>
          <label>Add</label>
          <i className="fi fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  )
}

export default AddForm;


