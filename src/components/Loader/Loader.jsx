import { ThreeCircles } from 'react-loader-spinner';
import s from "./Loader.module.scss"

const Loader = () => {
  return (
    <div className={ s.loader }>
      <ThreeCircles
        height="100"
        width="100"
        color="rainbow"
        wrapperStyle={ {} }
        wrapperClass=""
        visible={ true }
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}

export default Loader;
