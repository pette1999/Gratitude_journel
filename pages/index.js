import Head from 'next/head'
import Greeting from '../components/Greetings'
import History from '../components/History'
import Input from '../components/Input'
import {useState} from 'react'

export default function Home() {
  const [user, setUser] = useState (
    {
      "name": "Peter",
      "email": "haichen@chapman.edu",
    }
  )
  const [gratitudes, setGratitudes] = useState ([])
  const [hasSubmittedToday, setHasSubmittedToday] = useState (false)

  const addGratitude = (entry) => {
    let newGratitudes = [...gratitudes, entry] //... deconstruct the gratitudes array into items
    setGratitudes(newGratitudes)
    setHasSubmittedToday(true)
  }

  return (
    <div className="bg-gray-700 min-h-screen min-w-screen">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="red container mx-auto max-w-prose px-4">
        <Greeting 
          user = {user}
          gratitudes = {gratitudes}
          hasSubmittedToday = {hasSubmittedToday}
        ></Greeting>
        <div className="spacer"></div>
        {
          !hasSubmittedToday && <Input handleSubmit={addGratitude}></Input>
        }
        <div className="spacer"></div>
        {
          (gratitudes.length > 0) && (
            <History gratitudes={gratitudes}></History>
          )
        }
      </main>
      <style jsx>{`
        .spacer {
          height: 20px;
        }
      `}</style>
    </div>
  )
}
