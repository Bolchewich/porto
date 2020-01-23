import React from "react";
import {Projectlist} from "./Projectslist.js"

const test = [
  {id: 0, text:"hei"},
  {id: 1, text:"yeet"}
]
const listItems = Projectlist.map(({id,Title,h5}) => {
  return (


  <div className="col-lg-6 col-xl-4 col-md-12 col-sm-12 margin-bot">
    <div className="card" key={id}>
      <div className="card-header">
        {Title}
      </div>
      <div className="card-body">

        <h5 className="card-title">test</h5>
        <p className="card-text">Test heu</p>
        <a href="#" className="btn btn-primary"></a>
      </div>
    </div>
  </div>

  )
})
export const Prosjekter = () => {

  return (
    <div>
      <h1>Prosjekter</h1>
      <h3>Denne siden viser alle prosjeter t</h3>
      <hr/>
      <div classname="container">
      <div className="row">
      {listItems}
      </div>
      </div>

    </div>
  );
};
