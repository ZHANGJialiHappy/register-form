import { useSelector } from "react-redux"
import { getUser } from "../register/registerSlice"

export const Home = () => {
    const userName = useSelector(getUser).userName;

    return(
        <div>
        <h1 className="text-center">{userName}, you registered successfully, congratulation!</h1>
        </div>
    )
}