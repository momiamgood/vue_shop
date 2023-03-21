import loginAPI from '@/api/auth'

const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

const mutations = {
    loginStart(state){
        state.isSubmitting = true;
        state.validationErrors = null
    },
    loginSuccess(state, payload) {
        state.isSubmitting = false;
        state.currentUser = payload;
        state.isLoggedIn = true
    },
    loginFailure(state, payload){
        state.isSubmitting = true;
        state.currentUser = payload;
        state.validationErrors = payload
    }
}

const actions = {
    login(context, user) {
        return new Promise((resolve) => {
            loginAPI.login(user).then(response => {
                context.commit('loginSuccess', response.data);
                window.localStorage.setItem('token', response.data.data.user_token);
                resolve(response.data.data);
                console.log(response)
            })
                .catch(result => {
                    context.commit('loginFailure', state, result.response.data.error.errors);
                    console.log('result errors', result);
                })
        })
    }
}
export default {
    state, mutations, actions
}