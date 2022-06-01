import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav'
import Main from './components/Main'
import data from './components/data'

function App() {

  const column = data.map((item) => {
    
      return (
      <>
        <Main 
          key={item.id}
          item={item}
        />
  </>
      )
  })

  return (
    <>
    <Nav />
    {column}
    
    </>
  )
}

export default App