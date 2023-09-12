import PropTypes from "prop-types";
import { Component } from "react";

class ClassComp extends Component {
  render() {
    const { ime, godine } = this.props;

    return (
      <p>
        {ime} ce za 10 godina imati {godine + 10}
      </p>
    );
  }
}

ClassComp.propTypes = {
  ime: PropTypes.string,
  godine: PropTypes.number,
};

export default ClassComp;
