import React from 'react';
import { useRouter } from 'next/router'
const Login = () => {
  const router = useRouter()
  return (
    <>
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 w-screen h-screen">
        <div className="  flex items-center justify-center flex-col gap-2 h-screen">
          <div className="text-5xl font-extrabold ">
            Revolutionize your PDFs!
          </div>
          <div className="text-2xl font-semibold">
            Chat now with your PDFs !
          </div>
          <div className="text-xl w-1/3 text-center">
            "Transform your PDF experience! Say goodbye to static documents and
            hello to dynamic conversations. Chat with your PDFs for seamless
            collaboration and interactive discussions. Elevate your document
            experience now!"
          </div>
          <div>
            <div>
              <button className="border-2 border-black py-1 px-3 rounded-lg hover:bg-black hover:text-white transition-all" onClick={() => router.push('/login')}>
                Login now{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
