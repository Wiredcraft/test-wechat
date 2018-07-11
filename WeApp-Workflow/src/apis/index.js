var Fly = require("../libs/flyio")
var fly = new Fly
fly.config.timeout = 20000
fly.config.baseURL = 'https://api.github.com/'


const getOrgRepos = (org) => {
	return fly.get(`orgs/${org}/repos`)
}

const getReposDetails = (owner, repo) => {
	return fly.get(`repos/${owner}/${repo}`)
}


module.exports = {
	getOrgRepos: getOrgRepos,
	getReposDetails: getReposDetails
}
