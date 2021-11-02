import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export { Section };
