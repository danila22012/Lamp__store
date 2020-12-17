import React, { Component } from 'react';

import { connect } from 'react-redux'
import { RegistrationForm } from "../../Components/RegistrationForm/RegistrationForm";
import { addUser, handleFormChange } from "../../Actions/Actions";

class UserRegistration extends Component {


    handleChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.props.handleFormChange({
            [name]: value,
        });
    };
    handleSubmit = () => {

        this.props.addUser(this.props.userData) //сетим в ридакс
        this.props.handleFormChange({ // скидываем значения
            name: "",
            email: "",
            password: ""

        })

    };
    validateSubmit = () => {

       
        if (this.props.userData.email == this.props.users.users.map(el => el.email)) {

            alert('This email has already been taken')
            return
        }

        localStorage.setItem(this.props.userData.email, JSON.stringify(this.props.userData));
        alert('success');
        this.handleSubmit()
    }
    validatelogin = (e) => {

        let target = e.target
        let value = target.value
        let name = target.name


        
        if (localStorage.hasOwnProperty(this.props.userData.email)) {
            let res = JSON.parse(localStorage.getItem(this.props.userData.email))
            if (res.password === this.props.userData.password) {
                console.log('matched pass');
                alert('succes, you logged in system')
            }
            else if (name == 'password') {
                target.className = 'registration-form__input-input registration-form__input-input--wrong'
                target.parentNode.id = 'input-password'
                return
            }
        }
        else if (name == 'email') {
            target.className = 'registration-form__input-input registration-form__input-input--wrong'
            target.parentNode.id = 'input-email'
            return
        }
        if(name == 'password'){
            if ([...value].length < 6) {

                target.className = 'registration-form__input-input registration-form__input-input--wrong'
                target.parentNode.id = 'input-password'
                return
            }
        }
       
        
        
    }
    validateInput = (e) => {

        let target = e.target
        let value = target.value
        let name = target.name

        console.log(name);

        if (name === 'name') {

            if (!value.includes(" ")) {

                target.className = 'registration-form__input-input registration-form__input-input--wrong'
                target.parentNode.id = 'input-name'
                return
            }
        }
        // доделать следующю проверкку
        else if (name === 'email') {
            if (!value.includes("gmail.com")) {

                target.className = 'registration-form__input-input registration-form__input-input--wrong'
                target.parentNode.id = 'input-email'
                return
            }
        }
        else if (name === 'password') {
            if ([...value].length < 6) {

                target.className = 'registration-form__input-input registration-form__input-input--wrong'
                target.parentNode.id = 'input-password'
                return
            }

        }


    }

    render() {

        return (
            <RegistrationForm

                validateInput={this.validateInput}
                validateSubmit={this.validateSubmit}
                validatelogin={this.validatelogin}
                handleChange={this.handleChange}
                userData={this.props.userData}


            />
        );
    }
}
const mapStateToProps = (state) => ({
    userData: state.handleUserReducer,
    users: state.addUserReducer
})
const mapDispatchToProps = (dispatch) => ({
    addUser: payload => dispatch(addUser(payload)),
    handleFormChange: payload => dispatch(handleFormChange(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration) 