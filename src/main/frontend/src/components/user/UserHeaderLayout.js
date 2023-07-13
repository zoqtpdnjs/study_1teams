import React from 'react'
import UserTopLayout from './UserTopLayout';
import UserContainer from './UserContainer';

const UserHeaderLayout = () => {
    return (
        <div id="wrap" class="thema_aqua">
            <UserTopLayout/>
            <UserContainer/>
        </div>
    )
}

export default UserHeaderLayout;