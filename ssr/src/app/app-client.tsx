'use client';

import { useState } from 'react';
import { Counter } from './components';

export const App = () =>{
    const [count, setCount] = useState(0);
    return (
        <div>
            <Counter count={count} setCount={setCount} ></Counter>
            <Counter count={count} setCount={setCount} ></Counter>
        </div>
    );
}