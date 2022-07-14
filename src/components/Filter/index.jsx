import React, { Component } from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  changeHandler = e => {
    const { value } = e.target;

    this.props.onFilterContacts(value);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input
          className={styles.InputFilter}
          name="filter"
          type="text"
          onChange={this.changeHandler}
        ></input>
      </label>
    );
  }
}

Filter.propTypes = {
  contacts: PropTypes.string.isRequired,
};

export default Filter;
