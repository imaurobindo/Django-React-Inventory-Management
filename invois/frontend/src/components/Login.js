import React, { Component , PropTypes} from "react";
import CSRFToken from './csrftoken';








export default function Login() {
    return (
        
        <>


            <>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Welcome to InvoStocks</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
                    crossOrigin="anonymous"
                />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            '\n        .bd-placeholder-img {\n            font-size: 1.125rem;\n            text-anchor: middle;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            user-select: none;\n        }\n\n        @media (min-width: 768px) {\n            .bd-placeholder-img-lg {\n                font-size: 3.5rem;\n            }\n        }\n\n        .b-example-divider {\n            width: 100%;\n            height: 3rem;\n            background-color: rgba(0, 0, 0, .1);\n            border: solid rgba(0, 0, 0, .15);\n            border-width: 1px 0;\n            box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n        }\n\n        .b-example-vr {\n            flex-shrink: 0;\n            width: 1.5rem;\n            height: 100vh;\n        }\n\n        .bi {\n            vertical-align: -.125em;\n            fill: currentColor;\n        }\n\n        .nav-scroller {\n            position: relative;\n            z-index: 2;\n            height: 2.75rem;\n            overflow-y: hidden;\n        }\n\n        .nav-scroller .nav {\n            display: flex;\n            flex-wrap: nowrap;\n            padding-bottom: 1rem;\n            margin-top: -1px;\n            overflow-x: auto;\n            text-align: center;\n            white-space: nowrap;\n            -webkit-overflow-scrolling: touch;\n        }\n\n        .btn-bd-primary {\n            --bd-violet-bg: #712cf9;\n            --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n\n            --bs-btn-font-weight: 600;\n            --bs-btn-color: var(--bs-white);\n            --bs-btn-bg: var(--bd-violet-bg);\n            --bs-btn-border-color: var(--bd-violet-bg);\n            --bs-btn-hover-color: var(--bs-white);\n            --bs-btn-hover-bg: #6528e0;\n            --bs-btn-hover-border-color: #6528e0;\n            --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n            --bs-btn-active-color: var(--bs-btn-hover-color);\n            --bs-btn-active-bg: #5a23c8;\n            --bs-btn-active-border-color: #5a23c8;\n        }\n\n        .bd-mode-toggle {\n            z-index: 1500;\n        }\n\n        html,\n        body {\n            height: 100%;\n        }\n\n        body {\n            display: flex;\n            align-items: center;\n            padding-top: 40px;\n            padding-bottom: 40px;\n            background-color: #f5f5f5;\n        }\n\n        .form-signin {\n            max-width: 330px;\n            padding: 15px;\n        }\n\n        .form-signin .form-floating:focus-within {\n            z-index: 2;\n        }\n\n        .form-signin input[type="email"] {\n            margin-bottom: -1px;\n            border-bottom-right-radius: 0;\n            border-bottom-left-radius: 0;\n        }\n\n        .form-signin input[type="password"] {\n            margin-bottom: 10px;\n            border-top-left-radius: 0;\n            border-top-right-radius: 0;\n        }\n    '
                    }}
                />
                {/* Custom styles for this template */}
                <link href="" rel="stylesheet" />
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                    <symbol id="check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </symbol>
                    <symbol id="circle-half" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                    </symbol>
                    <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                    </symbol>
                    <symbol id="sun-fill" viewBox="0 0 16 16">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </symbol>
                </svg>
                <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
                    <button
                        className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                        id="bd-theme"
                        type="button"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        aria-label="Toggle theme (auto)"
                    >
                        <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
                            <use href="#circle-half" />
                        </svg>
                        <span className="visually-hidden" id="bd-theme-text">
                            Toggle theme
                        </span>
                    </button>
                    <ul
                        className="dropdown-menu dropdown-menu-end shadow"
                        aria-labelledby="bd-theme-text"
                    >
                        <li>
                            <button
                                type="button"
                                className="dropdown-item d-flex align-items-center"
                                data-bs-theme-value="light"
                                aria-pressed="false"
                            >
                                <svg
                                    className="bi me-2 opacity-50 theme-icon"
                                    width="1em"
                                    height="1em"
                                >
                                    <use href="#sun-fill" />
                                </svg>
                                Light
                                <svg className="bi ms-auto d-none" width="1em" height="1em">
                                    <use href="#check2" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            
                            <button
                                type="button"
                                className="dropdown-item d-flex align-items-center"
                                data-bs-theme-value="dark"
                                aria-pressed="false"
                            >
                                <svg
                                    className="bi me-2 opacity-50 theme-icon"
                                    width="1em"
                                    height="1em"
                                >
                                    <use href="#moon-stars-fill" />
                                </svg>
                                Dark
                                <svg className="bi ms-auto d-none" width="1em" height="1em">
                                    <use href="#check2" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="dropdown-item d-flex align-items-center active"
                                data-bs-theme-value="auto"
                                aria-pressed="true"
                            >
                                <svg
                                    className="bi me-2 opacity-50 theme-icon"
                                    width="1em"
                                    height="1em"
                                >
                                    <use href="#circle-half" />
                                </svg>
                                Auto
                                <svg className="bi ms-auto d-none" width="1em" height="1em">
                                    <use href="#check2" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
                <main className="form-signin w-100 m-auto">
                    <form method="post" action="loginauth">
                        <CSRFToken />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                name="username"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">Username/Email</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                name="password"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" defaultValue="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">
                            Sign in
                        </button>
                        <p className="mt-5 mb-3 text-body-secondary">© 2017-2023</p>
                    </form>
                </main>
            </>



        </>

    )
}