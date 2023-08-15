import Head from "next/head"
import { useState } from "react"


export default function Home() {
  const [addCookies, setQuestion] = useState([])
  const submitHandler=(event) =>{
    event.preventDefault()
    const cookies={
      id: event.target.input0.value.length,
      location: event.target.input0.value,
      minCustomersPerHour: parseInt(event.target.input1.value),
      maxCustomersPerHour: parseInt(event.target.input2.value),
      avgCookiesPerSale: parseFloat(event.target.input3.value),
    };
    setQuestion([...addCookies,cookies])
    event.target.reset();

    
  }



  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex flex-col items-center flex-grow py-4 space-y-8">
          <Form handler={submitHandler} />
          {addCookies.length === 0 ? (
            <p className="p-2 font-medium text-gray-500 ">
              Report Table Coming Soon...
            </p>
          ) : (
            <pre className="p-2 mt-4 bg-gray-200">
              {JSON.stringify(addCookies, null, 2)}
            </pre>
          )}

        </main>
        <footer className="p-6 mt-8 text-2xl font-medium text-gray-800 bg-green-500 ">

          &copy; 2023

        </footer>

      </div>


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
    <form className="flex flex-col w-3/4 p-8 mx-auto my-4 bg-green-300 rounded-md h-200" onSubmit={props.handler}>

      <h1 className="mb-4 text-3xl font-semibold text-center">Cookie Stand Admin</h1>
      <div className="flex w-full">
        <label className="px-2 py-1 text-2xl text-black-50">Location</label>
        <input name='input0' className="flex-auto pl-1" />
      </div>


      <div className="flex grid w-1/2 w-full grid-cols-4 gap-4 p-2 mx-auto my-4 space-x-4">
        <div className="flex flex-col">
          <label className="px-2 py-1 text-2xl text-center text-black-50">Minimum Customers Per Hour</label>
          <input name='input1' className="flex-auto h-8 pl-1" />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 text-2xl text-center text-black-50">Maxmum Customers Per Hour</label>
          <input name='input2' className="flex-auto h-8 pl-1" />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 text-2xl text-center text-black-50">Average Cookies Per Sale</label>
          <input name='input3' className="flex-auto h-8 pl-1" />
        </div>
        <div className="flex ">
        <button className="px-6 py-3 text-2xl bg-green-500 w-80 h-28 text-black-50">Create</button>


        </div>
      </div>



    </form >
  )
}
