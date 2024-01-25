import React from 'react';
import './Card.css';
import moment from 'moment';
import{useDispatch} from 'react-redux'
import { deleteExpense } from '../../redux/actions/Expenses';


const Card = ({item,notifySuccess}) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch (deleteExpense(item));
    notifySuccess();
  }

  return (
    <div className='card' style={{borderRight:`6px solid ${item.category.color}`}}>
      <div className="card-img-container">
        <img src={item.category.icon}
         alt={item.category.title} 
          className='card-img'/>
      </div>
      <div className="card-info">
       <h4 className='card-title'>{item.title}</h4>
       <h4 className='card-time'>{time}</h4>
      </div>
      <div className="card-right">
        <div>
          <h4 className='card-amount'> ₹{item.amount}</h4>
        </div>
        <div className='delete-icon' onClick={handleDelete}>
        <i className="fi fi-rr-trash-xmark"></i>
        </div>
      </div>
     
    </div>
  )
}

export default Card;
