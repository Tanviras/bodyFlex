import React from 'react';

const ClassListCard = (props) => {
    const{id,image,title}=props.cls;

    return (
        <div class="col">
        <div class="card h-100" style={{height:200}}>
            <img src={image} class="card-img-top" alt="..." />

            <div class="card-body">
                <h5 class="card-title">{title}</h5>
            </div>

            <div class="card-footer">
                <small class="text-muted">Ekhane box hobe InshaAllah</small>
            </div>

        </div>
    </div>

    );
};

export default ClassListCard;