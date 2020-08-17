<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="name" />
    <button @click="test">点击</button>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    test () {
      this.axios.post('/api', { name: this.name })
        .then(res => {
          console.log(`res:${res.data[0].user_name}`)
        }).catch(e => {
          console.log(`e:${e}`)
        })
    }
  }
}
</script>
