import React from 'react';
import PricingListCard from '../PricingListCard/PricingListCard';

const PricingList = () => {
    const prices=[
        {
         id:1,
         title:'ADVANCED PLAN',
         value:'$140',
         bgImage:'https://i.imgur.com/KlSvpbZ.jpg'
        },
        {
        id:2,
        title:'BASIC PLAN',
        value:'$120',
        bgImage:'https://i.imgur.com/cLr4R5l.jpg'
        },
        {
        id:3,
        title:'BEGINNERS',
        value:'$90',
        bgImage:'https://i.imgur.com/NVnxGVM.jpg'
        }
]
    return (
        <div style={{ paddingLeft: 100, paddingRight: 100,marginBottom:100}}>


            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    prices.map(prc =>
                    <PricingListCard key={prc.id} prc={prc}>
                    </PricingListCard>)
                }

            </div>
        </div>
    );
};

export default PricingList;