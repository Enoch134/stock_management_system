
import React from 'react'
import { useSelector } from "react-redux";

const UserWelcome = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div>
            <h1 className="title">Dashboard for Normal Users</h1>
            <h2 className="subtitle">
                Welcome Back <strong>{user && user.name}</strong>
            </h2>
        </div>
    )
}

export default UserWelcome