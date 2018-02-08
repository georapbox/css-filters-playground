import React from 'react';
import B from 'bootstrap/dist/css/bootstrap.css';
import Filters from './Filters/Filters';
import ImagePreview from './ImagePreview/ImagePreview';

const Layout = props => (
  <div className={B['container-fluid']}>
    <div className={`${B.row} ${B['mt-3']} ${B['mb-4']}`}>
      <div className={B['col-md-12']}>
        <h1 className={B.h2}>CSS Filters Playground</h1>
      </div>
    </div>

    <div className={`${B.row} ${B['mb-5']}`}>
      <div className={`${B['col-md-8']} ${B['order-md-last']}`}>
        <ImagePreview />
      </div>

      <div className={`${B['col-md-4']}`}>
        <Filters />
      </div>
    </div>
  </div>
);

export default Layout;
