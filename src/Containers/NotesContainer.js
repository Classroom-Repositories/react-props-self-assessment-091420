import React from 'react';
// import Note from './Components/Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        // console.log(this.props)
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    render() {
        
        return (
            
            <ul>
               
            </ul>
        )
    }

}

export default NotesContainer;

