<template>
  <div class="container">
    <div class="search-wrap">
      <input
        v-model="search"
        placeholder="Organization Name"
        confirm-type="search"
        class="search-input"
        @input="debounceInput"
      />
      <div class="search-result-wrap" v-if="!searching">
        <div
          v-for="repo in orgRepos"
          :key="repo"
          class="search-result"
        >{{repo}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrgRepos } from '@/api'
import debounce from 'lodash/debounce'

export default {
  data () {
    return {
      search: '',
      orgRepos: [],
      searching: false
    }
  },

  methods: {
    debounceInput: debounce(function (e) {
      this.searching = true
      wx.showLoading({
        title: 'searching repo'
      })
      getOrgRepos(e.target.value)
        .then(res => {
          this.searching = false
          this.orgRepos = res.data.map(item => item.name)
          wx.hideLoading()
        })
        .catch(err => {
          console.log(err)
          this.searching = false
          this.orgRepos = []
          wx.hideLoading()
        })
    }, 1000)
  }
}
</script>

<style lang="stylus">
@import '../../assets/styl/mixin'

.search-wrap
  width 70%
.search-input
  border 1px solid gray
  padding 5px 10px
.search-result-wrap
  background-color lightgray
  max-height 200px
  overflow-y scroll
.search-result
  padding 5px
  border-bottom 1px solid gray
  ellipsis()
</style>
