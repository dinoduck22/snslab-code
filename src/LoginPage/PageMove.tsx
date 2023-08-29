import {Routes, Route} from "react-router-dom";
import SignUp from "../SignUpPage/SignUp";

function PageMove() {
    return(
        <div>
            <Routes>
                <Route path={'../SignUpPage/SignUp'} element={<SignUp />}></Route>
            </Routes>
        </div>
    );
}

export default PageMove;