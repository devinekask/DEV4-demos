import { shapes } from "../App"

const ShapeWithObject = ({ type, x, y }) => {
  const shapeTypes = {
    [shapes.RECT]: <rect x="0" y="0" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5" />,
    [shapes.ROUNDED_RECT]: <rect x="0" y="0" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5" />,
    [shapes.CIRCLE]: <circle cx="20" cy="20" r="20" stroke="red" fill="transparent" strokeWidth="5" />
  }

  console.log(shapeTypes)
  return <g transform={`translate(${x}, ${y})`}>{shapeTypes[type]}</g>;
}

ShapeWithObject.defaultProps = {
  x: 0,
  y: 0
}

export default ShapeWithObject;