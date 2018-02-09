import B from 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { changeFilter, resetFilters } from '../../actions/action-creators';
import initialValues from './lib/initialValues';
import FilterLabel from './FilterLabel';

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
    <label htmlFor={id} className={B['mb-0']}>
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
          <FilterLabel method="blur" values={`${this.props.filters.blur}px`} />
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
          <FilterLabel method="contrast" values={`${this.props.filters.contrast}%`} />
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
          <FilterLabel method="grayscale" values={`${this.props.filters.grayscale}%`} />
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
          <FilterLabel method="sepia" values={`${this.props.filters.sepia}%`} />
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
          <FilterLabel method="hue-rotate" values={`${this.props.filters.hueRotate}deg`} />
          <Field
            id="hueRotate"
            min="0"
            max="360"
            name="hueRotate"
            type="number"
            component="input"
            className={B['form-control']}
            onChange={this.onInputChange}
          />
        </div>

        <div className={B['form-group']}>
          <FilterLabel method="brightness" values={`${this.props.filters.brightness}%`} />
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
          <FilterLabel method="invert" values={`${this.props.filters.invert}%`} />
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
          <FilterLabel method="opacity" values={`${this.props.filters.opacity}%`} />
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
          <FilterLabel method="saturate" values={`${this.props.filters.saturate}%`} />
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

        <FilterLabel method="drop-shadow" values={`${this.props.filters.dropShadowOffsetX}px ${this.props.filters.dropShadowOffsetY}px ${this.props.filters.dropShadowBlurRadius}px ${this.props.filters.dropShadowColor}`} />
        <div className={B['form-row']}>
          <div className={`${B['form-group']} ${B['col-md-3']} ${B['col-sm-6']}`}>
            <Field
              id="dropShadowOffsetX"
              name="dropShadowOffsetX"
              type="number"
              component="input"
              className={B['form-control']}
              onChange={this.onInputChange}
            />
          </div>

          <div className={`${B['form-group']} ${B['col-md-3']} ${B['col-sm-6']}`}>
            <Field
              id="dropShadowOffsetY"
              name="dropShadowOffsetY"
              type="number"
              component="input"
              className={B['form-control']}
              onChange={this.onInputChange}
            />
          </div>

          <div className={`${B['form-group']} ${B['col-md-3']} ${B['col-sm-6']}`}>
            <Field
              id="dropShadowBlurRadius"
              name="dropShadowBlurRadius"
              min="0"
              type="number"
              component="input"
              className={B['form-control']}
              onChange={this.onInputChange}
            />
          </div>

          <div className={`${B['form-group']} ${B['col-md-3']} ${B['col-sm-6']}`}>
            <Field
              id="dropShadowColor"
              name="dropShadowColor"
              type="color"
              component="input"
              className={B['form-control']}
              onChange={this.onInputChange}
              style={{height: '38px'}}
            />
          </div>
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
