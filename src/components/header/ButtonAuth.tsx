import React from 'react';
import {Avatar, Button, Stack} from "@mui/material";
import {green} from "@mui/material/colors";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../configs/store";
import {logout} from "../../slice/auth.slice";

function ButtonAuth() {
    const auth = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch();

    const logoutHandle = () => {
        dispatch(logout());
    }

    return (
        <Stack direction={"row"} gap={1} justifyContent={"center"} alignItems={"center"}>
            <Avatar sx={{
                backgroundColor: green[500]
            }}>
            </Avatar>
            <Stack direction={"column"}>
                {auth.user ? (
                    <>
                        <Link className={"text-decoration-none"} to={"#"}>
                            <Button>{auth.user.fullName}</Button>
                        </Link>
                        <Button onClick={logoutHandle} className={"justify-content-start w-100"}>Đăng xuất</Button>
                    </>
                ) : (
                    <>
                        <Link className={"text-decoration-none"} to={"/login"}>
                            <Button>Đăng nhập</Button>
                        </Link>
                        <Link className={"text-decoration-none"} style={{
                            fontSize: "15px"
                        }} to={"/register"}>
                            <Button className={"justify-content-start w-100"}>Đăng ký</Button>
                        </Link>
                    </>
                )}

            </Stack>
        </Stack>
    )
        ;
}

export default ButtonAuth;