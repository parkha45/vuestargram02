<template>
  <div>
		<div class="post-wrap" v-if="container_step == 0">
			<Post v-for="(user, i) in UserData" :key="i" :user="user" />
		</div>

		<div class="filter-wrap" v-if="container_step == 1">
			<div class="upload-image" :style="`background-image: url(${upload_img})`"></div>
			<div class="filters">
				<div class="filter-1" :style="`background-image: url(${upload_img})`"></div>
				<div class="filter-1" :style="`background-image: url(${upload_img})`"></div>
				<div class="filter-1" :style="`background-image: url(${upload_img})`"></div>
				<div class="filter-1" :style="`background-image: url(${upload_img})`"></div>
				<div class="filter-1" :style="`background-image: url(${upload_img})`"></div>
			</div>
		</div>

		<div class="write-wrap" v-if="container_step == 2">
			<div class="upload-image" :style="`background-image: url(${upload_img})`"></div>
			<div class="write">
				<textarea @change="inputContent" class="write-box">write!</textarea>
			</div>
		</div>
  </div>
</template>

<script>
import Post from './post.vue'

export default {
	name: 'container',
	data() {
		return {
			inputWrite: ''
		}
	},
	components: {
		Post: Post
	},
	props: {
		UserData: Array,
		container_step: Number,
		upload_img: String
	},
	methods: {
		inputContent(e) {
			this.inputWrite = e.target.value;
			this.$emit('inputWrite', this.inputWrite)
		}
	}
}
</script>

<style>

</style>
