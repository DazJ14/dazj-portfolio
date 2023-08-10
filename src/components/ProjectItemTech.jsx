/* eslint-disable react/prop-types */

const ProjectItemTech = ({ tech, name }) => {
  return (
    <>
      {tech.map((item) => (
        <span
          key={`${name}-${item}`}
          className="bg-white text-black text-sm px-2 py-1 rounded-xl ml-2 first:ml-0 drop-shadow-md"
        >
          {item}
        </span>
      ))}
    </>
  );
};

export default ProjectItemTech;
