import Head from "next/head"
import { useState } from "react"


export default function Home() {
  const [input0, setQuestion] = useState('no input !')
  function submitHandler(event) {
    event.preventDefault()
    setQuestion(event.target.input0.value)
    alert('it just craeted !')

  }
  return (
    <>
      <head>
        <title>Home</title>
      </head>
      <Header />
      <body className="flex flex-col min-h-screen">
        <main className="flex flex-col items-center py-4 space-y-8 flex-grow">
          <Form handler={submitHandler} />
          <h1 className="p-2 text-gray-500 font-medium ">Repot Table Coming soon ....</h1>

        </main>
        <footer className="p-6 mt-8 bg-green-500 text-gray-800 text-2xl font-medium ">

          &copy; 2023

        </footer>

      </body>


    </>
  )
}

function Header() {
  return (
    <header className="flex items-center justify-between p-5 bg-green-600 text-black-50">

      <h1 className="text-5xl font-medium">Cookie Stand Admin</h1>
    </header>

  )
}

function Form(props) {
  return (
    <form className="flex flex-col w-3/4 h-200 p-8 mx-auto my-4 bg-green-300 rounded-md" onSubmit={props.handler}>

      <h1 className="text-3xl font-semibold mb-4 text-center">Cookie Stand Admin</h1>
      <div className="flex w-full">
        <label className="px-2 py-1 text-black-50 text-2xl">Location</label>
        <input name='input0' className="flex-auto pl-1" />
      </div>


      <div className="grid grid-cols-4 gap-4 space-x-4 w-1/2 p-2 mx-auto my-4 flex w-full">
        <div className="flex flex-col">
          <label className="px-2 py-1 text-black-50 text-2xl text-center">Minimum Customers Per Hour</label>
          <input name='input1' className="flex-auto pl-1 h-8" />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 text-black-50 text-2xl text-center">Maxmum Customers Per Hour</label>
          <input name='input2' className="flex-auto pl-1 h-8" />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 text-black-50 text-2xl text-center">Average Cookies Per Sale</label>
          <input name='input3' className="flex-auto pl-1 h-8" />
        </div>
        <div className="flex ">
        <button className="w-80 h-28 px-6 py-3 bg-green-500 text-black-50 text-2xl">Create</button>


        </div>
      </div>



    </form >
  )
}
