import React, {Component, useState, useEffect} from 'react'
import "./App.css";
import { TextField, Snackbar, Button, Tooltip } from "@material-ui/core";
import axios from "axios";
import Navmenu from "./Components/actions/navmenu";
import Cardsingle from "./Components/actions/cardsingle";
import Openings from "./Components/actions/openings";
import Inventory from "./Components/actions/inventory";
import * as constant from './Components/actions/constant'
const dinamicRoute = window.location.host.includes("localhost") ? constant.LOCAL_GET : constant.PROD_GET

const App = function () {
	const [users, setUsers] = useState(null);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	useEffect(() => {
		axios
			.get("/routes/users")
			.then((users) => setUsers(users))
			.catch((err) => console.log(err));
	}, []);

	function submitForm() {
		if (username === "") {
			alert("Please fill the username field");
			return;
		}
		if (email === "") {
			alert("Please fill the email field");
			return;
		}
		axios
			.post("/routes/users", {
				username: username,
				email: email,
			})
			.then(function () {
				alert("Account created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not creat account. Please try again");
			});
  }
  
  return (
		<>
			<h1>My Project</h1>
			{users === null ? (
				<p>Loading...</p>
			) : users.length === 0 ? (
				<p>No user available</p>
			) : (
				<>
					<h2>Available Users</h2>
					<ol>
						{users.map((user, index) => (
							<li key={index}>
								Name: {user.name} - Email: {user.email}
							</li>
						))}
					</ol>
				</>
			)}

			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Enter your username"
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email address"
				/>
				<input type="submit" />
			</form>
		</>
	);
};
export default App
//     return (
//       <div className="App">
//         <Button
//           variant="contained"
//           onClick={this.delDatafromDB}
//           style={{ marginLeft: "4%" }}
//           size="small"
//           position="end"
//           color="secondary"
//           name="delete all"
//           id="empty"
//         >
//           Empty ALL
//         </Button>
//         <br />
//         <br />
//         {this.state.input === "Singular" ? (
//           <div>
//             {" "}
//             <TextField
//               required
//               id="name"
//               label="Required"
//               value={this.state.name}
//               onChange={this.update}
//             />
//             <Button
//               variant="contained"
//               onClick={this.checker}
//               style={{ marginLeft: "4%" }}
//               size="medium"
//               position="end"
//               color="primary"
//               name="editmode"
//               id="editmode"
//             >
//               Check Username
//             </Button>
//           </div>
//         ) : (
//           <></>
//         )}
//         {this.state.card && this.state.input === "Singular" ? (
//           <div>
//             <Cardsingle
//               expanded={this.state.expanded}
//               data={this.state.data}
//               handleExpandClick={this.handleExpandClick}
//             />
//           </div>
//         ) : (
//           <></>
//         )}
//         {this.state.input === "Job Openings" ? (
//           <>
//             {/* <TextField
//                   required
//                   id="Latest Software Development Offerings"
//                   label="Required"
//                   value={this.state.name}
//                   onChange={this.update}
//                 /> */}
//             <Button
//               variant="contained"
//               onClick={this.jobChecker}
//               style={{ marginLeft: "4%" }}
//               size="medium"
//               position="end"
//               color="primary"
//               name="resultspp"
//               id="resultspp"
//             >
//               Check Results
//             </Button>
//           </>
//         ) : (
//           <></>
//         )}
//         {this.state.openings && this.state.input=="Job Openings" ? (
//           <Openings
//             jobs={this.state.jobs}
//             handleExpandClick={this.handleExpandClick}
//           />
//         ) : (
//           <></>
//         )}
//         {this.state.input === "Inventory" ? (
//           <Inventory
//           data={this.state.data}
//             stats={this.state.stats}
//             handleExpandClick={this.handleExpandClick}
//           />
//         ) : (
//           <></>
//         )}
//         {this.state.snack ? (
//           <Snackbar
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//             open={this.state.snack}
//             autoHideDuration={6600}
//             message="Saved!"
//           ></Snackbar>
//         ) : (
//           <></>
//         )}
//         <Navmenu handleMenu={this.handleMenu} />
//       </div>
//     );
//   }
// }

// export default App;
