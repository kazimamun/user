import React from 'react';
import users from '../../asset/data/user.json';
import UserDetails from '../UserDetails/UserDetails';

const User = () => {
    return (
        <div>
            {
                users.map(user=><UserDetails key={user.id} user={user}></UserDetails>)
            }
        </div>
    );
};

export default User;