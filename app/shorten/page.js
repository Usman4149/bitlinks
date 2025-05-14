"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
const Shorten = () => {
  const [url, seturl] = useState('')
  const [shorturl, setshorturl] = useState(url)
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='flex flex-col justify-center mx-auto items-center my-8 max-w-lg'>
      <h1 className='font-bold text-2xl'>Genrate Shortern URL</h1>
      <div className='flex flex-col bg-slate-300 p-10 my-3 rounded-lg gap-2 w-1/1 focus:outline-2' >
        <input className='py-1 gap- px-3 focus:outline-blue-500 rounded-lg ' type="text" placeholder='Enter your URL' value={url} onChange={e => { seturl(e.target.value) }} />

        <input className='py-2 gap- px-3 focus:outline-blue-500 rounded-lg ' type="text" placeholder='Enter perfered Shorter URL' value={shorturl} onChange={e => { setshorturl(e.target.value) }} />

        <button onClick={generate} className='bg-blue-500 hover:bg-blue-400 cursor-pointer text-white rounded-lg my-5 py-2'>Generate</button>
      {generated && <><span className='font-bold text-lg'>Your Short Url</span><code>
        <Link target='_blank'
          href={generated}>{generated}</Link>
      </code> </>}
      </div>


    </div>
  )
}

export default Shorten
