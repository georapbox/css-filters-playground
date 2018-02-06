import React from 'react';
import B from 'bootstrap/dist/css/bootstrap.css';
import Filters from './Filters';
import ImagePreview from './ImagePreview';

const Layout = props => (
  <div className={B['container-fluid']}>
    <div className={B.row}>
      <div className={B['col-md-4']}>
        <Filters />
      </div>

      <div className={B['col-md-8']}>
        <ImagePreview />
      </div>
    </div>
  </div>

  // <div className={B.card} style={{ width: '32rem' }}>
  //   <ImagePreview />

  //   <div className={B['card-body']}>
  //     <Filters />
  //   </div>
  // </div>
);

export default Layout;
