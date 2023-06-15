import React from 'react';

const InputPart = ({submitHandler,text, change, erros}) => {

    return (
        <form 
        onSubmit={submitHandler}
        className='form'>

            <div>
                <input 
                placeholder='add your thoughts...'
                value={text} onChange={change}/>
            </div>

            {erros && <span style={{color:'crimson'}}>{erros}</span>}

            <button type='submit'>add</button>
            
        </form>
    );
};

export default InputPart;