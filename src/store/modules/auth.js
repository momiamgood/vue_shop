import authAPI from '@/api/auth'

const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors:[],
    isLoggedIn: null
}

const mutations = {
    registerStart(state) {
        state.isSubmitting = true;
        state.validationErrors = null
    },
    registerSuccess(state, payload) {
        state.isSubmitting = false;
        state.currentUser = payload
        state.isLoggedIn = true
    },
    registerFailure(state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    }
}

const actions = {
    register(context, user){
        return new Promise(()=> {
            authAPI.register(user).then(response => {
                context.commit('registerSuccess', response.data);
                window.localStorage.setItem('token', response.data.data.user_token);
                console.log(response)
            })
                .catch(result=>{
                    console.log('result errors',result)
                })
        })
    }
}
export default {
    state, mutations, actions
}