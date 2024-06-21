import { NextPage } from 'next';
import React from 'react';
import FormLogin from './_component/FormLogin';

const LoginPage: NextPage = () => {
  return (
    <main>
      <section className="fixed rounded-2xl bg-white flex flex-col items-center px-5 py-10 w-1/3 min-w-[330px] max-w-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl">
        <article>
          <h5>
            <b>창의력</b>을 키우는
            <br />
            똑똑한 백오피스
          </h5>
          <h1>KidzTales</h1>
        </article>
        <FormLogin />
      </section>
    </main>
  );
};

export default LoginPage;
