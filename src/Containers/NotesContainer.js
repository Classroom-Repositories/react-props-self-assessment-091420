import React from 'react';
class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    render() {
        return (
            <ul>
                <Note />
            </ul>
        )
    }

}

export default NotesContainer;

