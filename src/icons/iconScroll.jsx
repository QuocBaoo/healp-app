import { UtilsConst } from "@/lib/definitions/UtilsConst";

function IconScroll(props) {
  const {
    width = UtilsConst.variableCSS.sizeIconScroll,
    height = UtilsConst.variableCSS.sizeIconScroll,
    color = UtilsConst.variableCSS["gray-400"],
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z"
        fill="white"
        fillOpacity="0.01"
        stroke={color}
      />
      <path
        d="M30.5853 28.042L24.0003 21.6579L17.4153 28.042L16.5391 27.1925L24.0003 19.959L31.4615 27.1925L30.5853 28.042Z"
        fill={color}
      />
    </svg>
  );
}
export default IconScroll;
