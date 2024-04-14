import { useCountNum } from '../hooks/useCountNum';
import './Button.css';


export const Button: React.FC = () => {
    const { num, onClickMinusButton, onClickPlusButton } = useCountNum();


    return (
        <>
        <p className="count_num">{num}</p>
        <button onClick={onClickMinusButton}>-</button>
        <button onClick={onClickPlusButton}>+</button>
        </>
    );
};