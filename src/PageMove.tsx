import {Routes, Route} from "react-router-dom";
import SignUp from "./SignUpPage/SignUp";
import Login from "./LoginPage/Login";

function PageMove() {
    return(
        <Routes>
            {/*디폴트*/}
            <Route path={'/'} element={<Login />}></Route>
            {/*회원가입*/}
            <Route path={'/SignUpPage/SignUp'} element={<SignUp />}></Route>
            {/*로그인*/}
            <Route path={'/LoginPage/Login'} element={<Login />}></Route>
        </Routes>
    );
}

export default PageMove;