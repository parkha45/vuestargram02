<template>
  <div>
		<div class="post-wrap" v-if="container_step == 0">
			<Post v-for="(user, i) in UserData" :key="i" :user="user" />
		</div>

		<div class="filter-wrap" v-if="container_step == 1">
			<div class="upload-image" :style="`background-image: url(${upload_img})`"></div>
			<div class="filters">
				<FilterBox v-for="filter in instar_filter" :key="filter" :filter="filter" :upload_img="upload_img">
					{{filter}}
				</FilterBox>
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
import FilterBox from './filterbox.vue'

export default {
	name: 'container',
	data() {
		return {
			inputWrite: '',
			instar_filter: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
						"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
						"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
		}
	},
	components: {
		Post: Post,
		FilterBox: FilterBox
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
