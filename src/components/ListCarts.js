import React from 'react';

import { FaCheckCircle } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";



const ListCarts = ({data}) => {
    return (
        <div className='cart'>
            {data.desc}

            <div>
                <button>
                    <FaCheckCircle />
                </button>

                <button>
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
};

export default ListCarts;