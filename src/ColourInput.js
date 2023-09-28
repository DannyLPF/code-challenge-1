import React from 'react'

const ColourInput = ({setNewColour }) => {
  return (
    <form className='addForm'>
            <input
                autoFocus
                id='addColour'
                type='text'
                placeholder='Type a colour'
                required
                onChange={(e) => setNewColour(e.target.value)}
            />
        </form>
  )
}

export default ColourInput