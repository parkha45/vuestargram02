import axios from 'axios'
import { createStore } from 'vuex'

import userdata from './assets/data/userdata'

const store = createStore({
	state(){
		return {
			age: 27,
			userdata: userdata,
			more: {}
		}
	},
	mutations: {
		agePlusone(state) {
			state.age += 1
		},
		setMore(state, data){
			state.more = data
		},
		likesPlusone(state, user) {
			if( user.liked == false ) {
				user.likes++
				user.liked = true
			} else {
				user.likes--
				user.liked = false
			}
		}
	},
	actions: {
		getData(context) {
			axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
				context.commit('setMore', a.data)
			})
		}
	}
})

export default store
