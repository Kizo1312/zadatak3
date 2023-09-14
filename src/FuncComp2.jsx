import PropTypes from "prop-types";
function FuncComp2({ ime, godine, children }) {
  return (
    <>
      <p>
        {ime} ce za 10 godina imati {godine + 10}{" "}
      </p>
      {children}
    </>
  );
}

FuncComp2.propTypes = {
  ime: PropTypes.string,
  godine: PropTypes.number,
  children: PropTypes.element,
};

// FuncComp2.defaultProps = {
//   godine: 25,
//   ime: "Ana",
// };
export default FuncComp2;
