// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Test Questions</h1>
			<br />
			<ul>
				<li>
					{/* Endpoint to route to Home component */}
					 <Link to="/">Home</Link>
				</li>
				<li>
					{/* Endpoint to route to About component */}
					<Link to="/answer1">Site down, your name servers are down </Link>
				</li>
				<li>
					{/* Endpoint to route to About component */}
					<Link to="/answer2">Why is my site coming from California?! </Link>
				</li>
				<li>
					{/* Endpoint to route to Contact Us component */}
					<Link to="/answer3">Workers not applied </Link>
				</li>
				<li>
					{/* Endpoint to route to About component */}
					<Link to="/answer4">Cloudflare Nameservers </Link>
				</li>
				<li>
					{/* Endpoint to route to About component */}
					<Link to="/answer5">Content not Being Cached </Link>
				</li>
				<li>
					{/* Endpoint to route to About component */}
					<Link to="/answer6">Redirection based on user agent </Link>
				</li>

			</ul>
		</div>
	);
};

export default Home;
