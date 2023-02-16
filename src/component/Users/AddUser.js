import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function addUserHandler(event) {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      console.log("Unvalid input");
      return;
    }
    if (+enteredAge < 0) {
      console.log("Unvalid Age");
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function AgeChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  return (
    <div>
      <ErrorModal title='Warning!' message='Something went wrong. Retry it.'/>
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={enteredUsername}
              type="text"
              onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              value={enteredAge}
              type="number"
              onChange={AgeChangeHandler}
            />
            <Button type="submit" onClick={addUserHandler}>
              Add User
            </Button>
          </form>
        </Card>
    </div>
  );
}
export default AddUser;
