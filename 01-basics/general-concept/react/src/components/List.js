import PropTypes from 'prop-types';

const List = ({ list, onAmountChange }) => {
  return (<ul>
    {list.map(item => <li key={item.id}>
      {`${item.name} - ${item.price} EUR (${item.amount}x) = ${item.amount * item.price} EUR`}
      <button onClick={() => onAmountChange(item.id, -1)}>-</button>
      <button onClick={() => onAmountChange(item.id, 1)}>+</button>
    </li>)}
  </ul>)
}



export default List;