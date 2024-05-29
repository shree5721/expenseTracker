import './App.css'
import Form from './Components/Form/Form.jsx'
import Graph from './Components/Graph/Graph.jsx'

function App() {

  return (
    <>
    <div className="header">
      <h1>Expense Tracker Application</h1>
    </div>
      <div className="container">
        <Graph/>
        <Form/>
      </div>
    </>
  )
}

export default App
