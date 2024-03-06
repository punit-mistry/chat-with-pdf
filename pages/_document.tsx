import { Html, Head, Main, NextScript } from 'next/document';
import { UserProvider } from '@auth0/nextjs-auth0/client';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <UserProvider>

      <body className='bg-gradient-to-r from-rose-100 to-teal-100 '>
        <Main />
        <NextScript />
      </body>
      </UserProvider>
    </Html>
  );
}
