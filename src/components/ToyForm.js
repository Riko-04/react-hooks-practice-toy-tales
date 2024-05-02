import React, {useState} from "react";
import axios from "axios";

function ToyForm({addaToy}) {
  const[formdata, setFormData]=useState({
    name:"",
    image:"",
  });

  function handleChange(event) {
    setFormData({
      ...formdata,
      [event.target.name] : event.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault()
    const newToy ={
      ...formdata,
      likes:0,
    }
    axios
    .post('http://localhost:3001/toys', newToy)
    .then((res) => addaToy(res.data))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formdata.name}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={formdata.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
