import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions';

const Auth = () => {
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogin = () => {
        const user = { name: 'John Doe' }; // Ejemplo de usuario
        dispatch(login(user));
    };

    return (
        <div>
            {isAuthenticated ? (
                <button onClick={() => dispatch(logout())}>Cerrar sesión</button>
            ) : (
                <button onClick={handleLogin}>Iniciar sesión</button>
            )}
        </div>
    );
};

export default Auth;
