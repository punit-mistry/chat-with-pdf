/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IBxzggffX9b
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className='flex justify-center flex-col items-center' >
      <div className=" py-12">
        <div className="container flex flex-col gap-4 items-center justify-center px-4 md:px-6 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Chat with PDF</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Connect with your team and share feedback on documents with the integrated PDF viewer.
            </p>
          </div>
          <div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-50 hover:text-gray-50   dark:focus-visible:ring-gray-300"
              href="/chat-pdf"
            >
              Start Chat
            </Link>
          </div>
        </div>
      </div>
      <section className=" py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col gap-4 px-4 md:px-6">
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Real-time communication</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Keep the conversation flowing with instant messaging and notifications.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Secure file sharing</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Share files with confidence using end-to-end encryption and built-in virus scanning.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Efficient collaboration</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Work together in real-time, edit documents, and make decisions without leaving the chat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t w-screen flex items-center justify-center p-5 border-gray-200 dark:border-gray-400">
        <div>
            Made By Punit Mistry
        </div>
      </div>
    </div>
  )
}

