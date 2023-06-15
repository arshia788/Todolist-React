import React from 'react';

const InputPart = ({submitHandler,text, change}) => {

    return (
        <form 
        onSubmit={submitHandler}
        className='form'>

            <div>
                <input 
                placeholder='add your thoughts...'
                value={text} onChange={change}/>
            </div>

            <button type='submit'>add</button>
            
        </form>
    );
};

export default InputPart;