import Deep from "./Deep"
import OtherOne from "./OtherOne";

const Nested = () => {
  return (<>
    <p>You can nest components if you want.</p>
    <Deep />
    <OtherOne />
  </>);
}

export default Nested;