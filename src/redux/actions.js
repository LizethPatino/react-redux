export const increment = (count) => ({
    type: 'INCREMENT',
    payload: count
});

export const decrement = () => ({
    type: 'DECREMENT',
});

export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
});

export const logout = () => ({
    type: 'LOGOUT',
});
