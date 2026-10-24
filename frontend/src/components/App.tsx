import '../index.css'

function App() {


  return (
    <>
      <button className="send-request" onClick={SendRequest}>SEND REQUEST</button>
    </>
  )
}
function SendRequest() {
    fetch('')
}
export default App
