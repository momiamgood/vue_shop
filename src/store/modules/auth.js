import authAPI from '@/api/auth'

const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
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
    },
}

const actions = {
    register(context, user){
        return new Promise((resolve)=> {
            authAPI.register(user).then(response => {
                context.commit('registerSuccess', response.data);
                window.localStorage.setItem('token', response.data.data.user_token);
                resolve(response.data.data);
                console.log(response)
            })
                .catch ( result => {
                    context.commit('registerFailure', state, result.response.data.error.errors);
                    console.log('result errors', result);
                })
        })
    }
}
export default {
    state, mutations, actions
}