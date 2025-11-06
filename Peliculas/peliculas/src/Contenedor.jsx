import Interprete from './Interprete.jsx';    

function Contenedor({ children }) {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
        { children }
      </div>
    </>
  )
}

export default Contenedor
