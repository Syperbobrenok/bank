import {useAppSelector} from "../app/hooks.ts";

const Balance = () => {
    const balance = useAppSelector(state => state.balance);
    const quote = useAppSelector(state => state.quote);

    return (
        <div className={'text-center text-uppercase'}>
            <h1 className={'font-bold text-8xl text-[gold]'}>Iron Bank of Braavos</h1>
            <h3 className={'text-5xl text-[whitesmoke]'}>{quote}</h3>
            <h2 className={'text-7xl text-[firebrick]'}>Balance = {balance}</h2>
        </div>
    )
}

export default Balance;