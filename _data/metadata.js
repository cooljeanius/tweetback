let data = {
	username: "cooljeanius", // No leading @ here
	homeLabel: "cooljeanius.github.io",
	homeUrl: "https://cooljeanius.github.io/tweetback/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
