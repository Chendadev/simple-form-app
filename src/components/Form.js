import { useState } from "react";

export default function Form({ email, password, setEmail, setPassword, goNext, setGoNext }) {
    const handleEmailChange = (event) => {
        // const value = event.target.value;
        const value = event.target.value;
        setEmail(value);
        /*   console.log("email change de RIEN à taping, email ", email);
          /* POURQUOI ON a un render sans clg le premier caractere de l'email ?*/
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        /*         console.log("Password change de RIEN à taping, password ", password);
                /* POURQUOI ON a un render sans clg le premier caractere du mdp ?*/
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            // "handle Submit methode : email envoyé :",
            // email,
            // "mdp envoyé :",
            // password

        );
    };
    return (
        <>
            <div className="container">

                <div className="form-signUp">
                    <h1>Register Form 🖋</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="group-form">
                            <h2>Name</h2>
                            <input type="text"
                                name="name"
                                placeholder="Nicolas Durand" />
                        </div>
                        <div className="group-form">
                            <h2>Email</h2>
                            <input type="text"
                                name="email"
                                value={email}
                                placeholder="n.durand@gmail.com"
                                onChange={handleEmailChange} />

                        </div>
                        <div className="group-form">
                            <h2>Password</h2>
                            <input type="password"
                                name="password"
                                value={password}
                                placeholder="iEh5£oo02S"
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="group-form">
                            <h2>Confirm your password</h2>
                            <input type="password"
                                name="confirm-password"
                                placeholder="iEh5£oo02S" />
                        </div>
                        <input className="submit-butt"
                            type="submit"
                            value="Register"
                            onClick={() => { setGoNext(true) }}
                        />
                    </form>
                </div>

            </div>
        </>
    )
}
