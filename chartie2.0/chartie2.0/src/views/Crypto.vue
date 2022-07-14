<template>
  <div>
    <ul v-if="posts && posts.length">
      <li v-for="post of 5">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import { HTTP } from '../components/http-common.js';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  created() {
    HTTP.get(`posts`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
