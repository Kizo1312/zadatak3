import PropTypes from "prop-types";

function FuncComp1({ users, changeName, uvecaj, nekiText }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          <p>
            {user.name} ima {user.years} godina
          </p>
          <input type="text" onChange={(event) => changeName(event, index)} />
          <button onClick={() => uvecaj(index)}>
            {nekiText}
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

FuncComp1.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      years: PropTypes.number,
    })
  ).isRequired,
  changeName: PropTypes.func.isRequired,
  uvecaj: PropTypes.func.isRequired,
  nekiText: PropTypes.string.isRequired,
};

export default FuncComp1;
