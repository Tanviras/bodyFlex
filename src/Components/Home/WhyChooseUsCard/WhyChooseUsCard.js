import React from 'react';
import './WhyChooseUsCard.css';

const WhyChooseUsCard = (props) => {
    const { id, title, image, description } = props.choiceList;

    return (
        <div className="col-md-4 choiceCard"
        >

            <div className="choiceCardSize shadow-lg">
                <img
                    style={{ width: 74 }}
                    className="mx-auto"
                    src={image}
                    alt=''
                />

                <div className=" card-body">
                    <h5 style={{ fontWeight: 800 }} className="card-title">
                        {title}
                    </h5>
                    <p className="card-text">{description}</p>
                </div>


            </div>



        </div>

    );
};

export default WhyChooseUsCard;