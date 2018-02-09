import React from 'react';
import styles from './ImagePreview.css';
import sampleImage from '../../assets/images/sample.svg';
import { connect } from 'react-redux';
import makeFiltersCSS from '../Filters/lib/makeFiltersCSS';

const ImagePreview = props => (
  <div className={styles.ImagePreview}>
    <img
      src={sampleImage} alt="Preview"
      style={{ filter: makeFiltersCSS(props.filters) }}
    />
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ImagePreview);
