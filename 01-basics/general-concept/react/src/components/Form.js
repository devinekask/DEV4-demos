import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    onAddItem({ name, price, amount: 1, id: Date.now() });
    setName("");
    setPrice(1)
  }

  return (<form onSubmit={handleSubmit}>
    <label htmlFor="name">
      <input type="text" required name="name" id="name" placeholder="Add an item..." value={name} onChange={e => setName(e.target.value)} />
    </label>
    <label htmlFor="price">
      <input type="number" required name="price" id="price" placeholder="Price" value={price} onChange={e => setPrice(parseInt(e.target.value))} />
    </label>
    <button type="submit">Add</button>
  </form>);
}

Form.proptypes = {
  onAddItem: PropTypes.func.isRequired
}

export default Form;