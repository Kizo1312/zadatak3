import PropTypes from "prop-types";
function FuncComp2({ ime, godine }) {
  return (
    <>
      <p>
        {ime} ce za 10 godina imati {godine + 10}{" "}
      </p>
    </>
  );
}

FuncComp2.propTypes = {
  ime: PropTypes.string,
  godine: PropTypes.number,
};

FuncComp2.defaultProps = {
  godine: 25,
  ime: "Ana",
};
export default FuncComp2;
