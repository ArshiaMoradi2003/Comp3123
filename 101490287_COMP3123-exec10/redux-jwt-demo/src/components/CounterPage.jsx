// src/components/CounterPage.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice';

function CounterPage() {
    const value = useSelector((state) => state.counter.value);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <h2>Protected Counter Page</h2>
            {user && <p>Welcome, {user.email}</p>}
            <h3>Counter: {value}</h3>
            <div style={{ marginTop: '1rem' }}>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button
                    onClick={() => dispatch(increment())}
                    style={{ margin: '0 0.5rem' }}
                >
                    +
                </button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
}

export default CounterPage;
