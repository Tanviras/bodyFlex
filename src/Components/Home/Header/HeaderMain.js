import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {


    const handleClasses = () => {
        window.location.href = '/ourClasses'
    }

    return (
        <div className="positionHeaderMain">
            <div className='row'>

                <div className="col-md-4 col-sm-4">
                    <h1 className='text-white'>THE BEST FITNESS STUDIO IN TOWN</h1>
                    <small className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam voluptatum quia sapiente, eligendi corrupti neque itaque excepturi eveniet soluta asperiores.</small>
                    <br /> <br />

                    <button className='joinUs' onClick={handleClasses}>JOIN US</button>
                </div>

            </div>
        </div>

    );
};

export default HeaderMain;