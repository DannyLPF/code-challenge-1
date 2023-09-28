import ColourInput from "./ColourInput"

const Content = ({ newColour, setNewColour}) => {
  return (
    <main>
      <div className="container">
        <div 
          className="colour-square"
          style={{backgroundColor: newColour}}
        >
        <p className="display-text"
          style={{color: newColour === "black" ? 'white' : 'black'}}
        >{newColour !== '' ? newColour.toUpperCase() : "Empty Value"}</p>
      </div>

        <ColourInput 
          setNewColour={setNewColour}
        />
      </div>
    </main>
  )
}

export default Content