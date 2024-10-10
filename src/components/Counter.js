import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter = () => {
    const count = useSelector(state => state.count);
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={() => dispatch(increment(10))}>Incrementar</button>
            <button onClick={() => dispatch(decrement())}>Decrementar</button>
            <p>{isAuthenticated ? "Usuario autenticado" : "No autenticado"}</p>
        </div>
    );
};

export default Counter;
