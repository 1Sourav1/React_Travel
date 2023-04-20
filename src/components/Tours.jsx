import React from 'react';
import Card from './Card';

const Tours = (props) => {

    const{ tours,removeTour }=props
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Sourav</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) =>{
                        return(
                            <Card {...tour} removeTour={removeTour}></Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tours;