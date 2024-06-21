// Filename - App.js

import "./App.css";
// importing components from react-router-dom package
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
import Answer1 from "./components/answer1";
import Answer2 from "./components/answer2";
import Answer3 from "./components/answer3";
import Answer4 from "./components/answer4";
import Answer5 from "./components/answer5";
import Answer6 from "./components/answer6";

function App() {
	return (
		<>
			{/* This is the alias of BrowserRouter i.e. Router */}
			<Router>
				<Routes>
					{/* This route is for home component 
		with exact path "/", in component props 
		we passes the imported component*/}
					<Route
						exact
						path="/"
						element={<Home />}
					/>

					<Route
						path="/answer1"
						element={<Answer1 />}
					/>
					
					<Route
            					path="/answer2"
            					element={<Answer2 />}
   					/>

					<Route
            					path="/answer3"                                    
  						element={<Answer3 />}
   					/>
					<Route
            					path="/answer4"                                        				
						element={<Answer4 />}
   					/>
					<Route
            					path="/answer5"                                        				
						element={<Answer5 />}
   					/>
					<Route
            					path="/answer6"                                        	
						element={<Answer6 />}
   					/>
					

					{/* If any route mismatches the upper 
		route endpoints then, redirect triggers 
		and redirects app to home component with to="/" */}
					{/* <Redirect to="/" /> */}
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;

