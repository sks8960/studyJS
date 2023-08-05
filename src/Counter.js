import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";
const Counter = ({a}) => {
    
    const [count, setCount] = useState(a);

    const onIncrease = () => {
        setCount(count + 1);
    };
    const onDecrease = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count = {count} />
        </div>
    );
};
Counter.defaultProps = {
    initalvalue:0
}

export default Counter;