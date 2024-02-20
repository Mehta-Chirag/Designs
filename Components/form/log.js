import React, { useState } from "react";
import "./Login.css";

const MultipleInputs = () => {
  const [userReg, setUserReg] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log([name]);
    console.log([value]);
    setUserReg({ ...userReg, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userReg, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setUserReg({ username: "", email: "", number: "", password: "" });
  };

  return (
    <>
      <form className="login-outer" action="" onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <div>
          {/* <label htmlFor="username">Name : </label> */}
          <input className="st1"
            type="text"
            autoComplete="off"
            value={userReg.username}
            onChange={handInp}
            placeholder="Enter Name"
            name="username"
            id="username"
          />
        </div>

        <div>
          {/* <label htmlFor="email">Email address : </label> */}
          <input className="st1"
            type="email"
            autoComplete="off"
            value={userReg.email}
            onChange={handInp}
            placeholder="Enter email"
            name="email"
            id="email"
          />
        </div>

        <div>
          {/* <label htmlFor="number">Aadhar No : </label> */}
          <input className="st1"
            type="number"
            autoComplete="off"
            value={userReg.number}
            onChange={handInp}
            placeholder="Enter Aadhar No"
            name="number"
            id="number"
          />
        </div>

        <div>
          <input className="st1" type="file" />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>
        {records.map((curEle) => {
          return (
            <div className="showDataStyle">
              <p>{curEle.username}</p>
              <p>{curEle.email}</p>
              <p>{curEle.number}</p>
              <p>{curEle.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MultipleInputs;