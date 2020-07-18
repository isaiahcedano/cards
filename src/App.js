import React, {Component, Fragment} from 'react';
import CardList from "./CardList";
import {addUser, deleteUser, duplicateUser} from "./Database";
import {Database} from "./Database";
import Forms from "./Forms";
import SuperExpressive from 'super-expressive'

class App extends Component {

    state = {
		database:Database
        }

    onAddUserSubmit = (data) => {
        addUser(data.AddUserName, {age:Number(data.age), email:data.email})
        this.setState({
            database:Database
        })
        document.querySelectorAll(".AddUserFormInput").forEach(ele => {
            ele.value = ""
        })
    }

    onDeleteUserSubmit = (data) => {
        deleteUser(data.DeleteUserID)
        this.setState({
            database:Database
        })
        document.querySelectorAll(".DeleteUserFormInput").forEach(ele => {
            ele.value = ""
        })
    }

    onDuplicateUserSubmit = (data) => {
        duplicateUser(data.DuplicateUserID)
        this.setState({
            database:Database
        })
        document.querySelectorAll(".DuplicateUserFormInput").forEach(ele => {
            ele.value = ""
        })
    }

    render() {
      return (
          <Fragment>
              <Forms onAddUserAction={this.onAddUserSubmit}
                     onDeleteUserAction={this.onDeleteUserSubmit}
                     onDuplicateUserAction={this.onDuplicateUserSubmit}/>
              <CardList cardDatabase={this.state.database}/>
          </Fragment>
      )
    }
}

export default App;
