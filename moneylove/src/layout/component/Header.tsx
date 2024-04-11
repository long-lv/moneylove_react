import { store } from "../../store/store";
export type RootState = ReturnType<typeof store.getState>
const Header = () => {
    return (
        <>
            <h3>Header</h3>
        </>
    )
}

export default Header