import { Oval } from "react-loader-spinner";

export function Loader({ width = 80, height = 80 }) {
  return (
    <Oval
      height={height}
      width={width}
      color="#5160c2"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  );
}
