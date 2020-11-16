import React from 'react';
import Note from '../Components/Note';

class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    renderEachNote = () => {
        return this.apiResponse().map((note) => <Note key={note.id} note={note.content} />)
    }

    render() {
        return (
            <ul>
                {this.renderEachNote()}
            </ul>
        )
    }

}

export default NotesContainer;

