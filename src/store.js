import { createStore } from 'vuex'

import userdata from './assets/data/userdata'

const store = createStore({
  state(){
    return {
		age: 27,
		userdata: userdata
    }
  },
  mutations: {
	  agePlusone(state) {
		  state.age += 1
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
  }
})

export default store
