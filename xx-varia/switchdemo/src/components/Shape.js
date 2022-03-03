import { shapes } from "../App"

const getShape = (type) => {
  switch (type) {
    case shapes.RECT:
      return <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5" />
    case shapes.ROUNDED_RECT:
      return <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5" />
    case shapes.CIRCLE:
      return <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" strokeWidth="5" />
  }
}

const Shape = ({ type }) => {
  return <g>{getShape(type)}</g>;
}

export default Shape;