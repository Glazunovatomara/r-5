
import { useState } from "react";

import styles from'./counter.module.css';

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleClick = () => {
        setCount (count + 1);
    };

    return (
    <div className="">
    <button className={styles.btn} onClick={handleClick}>Нажми</button>
    <p className={styles.text}>{count}</p>
    </div>
    )
}

export default Counter;