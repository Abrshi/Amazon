import React from 'react'
import authcss from './auth.module.css'

function Auth() {
  return (
    <div className={authcss.div}>
      <form action="">
        <p className={authcss.signin}>Sign-in</p>
        <div className={authcss.inerdiv}>
          <label   htmlFor="email">E-mail</label><br />
          <input  type="text" /><br />
          <label htmlFor="email">Password</label><br />
          <input type="text" /><br />
          <button className={authcss.sigenin} type='submit'>Sigen in</button><br />
          <p className={authcss.p}>
            By signing you agree to the AMAZON FAKE CLONE Conditions of Lise & Sale. Please cre Our Prvacy Notice, our Cockles
          </p>
          <button className={authcss.creat}>create your Amazon Account
          </button><br />
        </div>
      </form>
    </div>

  )
}

export default Auth