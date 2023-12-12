import React from 'react'
import { useParams } from 'react-router-dom'

const AnzeigeDetails = () => {
    const { id } = useParams();

    return (
      <div>
        <h1>Anzeige Details für {id}</h1>
        {/* Hier kannst du weitere Inhalte für die Anzeige-Details einfügen */}
      </div>
    );
}

export default AnzeigeDetails;