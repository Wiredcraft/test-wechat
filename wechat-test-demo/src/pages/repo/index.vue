<template>
  <div class="container">
    <div class="search-wrap">
      <div class="search-input-wrap">
        <input
          v-model="search"
          placeholder="Enter Organization Name"
          confirm-type="search"
          class="search-input"
          @input="debounceInput"
        />
        <icon
          type="clear"
          size="20"
          class="icon-clear"
          @click="clearSearch"
          v-if="search.length !== 0"
        />
      </div>
      <div class="search-result-wrap" v-if="!searching">
        <div
          v-if="orgRepos.length > 0"
          v-for="repo in orgRepos"
          :key="repo"
          @click="handleClick(repo)"
          class="search-result"
          hover-class="hover-result"
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
        title: 'searching',
        mask: true
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
          wx.showToast({
            title: 'Could not find any repo',
            icon: 'none',
            duration: 2000
          })
        })
    }, 500),

    handleClick (repo) {
      const url = `../details/main?owner=${this.search}&repo=${repo}`
      wx.navigateTo({ url })
    },

    clearSearch () {
      this.search = ''
      this.orgRepos = []
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/styl/mixin'

.search-wrap
  width 70%
.search-input-wrap
  position relative
.search-input
  border 1px solid gray
  padding 10px
  padding-right 25px
.icon-clear
  position absolute
  top 13px
  right 5px
.search-result-wrap
  background-color #E0E0E0
  max-height 18em
  overflow-y scroll
.search-result
  padding 10px
  border-bottom 1px solid gray
  ellipsis()
.hover-result
  background-color #EEEEEE
</style>
