import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friends extends React.Component {
    state = {
        friends: [],
        createFriend: { name: '', age: '', email: '', id: Date.now() }
    };

    getFriends = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(response => {
            this.setState({
                friends: response.data
            })
        })
        .catch(error => console.log(error))
    };

    newFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', this.state.createFriend)
        .then(response => {
            this.setState({
                friends: response.data
            })
        })
        .catch(error => console.log(error))
    };

    handleChange = e => {
        this.setState({
            createFriend: {
                ...this.state.createFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    componentDidMount() {
        this.getFriends();
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Make a Friend</h1>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        placeholder="name"
                        name="name"
                    />
                    <input
                        type="text"
                        onChange={this.handleChange}
                        placeholder="age"
                        name="age"
                    />
                    <input
                        type="text"
                        onChange={this.handleChange}
                        placeholder="email"
                        name="email"
                    />
                    <button onClick={this.makeFriend}>Make a Friend</button>
                </form>
                <div>
                    <h2>Friends List</h2>
                    {this.state.friends.map(friend => (
                        <div>
                            <h2>{friend.name}</h2>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                            <button onClick={e => this.deleteFriend(e, friend.id)}>SeeYa</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Friends;