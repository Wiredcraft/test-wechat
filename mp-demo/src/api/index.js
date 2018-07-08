import Fly from 'flyio'

const fly = new Fly()
fly.config.timeout = 10000
fly.config.baseURL = 'https://api.github.com/'

export function getOrgRepos (org) {
  return fly.get(`orgs/${org}/repos`)
}
