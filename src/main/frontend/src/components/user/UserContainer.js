import React from 'react';
import UserContainerHeader from './UserContainerHeader';
import UserContainerMain from './UserContainerMain';

const UserContainer = () => {
    return (
        <div id="container">
            <UserContainerHeader/>
            <UserContainerMain/>
        </div>
    )
}

export default UserContainer;