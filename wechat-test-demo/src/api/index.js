import Fly from 'flyio'

const fly = new Fly()
fly.config.timeout = 10000
fly.config.baseURL = 'https://api.github.com/'

export function getOrgRepos (org) {
  return fly.get(`orgs/${org}/repos`)
}

export function getRepoDetails (owner, repo) {
  return fly.get(`repos/${owner}/${repo}`)
}
