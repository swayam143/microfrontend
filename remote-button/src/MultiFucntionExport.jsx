import { sum, minus, division } from "host_app/mathUtils";

const MultiFucntionExport = () => {
  return (
    <>
      {" "}
      <div>
        <p>Sum: {sum(5, 3)}</p>
        <p>Minus: {minus(5, 3)}</p>
        <p>Division: {division(10, 2)}</p>
      </div>
    </>
  );
};

export default MultiFucntionExport;
