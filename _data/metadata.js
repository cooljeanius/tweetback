require("dotenv").config();

let data = {
	username: "cooljeanius", // No leading @ here
	homeLabel: "cooljeanius.github.io",
	homeUrl: "https://cooljeanius.github.io/tweetback/",
	baseURL:
		process.env.ENV == "local"
			? "http://localhost:8080"
			: "https://cooljeanius.github.io/my_tweetback_archive",
	language: "en-US",
};

data.avatar = `${data.baseUrl}/img/avatar.jpeg`;

module.exports = data;

