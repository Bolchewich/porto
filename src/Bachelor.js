import React from "react";
import ReactDOM from "react-dom";

export const Bachelor = () => {
  return (
    <div>
      <h1>Bacheloroppgave</h1>
      <p>Denne Oppgave ble laget av meg (Magnus Åby Bergquist) og Kasim Ilyas Abdi. </p>

      <div className="card">
        <div className="card-header">
          Bacheloroppgave
        </div>
        <div className="card-body">
          <h5 className="card-title">Laget av Magnus og Kasim</h5>
          <p className="card-text">Denne oppgaven ble </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
</div>
    </div>
  )
}
