import Head from "next/head"
import Footer from "@/components/Footer"
import Form from "@/components/Form"
import Header from "@/components/Header"
import Table from "@/components/Table"
import { useState } from "react"


export default function Home() {
  const [addCookies, setQuestion] = useState([])
  const submitHandler = (event) => {
    event.preventDefault()
    const cookies = {
      id: event.target.input0.value.length,
      location: event.target.input0.value,
      minCustomersPerHour: parseInt(event.target.input1.value),
      maxCustomersPerHour: parseInt(event.target.input2.value),
      avgCookiesPerSale: parseFloat(event.target.input3.value),
    };
    setQuestion([...addCookies, cookies])
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
          <Table addCookies={addCookies}/>

        </main>
        <Footer number={addCookies}/>


      </div>


    </>
  )
}




