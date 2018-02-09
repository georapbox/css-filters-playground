import React from 'react';
import B from 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import ImagePreview from '../ImagePreview/ImagePreview';

const Layout = props => (
  <div className={B['container-fluid']}>
    <Header />
    {/* <div className={`${B.row} ${B['mt-3']} ${B['mb-4']}`}>
      <div className={B['col-md-12']}>

      </div>
    </div> */}

    <div className={`${B.row} ${B['mb-5']}`}>
      <div className={`${B['col-sm-8']} ${B['order-sm-last']}`}>
        <ImagePreview />
      </div>

      <div className={`${B['col-sm-4']}`}>
        <Filters />
      </div>
    </div>
  </div>
);

export default Layout;
