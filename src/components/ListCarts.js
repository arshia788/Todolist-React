import React from 'react';

import { FaCheckCircle } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";



const ListCarts = ({ data, delHandler, checkHandler }) => {
    return (
        <div
            className={`${data.check ? 'cartActive' : 'cartNotActive'}`}>
            
                {data.check ?<del style={{color:'#fff'}}>{data.desc}</del> : <span>{data.desc}</span>}

            <div >

                {
                    data.check ?
                        <button onClick={() => checkHandler(data.id)}>
                            <FaRedo />
                        </button>
                        :
                        <button onClick={() => checkHandler(data.id)}>
                            <FaCheckCircle />
                        </button>
                }

                <button onClick={() => delHandler(data.id)}>
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
};

export default ListCarts;