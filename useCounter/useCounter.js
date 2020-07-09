import { useState } from 'react';

export const useCounter = ( inicialState = 10 ) => {
    
    const [ counter, setCounter ] = useState( inicialState );

    const increment = ( factor = 1 ) => {
        setCounter( counter + factor );
    };

    const decrement = ( factor = 1 ) =>  {
        setCounter( counter - factor );
    };

    function reset() {
        setCounter( inicialState );
    };

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
