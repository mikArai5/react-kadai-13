import { useState } from "react";

type useCountNum = {
    num: number;
}

export const useCountNum = () => {
    const [num, setNum] = useState(0);

    const onClickPlusButton = () => {
        setNum(num + 1);
        if (10 <= num) {
            setNum(10);
        }
    };

    const onClickMinusButton = () => {
        setNum(num - 1);
        if (num <= 0) {
            setNum(0);
        }
    };

    return { num, onClickMinusButton, onClickPlusButton };
}