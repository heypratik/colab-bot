import Image from 'next/image'
import { Inter } from 'next/font/google'
import {FaRobot} from 'react-icons/fa'
import {RiSendPlaneFill} from 'react-icons/ri'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [loading, setLoading] = useState(false)
  const [currentInput, setCurrentInput] = useState('')
  const [answerFromBot, setAnswerFromBot] = useState('')

  function sendQuestion() {
    setLoading(true)
    setCurrentInput('')

    const postData = {
      query: currentInput,
      chattingId: 'ZmlsZTovLy9DOi9Vc2Vycy9wcmF0aS9Eb3dubG9hZHMvQ29sYWJCb3RQREYuaHRtbA',
      text: "text",
      APIKEYFROMSTORAGE: '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',
    };
    
    fetch("https://chat-over-docs.vercel.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        setAnswerFromBot(data.result.text)
        // handle response data here
        console.log(data.result.text);
        setLoading(false)
      })
      .catch((error) => {
        // handle errors here
        console.error(error);
        setLoading(false)
      });
      setLoading(false)
  }
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-14 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
         <code className="font-mono font-bold flex items-center"><FaRobot fontSize={25} className='mr-3'/> Colab Bot</code>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.joincolab.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="https://assets.website-files.com/5f5e3428a1c1478d81e71075/60519b70acd92466ff6b8857_Co.Lab%20Logo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className="relative flex flex-col max-w-5xl place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[50px]">
        <h1 className='font-bold text-gray-800 dark:text-white z-10 text-4xl'>Hi! How can I help you?</h1>
        {!loading && answerFromBot && <p className="mt-10 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">{answerFromBot}</p>}
      </div>
      <div className="z-100 w-7xl ">
        
      <div className="z-100 w-5xl items-center justify-center font-mono text-sm lg:flex mb-10">

<div className=' z-1000000 flex items-center justify-between max-w-5xl w-full bg-gray-200 dark:bg-neutral-800/30 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
<input onChange={(e) => setCurrentInput(e.target.value)} value={currentInput} type='text' placeholder='Enter your message here' className='z-100 w-full px-5 py-4 bg-transparent focus:outline-none '/>
<button disabled={loading} onClick={sendQuestion}><RiSendPlaneFill fontSize={25} className='mx-5'/></button>
</div>
</div>

<div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
<a
  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  target="_blank"
  rel="noopener noreferrer"
>
  <h2 className={`mb-3 text-2xl font-semibold`}>
    Docs{' '}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      -&gt;
    </span>
  </h2>
  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    Find in-depth information about Next.js features and API.
  </p>
</a>

<a
  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  target="_blank"
  rel="noopener noreferrer"
>
  <h2 className={`mb-3 text-2xl font-semibold`}>
    Learn{' '}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      -&gt;
    </span>
  </h2>
  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    Learn about Next.js in an interactive course with&nbsp;quizzes!
  </p>
</a>

<a
  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  target="_blank"
  rel="noopener noreferrer"
>
  <h2 className={`mb-3 text-2xl font-semibold`}>
    Templates{' '}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      -&gt;
    </span>
  </h2>
  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    Discover and deploy boilerplate example Next.js&nbsp;projects.
  </p>
</a>

<a
  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  target="_blank"
  rel="noopener noreferrer"
>
  <h2 className={`mb-3 text-2xl font-semibold`}>
    Deploy{' '}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      -&gt;
    </span>
  </h2>
  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    Instantly deploy your Next.js site to a shareable URL with Vercel.
  </p>
</a>
</div>
      </div>
    </main>
  )
}
