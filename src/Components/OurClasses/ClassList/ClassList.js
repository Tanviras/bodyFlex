import React from 'react';
import ClassListCard from '../ClassListCard/ClassListCard';

const ClassList = () => {
    const classes = [
        {
            id: 1,
            image: 'https://i.imgur.com/2IWfIDM.png',
            title: 'PSYCHO TRAINING'
        },
        {
            id: 2,
            image: 'https://i.imgur.com/3pcRRJi.jpg',
            title: 'SELF DEFENCE'
        },
        {
            id: 3,
            image: 'https://i.imgur.com/3ecLOJd.jpg',
            title: 'ADVANCED GYM'
        },
        {
            id: 4,
            image: 'https://i.imgur.com/WvnK39p.jpg',
            title: 'CARDIO TRAINING'
        },
        {
            id: 5,
            image: 'https://i.imgur.com/ehRDGdO.jpg',
            title: 'STRENGTH TRAINING'
        },
        {
            id: 6,
            image: 'https://i.imgur.com/4O1JxXR.jpg',
            title: 'PSYCHO TRAINING'
        }
    ]
    return (
        <div style={{ paddingLeft: 100, paddingRight: 100,marginBottom:100}}>


            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    classes.map(cls =>
                        <ClassListCard key={cls.id} cls={cls}>
                        </ClassListCard>)
                }

            </div>
        </div>
    );
};

export default ClassList;