"use client";

import Link from "next/link";

export default function Register() {

   async function formSubmit(e){
    e.preventDefault();
    alert("OK")
  }

  return (
    <>
      <div className="container m-5 p-5">
        <main className="form-signin w-50 m-auto card p-3">
          <form method="post" className="text-center">
            <h1 className="h5 mb-3 fw-normal">Sign Up</h1>
            <div className="form-floating">
              <input
                type="text"
                className="form-control form-control-sm"
                id="floatingInput2"
                placeholder="User Name"
              />
              <label htmlFor="floatingInput2">User Name</label>
            </div>
            <div className="form-floating mt-1">
              <input
                type="email"
                className="form-control form-control-sm"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-1">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mt-1">
              <input
                type="password"
                className="form-control"
                id="floatingPassword2"
                placeholder="Confirm Password"
              />
              <label htmlFor="floatingPassword2">Confirm Password</label>
            </div>

            <button className="btn btn-primary w-50 border rounded-0 mt-3 py-2" onClick={(e)=>formSubmit(e)} type="submit">
              Sign in
            </button>
          </form>

          <p className="text-body-secondary mt-2">Already register ? <Link href="/auth/login">login</Link></p>
        </main>
      </div>
      <style jsx>{`
        .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }

    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
        font-size: 3.5rem;
        }
    }

    .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    }

    .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
    }

    .bi {
        vertical-align: -.125em;
        fill: currentColor;
    }

    .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
    }

    .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
    }

    .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
    }

    .bd-mode-toggle {
        z-index: 1500;
    }

    .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
    }
    `}</style>
    </>
  );
}
