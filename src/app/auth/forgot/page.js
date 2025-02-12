"use client";

import Link from "next/link";

export default function ForgotPassword() {

   async function formSubmit(e){
    e.preventDefault();
    alert("OK")
  }

  return (
    <>
      <div className="container m-5 p-5">
        <main className="form-signin w-50 m-auto card p-3">
          <form method="post" className="text-center">
            <h1 className="h5 mb-3 fw-normal">Forgot Password</h1>
            <div className="form-floating mt-1">
              <input
                type="email"
                className="form-control form-control-sm"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <button className="btn btn-primary w-50 border rounded-0 mt-3 py-2" onClick={(e)=>formSubmit(e)} type="submit">
             Forgot
            </button>
          </form>

          <p className="text-body-secondary mt-2">Back to : <Link href="/auth/login">login</Link></p>
        </main>
      </div>
      
    </>
  );
}
