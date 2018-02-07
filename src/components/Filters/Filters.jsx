import B from 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { changeFilter, resetFilters } from '../../actions/action-creators';
import initialValues from './lib/initialValues';

class Filters extends Component {
  onInputChange = event => {
    const { props } = this;
    props.changeFilter({
      [event.target.name]: event.target.value
    });
  };

  onResetFilters = () => {
    const { props } = this;
    props.reset();
    props.resetFilters(initialValues);
  };

  renderLabel = (id, unit) => (
    <label htmlFor={id}>
      <code>
        filter: {id}({this.props.filters[id] || initialValues[id]}{unit});
      </code>
    </label>
  );

  render() {
    const { props } = this;

    return (
      <form>
        <div className={B['form-group']}>
          {this.renderLabel('blur', 'px')}
          <Field
            id="blur"
            min="0"
            max="100"
            name="blur"
            type="number"
            component="input"
            className={B['form-control']}
            onChange={this.onInputChange}
          />
        </div>

        <div className={B['form-group']}>
          {this.renderLabel('contrast', '%')}
          <Field
            id="contrast"
            min="0"
            max="200"
            name="contrast"
            type="number"
            component="input"
            className={B['form-control']}
            onChange={this.onInputChange}
          />
        </div>

        <div className={B['form-group']}>
          {this.renderLabel('grayscale', '%')}
          <Field
            id="grayscale"
            min="0"
            max="100"
            name="grayscale"
            type="number"
            component="input"
            className={B['form-control']}
            onChange={this.onInputChange}
          />
        </div>

        <div className={B['form-group']}>
          {this.renderLabel('sepia', '%')}
          <Field
            id="sepia"
            min="0"
            max="100"
            name="sepia"
            type="number"
            component="input"
            className={B['form-control']}
            onChange={this.onInputChange}
          />
        </div>

        <div className={B['form-group']}>
          {this.renderLabel('hue-rotate', 'deg')}
          <Field
            id="hue-rotate"
            min="0"
            max="360"
            name="hue-rotate"
            type="number"
            component="input"
            className={B['form-control']}
            onChange={this.onInputChange}
          />
        </div>

        <div className={B['form-group']}>
          {this.renderLabel('brightness', '%')}
          <Field
            id="brightness"
            min="0"
            name="brightness"
            type="number"
            component="input"
            className={B['form-control']}
            onChange={this.onInputChange}
          />
        </div>

        <div className={B['form-group']}>
          {this.renderLabel('invert', '%')}
          <Field
            id="invert"
            min="0"
            max="100"
            name="invert"
            type="number"
            component="input"
            className={B['form-control']}
            onChange={this.onInputChange}
          />
        </div>

        <div className={B['form-group']}>
          {this.renderLabel('opacity', '%')}
          <Field
            id="opacity"
            min="0"
            max="100"
            name="opacity"
            type="number"
            component="input"
            className={B['form-control']}
            onChange={this.onInputChange}
          />
        </div>

        <div className={B['form-group']}>
          {this.renderLabel('saturate', '%')}
          <Field
            id="saturate"
            min="0"
            max="100"
            name="saturate"
            type="number"
            component="input"
            className={B['form-control']}
            onChange={this.onInputChange}
          />
        </div>

        <button
          type="button"
          className={`${B['btn']} ${B['btn-danger']}`}
          onClick={this.onResetFilters}
          disabled={props.pristine}>
          Reset
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(changeFilter(value)),
  resetFilters: values => dispatch(resetFilters(values))
});

export default reduxForm({
  form: 'Filtersform',
  initialValues
})(
  connect(mapStateToProps, mapDispatchToProps)(Filters)
);