import React, { useState } from 'react';
import styles from "./styles.scss";
import { ReactComponent as GoogleIcon } from "../../Assets/GoogleIcon.svg";
import { ReactComponent as FacebookIcon } from "../../Assets/FacebookIcon.svg";

export const RegistrationForm = ({ validateInput, validateSubmit, handleChange, userData, validatelogin }) => {

    const [isLogin, setisLogin] = useState(true)

    return (
        <>
            {isLogin ? <div className="registration-form">
                <p className="registration-form__title">login</p>

                <div className="registration-form__input">
                    <p className="registration-form__input-title">
                        Email
                </p>
                    <input id="input-email" placeholder="Enter your email" type="text" className="registration-form__input-input"
                        name='email'
                        onChange={handleChange}
                        value={userData.email}
                        onBlur={validatelogin}

                        onFocus={({ target }) => {
                            target.className = 'registration-form__input-input'
                            target.parentNode.removeAttribute('id')
                        }}

                    />
                </div>

                <div className="registration-form__input">
                    <p className="registration-form__input-title">
                        Password
                    </p>
                    <input id="input-password" placeholder="Enter your password" type="password" className="registration-form__input-input"
                        name='password'
                        onChange={handleChange}
                        value={userData.password}
                        onBlur={validatelogin}
                        onFocus={({ target }) => {
                            target.className = 'registration-form__input-input'
                            target.parentNode.removeAttribute('id')
                        }}
                    />
                </div>



                <p className="registration-form__rights">
                    By creating an account you agree to the website <u> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="blank"> terms and conditions</a>
                    </u> and our  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="blank"><u>privacy notice.</u></a>
                </p>
                <button className="registration-form__btn-create btn"
                    onClick={validatelogin}
                >  LOGIN</button>
                <div className="registration-form__login">
                    <p>Don't have an account?</p>
                    <p className="registration-form__login-login" onClick={() => setisLogin(false)}><u>Create an account</u></p>
                </div>
                <div className="registration-form__hrs">
                    <div className="registration-form__hrs-line"></div>
                    <p>or</p>
                    <div className="registration-form__hrs-line"></div>
                </div>
                <div className="registration-form__btns-login">
                    <button className="registration-form__btns-login-google btn-login">
                        <GoogleIcon className="google-icon btn-icon" />
                        <span className="with-google-title">With Google</span></button>
                    <button className="registration-form__btns-login-facebook btn-login">
                        <FacebookIcon className="facebook-icon btn-icon" />
                        <span className="with-facebook-title">With Facebook</span>
                    </button>
                </div>
            </div> :



                // ФОРМА РЕГИСТРАЦИИ
                <div className="registration-form">
                    <p className="registration-form__title">create an account</p>
                    <div className="registration-form__input">
                        <p className="registration-form__input-title">
                            Full name
                </p>
                        <input placeholder="Enter your First and Last name" type="text" className="registration-form__input-input"
                            name='name'
                            onChange={handleChange}
                            value={userData.name}
                            onBlur={validateInput}
                            onFocus={({ target }) => {
                                target.className = 'registration-form__input-input'
                                target.parentNode.removeAttribute('id')
                            }}
                        />

                    </div>
                    <div className="registration-form__input">
                        <p className="registration-form__input-title">
                            Email
                </p>
                        <input id="input-email" placeholder="Enter your email" type="text" className="registration-form__input-input"
                            name='email'
                            onChange={handleChange}
                            value={userData.email}
                            onBlur={validateInput}
                            onFocus={({ target }) => {
                                target.className = 'registration-form__input-input'
                                target.parentNode.removeAttribute('id')
                            }}

                        />
                    </div>
                    <div className="registration-form__input">
                        <p className="registration-form__input-title">
                            Password <span className="registration-form__input-title--gray">(min 6 char)</span>
                        </p>
                        <input id="input-password" placeholder="Enter your password" type="password" className="registration-form__input-input"
                            name='password'
                            onChange={handleChange}
                            value={userData.password}
                            onBlur={validateInput}
                            onFocus={({ target }) => {
                                target.className = 'registration-form__input-input'
                                target.parentNode.removeAttribute('id')
                            }}
                        />
                    </div>
                    <p className="registration-form__rights">
                        By creating an account you agree to the website <u> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="blank"> terms and conditions</a>
                        </u> and our  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="blank"><u>privacy notice.</u></a>
                    </p>
                    <button className="registration-form__btn-create btn"
                        onClick={validateSubmit}
                    >  CREATE AN ACCOUNT</button>
                    <div className="registration-form__login">
                        <p>Have an account?</p>
                        <p
                            onClick={() => setisLogin(true)}
                            className="registration-form__login-login "><u>Login</u></p>
                    </div>
                    <div className="registration-form__hrs">
                        <div className="registration-form__hrs-line"></div>
                        <p>or</p>
                        <div className="registration-form__hrs-line"></div>
                    </div>
                    <div className="registration-form__btns-login">
                        <button className="registration-form__btns-login-google btn-login">
                            <GoogleIcon className="google-icon btn-icon" />
                            <span className="with-google-title">With Google</span>
                            </button>
                        <button className="registration-form__btns-login-facebook btn-login">
                            <FacebookIcon className="facebook-icon btn-icon" />
                            <span className="with-facebook-title">With Facebook</span>
                            </button>
                    </div>
                </div>}

        </>
    )
}