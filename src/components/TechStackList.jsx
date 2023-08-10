/* eslint-disable react/prop-types */
import TechIcon from "./TechIcon";

const TechStackList = ({ list }) => {
  return (
    <ul className="flex flex-wrap justify-center sm:justify-start gap-6">
      <TechIcon list={list} />
    </ul>
  );
};

export default TechStackList;
