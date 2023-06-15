import React from 'react';

import ListCarts from './ListCarts';

const Lists = ({todos, delHandler}) => {
    return (
        <div>
            {
                todos.length ?
                todos.map(item=> <ListCarts key={item.id} 
                data={item} 
                delHandler={delHandler}
                />)
                :
                <div style={{background:'crimson', 
                padding:'3px',
                borderRadius:'3px',
                color:"#fff", 
                textAlign:'center'}}>
                    <p>there is no idea</p>
                </div>
            }
        </div>
    );
};

export default Lists;