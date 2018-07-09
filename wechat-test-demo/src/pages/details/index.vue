<template>
  <div class="container" v-if="!isFetching">
    <image
      :src="avatar"
      mode="aspectFit"
      class="avatar"
    ></image>
    <div class="repo-wrap">
      <div class="repo-row" v-if="repoDetails.name">
        <span class="row-label">Name:</span>
        <span>{{repoDetails.name}}</span>
      </div>
      <div class="repo-row" v-if="repoDetails.full_name">
        <span class="row-label">FullName:</span>
        <span>{{repoDetails.full_name}}</span>
      </div>
      <div class="repo-row" v-if="repoDetails.description">
        <span class="row-label">Description:</span>
        <span>{{repoDetails.description}}</span>
      </div>
      <div class="repo-row" v-if="repoDetails.language">
        <span class="row-label">Language:</span>
        <span>{{repoDetails.language}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getRepoDetails } from '@/api'

export default {
  data () {
    return {
      repoDetails: {},
      isFetching: false
    }
  },

  computed: {
    avatar () {
      return this.repoDetails.owner
        ? this.repoDetails.owner.avatar_url
        : ''
    }
  },

  onLoad () {
    const { owner, repo } = this.$root.$mp.query
    this.isFetching = true
    wx.showLoading({
      title: 'loading'
    })
    getRepoDetails(owner, repo)
      .then(res => {
        this.repoDetails = res.data
        this.isFetching = false
        wx.hideLoading()
      })
      .catch(err => {
        console.log(err)
        this.isFetching = false
        wx.hideLoading()
      })
  },

  onUnload () {
    this.repoDetails = {}
  }
}
</script>

<style lang="stylus">
.avatar
  width 100px
  height 100px
  margin-bottom 10px
  border 1px solid lightgray
.repo-wrap
  width 80%
.repo-row
  display flex
  padding 10px 0
  border-bottom 1px solid lightgray
.row-label
  padding-right 10px
  width 100px
  text-align right
</style>
