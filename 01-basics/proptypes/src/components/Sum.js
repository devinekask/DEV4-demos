import PropTypes from 'prop-types';

const Sum = ({ a, b }) => {
  return (
    <p>
      {a} + {b} = {a + b}
    </p>
  );
};

Sum.defaultProps = {
  a: 1,
  b: 1
};

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired
};


export default Sum;