<template>
	<div class="header">
		<ul class="header-button-left">
		<li>Cancel</li>
		</ul>
		<ul class="header-button-right">
		<li v-if="container_step == 1" @click="container_step = 2">Next</li>
		<li v-if="container_step == 2" @click="publish">발행</li>
		</ul>
		<img src="./assets/logo.png" class="logo" />
	</div>

	<h4>{{ $store.state.age }}</h4>
	<button @click="$store.commit('agePlusone')">+1</button>

	<Container @inputWrite="inputWriteContent = $event" :UserData="UserData" :container_step="container_step" :upload_img="upload_img" />

	<button @click="more">더보기</button>

	<div class="footer">
		<ul class="footer-button-plus">
		<input @change="upload" type="file" id="file" class="inputfile" />
		<label for="file" class="input-plus">+</label>
		</ul>
	</div>

</template>

<script>
import Container from './components/container.vue'
import UserData from './assets/data/userdata.js'
import axios from 'axios'


export default {
	name: 'App',
	data() {
		return {
			UserData: UserData,
			more_count: 0,
			container_step: 0,
			upload_img: '',
			inputWriteContent: '',
			choose_filter: '',
			post_id: 4
		}
	},
	mounted() {
		this.emitter.on('changeFilter', (filter)=>{
			this.choose_filter = filter
		})
	},
	components: {
		Container: Container
	},
	methods: {
		more() {
			axios.get(`https://codingapple1.github.io/vue/more${ this.more_count }.json`)
			.then((result) => {
				this.UserData.push(result.data)
				this.more_count++
			})
		},
		upload(e) {
			var file = e.target.files
			let url = URL.createObjectURL(file[0])

			if( file != '' ) {
				this.container_step = 1
				this.upload_img = url
			}
		},
		publish() {
			var addContent = {
				postId: this.post_id,
				name: "Kim Hyun",
				userImage: "https://placeimg.com/100/100/arch",
				postImage: this.upload_img,
				likes: 36,
				date: "May 15",
				liked: false,
				content: this.inputWriteContent,
				filter: this.choose_filter
			}

			this.UserData.unshift(addContent)
			this.container_step = 0
			this.post_id++
		}
	},
}
</script>

<style>
	body {
		margin: 0;
	}
	ul {
		padding: 5px;
		list-style-type: none;
	}
	.logo {
		width: 22px;
		margin: auto;
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		top: 13px;
	}
	.header {
		width: 100%;
		height: 40px;
		background-color: white;
		padding-bottom: 8px;
		position: sticky;
		top: 0;
	}
	.header-button-left {
		color: skyblue;
		float: left;
		width: 50px;
		padding-left: 20px;
		cursor: pointer;
		margin-top: 10px;
	}
	.header-button-right {
		color: skyblue;
		float: right;
		width: 50px;
		cursor: pointer;
		margin-top: 10px;
	}
	.footer {
		width: 100%;
		position: sticky;
		bottom: 0;
		padding-bottom: 10px;
		background-color: white;
	}
	.footer-button-plus {
		width: 80px;
		margin: auto;
		text-align: center;
		cursor: pointer;
		font-size: 24px;
		padding-top: 12px;
	}
	.sample-box {
		width: 100%;
		height: 600px;
		background-color: bisque;
	}
	.inputfile {
		display: none;
	}
	.input-plus {
		cursor: pointer;
	}
	.upload-image{
		width: 100%;
		height: 450px;
		background: cornflowerblue;
		background-size : cover;
	}
	.filters{
		overflow-x:scroll;
		white-space: nowrap;
	}
	.filter-1 {
		width: 100px;
		height: 100px;
		background-color: cornflowerblue;
		margin: 10px 10px 10px auto;
		padding: 8px;
		display: inline-block;
		color : white;
		background-size: cover;
	}
	.filters::-webkit-scrollbar {
		height: 5px;
	}
	.filters::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	.filters::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 5px;
	}
	.filters::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
	.write-box {
		border: none;
		width: 90%;
		height: 100px;
		padding: 15px;
		margin: auto;
		display: block;
		outline: none;
	}

</style>
