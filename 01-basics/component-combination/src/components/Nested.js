import Deep from "./Deep"
import OtherOne from "./OtherOne";

const Nested = () => {
  return (<>
    <p>You can nest components as you wish</p>
    <Deep />
    <OtherOne />
  </>);
}

export default Nested;