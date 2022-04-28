import React from 'react'

export default function Form() {
    return (
        <>
            <div className="form-signUp">
                <h1>Register Form 🖋</h1>
                <form>
                    <div className="group-form">
                        <h2>Name</h2>
                        <input type="text"
                            placeholder="Nicolas Durand" />
                    </div>
                    <div className="group-form">
                        <h2>Email</h2>
                        <input type="text"
                            placeholder="n.durand@gmail.com" />
                    </div>
                    <div className="group-form">
                        <h2>Password</h2>
                        <input type="password"
                            placeholder="iEh5£oo02S" />
                    </div>
                    <div className="group-form">
                        <h2>Confirm your password</h2>
                        <input type="password"
                            placeholder="iEh5£oo02S" />
                    </div>
                    <div className="submit-butt">
                        Register
                    </div>
                </form>
            </div>
        </>
    )
}
