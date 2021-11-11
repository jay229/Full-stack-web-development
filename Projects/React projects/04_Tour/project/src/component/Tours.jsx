import React from 'react'
import Tour from './Tour';

export default function Tours({ tour,removeTour }) {


    return (
        <section>
            <div className="title">
                <h1>Our Tours</h1>
                
            </div>
            <div>
                {
                    tour.map((tr) => {
                        return <Tour key={tr.id} {...tr} removeTour={removeTour} />
                    })
                }
            </div>

        </section>

    );
}

