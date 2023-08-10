/* eslint-disable react/prop-types */

const Container = ({ children }) => {
  return (
    <div className="mx-auto px-8 py-16 md:px-16 container flex flex-col 2xl:max-w-6xl xl:max-w-6xl z-20">
      {children}
    </div>
  );
};

export default Container;
