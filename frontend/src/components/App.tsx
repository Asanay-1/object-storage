import '../index.css'


function App() {


  return (
    <>
      <button className="send-request" onClick={SendReq}>SEND REQUEST</button>
    </>
  )
}

async function SendReq() {
  const req = await fetch("http://localhost:8080/api/health")

  console.log(req)
}

export default App
