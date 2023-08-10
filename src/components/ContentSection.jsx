/* eslint-disable react/prop-types */


const ContentSection = ({ children, ...props }) => {
    return (
        <section {...props}>
            {children}
        </section>
    );
}

export default ContentSection;
