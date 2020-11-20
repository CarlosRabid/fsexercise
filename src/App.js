import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { TextField, Snackbar, Button, Tooltip } from "@material-ui/core";
import axios from "axios";

const App = function (props) {
  const [users, setUsers] = useState(null);
  const [snack, setSnack] = useState(false);

  const [stateObj, setUsername] = useState({ username: "", email: "" });
  // const [email, setEmail] = useState('');
  useEffect(() => {
    axios
      .get("/data")
      // .then(console.log(users))
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  async function delDatafromDB() {
    if (window.confirm("Are you sure you want to delete All Info ?")) {
      await axios.delete(`/empty`, {});
	//   this.closeModal();
	await axios.get("/data")
      return;
    } else {
    //   this.closeModal();
      return;
    }
  };

  async function closePopup () {
    let timeout = 5000;
    await setSnack({
      snack: true,
    });
    await setTimeout(() => {
      setSnack({
        snack: false,
      });
    }, timeout);
    // await this.getSumfromDB();
    return;
  };

  async function SubmitForm() {
    if (stateObj.username === "") {
      alert("Please fill the username field");
      return;
    }
    axios.get(`/data/${stateObj.username}`).then(
      axios
        .get("/data")
        .then((users) => setUsers(users.data))
        .catch((err) => console.log(err))
	);
	return closePopup()
  }

  return (
    <>
      <h1>Javascript Exercise</h1>
      {users === null ? (
        <p>No data found...yet</p>
      ) : users.length === 0 ? (
        <p>No user available</p>
      ) : (
        <>
          <h2>Recently Searched</h2>
          <ol>
            {users.map((user, index) => (
				<li key={index}>
                Name: {user.name} - Title: {user.headline}
              </li>
            ))}
          </ol>
			<br />
			<h3>Skills to be improved</h3>
          <ol>
            {users.map((user, index) => (
				<li key={index}>
                Name: {user.name} - to improve: {user.pcg}
              </li>
            ))}
          </ol>
        </>
      )}

      <form /* onSubmit={SubmitForm}*/ >

	  <TextField
              required
              id="userName"
              name="username"
              type="text"
              label="Required"
              placeholder="Enter your username"
              value={stateObj.username}
              onChange={(e)=> setUsername({...stateObj, username: e.target.value})}
            />
            <Button
              variant="contained"
              onClick={SubmitForm}
              style={{ marginLeft: "4%" }}
              size="medium"
              position="end"
              color="primary"
              name="username"
              id="userName"
            >
              Check Username
            </Button>
      </form>
	  {snack ? (
                  <Snackbar
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    open={snack}
                    autoHideDuration={6600}
                    message="Saved!"
                  ></Snackbar>
                ) : (
                  <></>
                )}
	  <br />
            <Button variant="contained" onClick={delDatafromDB}
            style={{marginLeft: '4%'}}
              size='small' position='end' color="secondary" name="delete all" id="empty"
            >Empty ALL</Button>
            <br />
    </>
  );
};
export default App;
