<template>
  <div id="home">
    <app-header @titleChanged="updateTitle($event)" :title="title"></app-header>
    <users :users="users"></users>
    <app-footer :title="title"></app-footer>
  </div>
</template>

<script>
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
  data () {
    return {
      // title: '这是我的第一个Vue脚手架项目！'
      users: [],
      title: '传递的是一个值，(number string boolean)'
    }
  },
  methods: {
    updateTitle (title) {
      this.title = title
    }
  },
  components: {
    'users': Users,
    'app-header': Header,
    'app-footer': Footer
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/users')
      .then((data) => {
        this.users = data.body
      })
  }
}
</script>

<style scoped>
  h1{
    color: purple;
  }
</style>
