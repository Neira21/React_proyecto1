import React from 'react'

export const Characters = ({characters}) => {
  return (
    <>
        <div className="row">
            {
                characters.map((item) => (
                    <div key={item.id} className='col mb-4'>
                        <div className="card" style={{minWidth:"100px", maxWidth:"200px"}} >
                            <img src= {item.image} alt={item.name} />
                            <div className="card-body">
                                <h5 className='card-title'>{item.name}</h5>
                                <hr/>
                                <p className='card-text' > Status: {item.status} </p>
                                <p> Species: {item.species} </p>
                                <p> gender: {item.gender} </p>
                                <p> locationr: {item.location.name} </p>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </>
    )
}
