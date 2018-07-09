import Fly from 'flyio'

const fly = new Fly()
fly.config.timeout = 10000
fly.config.baseURL = 'https://api.github.com/'

const clientId = '737676a3da76c63cf125'
const secret = '62e0c964de939f25dd17495aea931073b0ef6947'
const oauth = `client_id=${clientId}&client_secret=${secret}`

export function getOrgRepos (org) {
  return fly.get(`orgs/${org}/repos?${oauth}`)
}

export function getRepoDetails (owner, repo) {
  return fly.get(`repos/${owner}/${repo}?${oauth}`)
}
