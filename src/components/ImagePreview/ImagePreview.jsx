import React from 'react';
import B from 'bootstrap/dist/css/bootstrap.css';
import sampleImage from '../../assets/images/sample.svg';
import { connect } from 'react-redux';
import makeFiltersCSS from '../Filters/lib/makeFiltersCSS';

const ImagePreview = props => (
  <img
    className={B['card-img-top']}
    src={sampleImage} alt="Preview"
    style={{ maxWidth: '512px', filter: makeFiltersCSS(props.filters) }}
  />
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ImagePreview);
