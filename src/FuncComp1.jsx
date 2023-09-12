import PropTypes from "prop-types";
function FuncComp1({ ime, godine }) {
  return (
    <>
      <p>
        {ime} ce za 10 godina imati {godine + 10}{" "}
      </p>
    </>
  );
}

FuncComp1.propTypes = {
  ime: PropTypes.string,
  godine: PropTypes.number,
};

export default FuncComp1;
