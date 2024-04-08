import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersListPage extends Component {
    componentDidMount() {
        // Dispatch the action to fetch users when the component mounts
        this.props.fetchUsers();
    }

  

    renderUsers() {
        const { users } = this.props;
        if (!Array.isArray(users)) {
            console.warn('Users is not an array', users);
            return null; // Or any fallback UI
        }

      
    
        return users.map(user => {
            console.log(user);
            return <li>{user.name}</li>; // Ensure users have a unique 'id'
        });
        // Render a list of users
        // return this.props.users ? this.props.users.map(user => {
        //     console.log(user);
        //     return <li key={user.id}>Hello</li>; // Assuming each user has a unique 'id'
        // }) : <div>Hello</div>;
    }

    render() {
        console.log(this.props.users, "show users value")
        return (
            <div>
                <div>Here's a big list of users:</div>
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

// mapStateToProps is used to select the part of the data from the store that the connected component needs.
// It's called every time the store state changes.
function mapStateToProps(state) {
    return { users: state.users };
}

function loadData (store){
    return store.dispatch(fetchUsers());
    // console.log("I am trying to load some data")
}

// connect() connects the component to the Redux store.
// It provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store.
export default {loadData, component: connect(mapStateToProps, { fetchUsers })(UsersListPage)}

// export { loadData }
