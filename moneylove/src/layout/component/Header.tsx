import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/store";
import { increatement } from "../../features/count";
export type RootState = ReturnType<typeof store.getState>
const Header = () =>{
    const {count} = useSelector((state :RootState) => state.count);
    const dispatch = useDispatch();
    return (
        <>
            <h3>Header</h3>
            <div className="text-3xl font-bold underline">{count}</div>
            <button onClick={() => dispatch(increatement())}>increment</button>
        </>
    )
}

export default Header