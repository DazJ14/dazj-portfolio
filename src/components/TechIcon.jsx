/* eslint-disable react/prop-types */

const TechIcon = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <li
          key={item.nombre}
          className="group p-3 bg-white shadow-md w-14 h-14 rounded-full relative"
        >
          <img src={item.img} className="w-full h-full object-contain" />
          <span className="text-sm text-center whitespace-nowrap text-white px-2 py-1 bg-sky-400 rounded-lg absolute left-1/2 scale-0 -translate-x-1/2 bottom-0 -z-10 invisible lg:group-hover:translate-y-10 lg:group-hover:visible lg:group-hover:scale-100 lg:group-hover:z-10 ease-out duration-100">
            {item.nombre}
          </span>
        </li>
      ))}
    </>
  );
};

export default TechIcon;
