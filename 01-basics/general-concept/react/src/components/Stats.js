import PropTypes from 'prop-types';

const Stats = ({ list }) => {

  const total = list.reduce((acc, item) => acc + (item.price * item.amount), 0);

  return (<dl>
    <dt># items</dt>
    <dd>{list.length}</dd>
    <dt>Total</dt>
    <dd>{total} EUR</dd>
  </dl>);
}

Stats.proptypes = {
  list: PropTypes.array.isRequired
}

export default Stats;