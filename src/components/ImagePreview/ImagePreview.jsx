import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import sampleImage from '../../assets/images/sample.jpg';
import { connect } from 'react-redux';
import makeFiltersCSS from '../Filters/lib/makeFiltersCSS';

const ImagePreview = props => (
  <div className={Bootstrap['embed-responsive']}>
    <img
      className={Bootstrap['card-img-top']}
      src={sampleImage} alt="Preview"
      style={{ filter: makeFiltersCSS(props.filters) }}
    />
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ImagePreview);
