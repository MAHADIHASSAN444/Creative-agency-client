import React from 'react';
import Frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
      <main style={{height:'600px'}} className="row d-flex align-items-center">
          <div className="col-md-4 offset-1">
                <h1>Let's Grow your <br/> Brand To The <br/> Next Level</h1>
                <p>Lets grow your brand to the next level. Lets grow your brand to the next level. Lets grow your brand to the next level. Lets grow your brand to the next level.</p>
                <button>Hire Us</button>
          </div>
          <div className="col-md-6">
              <img src={Frame} alt="" className="img-fluid"/>

          </div>

      </main>
    );
};

export default HeaderMain;