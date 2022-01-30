import './PortionCalculation.scss';

type Props = {
    number: number,
    minuOperation: React.MouseEventHandler<HTMLButtonElement>,
    plusOperation: React.MouseEventHandler<HTMLButtonElement>
  }

const PortionCalculation = ({ number, minuOperation, plusOperation }: Props) => {
    return (
        <div className="portion-calculation">
            <div className="portion-calculation__inner">
                <button onClick={minuOperation} className="portion-calculation__button">–</button>
                <p className="portion-calculation__text">
                    <span className="portion-calculation__portion">{number} </span>
                    Portionen
                </p>
                <button onClick={plusOperation} className="portion-calculation__button">+</button>
            </div>
        </div>
    );
};

export default PortionCalculation;