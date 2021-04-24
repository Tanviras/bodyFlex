import React from 'react';
import WhyChooseUsCard from '../WhyChooseUsCard/WhyChooseUsCard';
import './WhyChooseUs.css';

const WhyChooseUs = () => {

    const choiceLists = [
        {
            id: 'ASDFGH',
            title: 'FREE FITNESS TRAINING',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, corporis.",
            image: 'https://i.imgur.com/4gUJbaD.png'
        },
        {
            id: 'POIUYTRE',
            title: 'TONS OF CARDIO AND STRENGTH',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, corporis.",
            image: 'https://i.imgur.com/YowgoeC.png'
        },
        {
            id: 'ASDFGHIM',
            title: 'NO COMMITMENT MEMBERSHIPS',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, corporis.",
            image: 'https://i.imgur.com/16RQvlY.png'
        },
    ]
    return (
        <div style={{paddingLeft:115,paddingRight:115,marginBottom:100}}>

            <center>
                <h1 className='mb-5'><span style={{ color: '#eeae0c' }}>WHY</span> CHOOSE US</h1>
            </center>

            <div className="row text-center justify-content-around">
                {
                    choiceLists.map(choiceList =>
                        <WhyChooseUsCard key={choiceList.id} choiceList={choiceList}>
                        </WhyChooseUsCard>
                    )
                }
            </div>
            
        </div>
    );
};

export default WhyChooseUs;