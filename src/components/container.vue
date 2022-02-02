<template>
  <div>
		<Post v-for="(user, i) in UserData" :key="i" :user="user" />
  </div>
</template>

<script>
import Post from './post.vue'

export default {
	name: 'container',
	components: {
		Post: Post
	},
	props: {
		UserData: Array,
	}
}
</script>

<style>

</style>
