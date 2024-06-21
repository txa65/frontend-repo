// Filename - ContactUs.jsx
import React from "react";

const answer1 = () => {
	return (

<pre><h3>{'try to request http://example.com/ with the server IP address \ncurl -v http://x.y.z.w/example.com --header  "Host: example.com"\nif you still have a issue check if the IP is not blocked by the host provider or if the nameservers are down or under a DNS attack\nalso if traceroute shows multiple hops timing out you should contact your ISP'}</h3>
</pre>
	);
};

export default answer1;

