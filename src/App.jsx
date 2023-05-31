import { CarrierList } from "./components/CarrierList"
import { Navbar } from "./components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios";


function App() {

  const [carriersData, setCarriersData] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8080/carriers')
      .then(response => {
        setCarriersData(response.data)
      })

  }, [])


  return (
    <>
      <Navbar></Navbar>
      <CarrierList items={carriersData} title={"Transportistas"}></CarrierList>
    </>

  )
}

export default App
