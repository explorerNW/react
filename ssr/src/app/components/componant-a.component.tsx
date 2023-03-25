export const countUp = (count: number, setCount: Function) => {
    setCount(count+1);
}
export const countDown = (count: number, setCount: Function) => {
    setCount(count-1);
}

export function Counter(prop: { count: number; setCount: any }) {
    const { count, setCount } = prop;
    return (
        <div>
            <button onClick={ () => countUp(count, setCount) }>count++</button>
            <span>{ count }</span>
            <button onClick={ () => countDown(count, setCount) }>count--</button>
        </div>
    );
}