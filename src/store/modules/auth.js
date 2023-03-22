import authAPI from '@/api/auth'
import loginAPI from "@/api/login";


const state = {
    isSubmitting: false,
    currentUser: null,
    emailErrors: null,
    fioErrors: null,
    passwordErrors: null,
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
    loginStart(state) {
        state.isSubmitting = true;
        state.validationErrors = null
    },
    loginSuccess(state, payload) {
        state.isSubmitting = false;
        state.currentUser = payload;
        state.isLoggedIn = true
    },
    loginFailure(state, payload) {
        state.isSubmitting = true;
        state.currentUser = payload;
        state.emailErrors = payload.email;
        state.fioErrors = payload.fio;
        state.passwordErrors = payload.password;
    }
}

const actions = {
    register(context, user) {
        return new Promise((resolve) => {
            authAPI.register(user).then(response => {
                context.commit('registerSuccess', response.data);
                window.localStorage.setItem('token', response.data.data.user_token);
                resolve(response.data.data);
                console.log(response)
            })
                .catch(result => {
                    context.commit('registerFailure', state, {
                        email: result.response.data.error.errors.email,
                        fio: result.response.data.error.errors.fio,
                        password: result.response.data.error.errors.password,
                    });
                    console.log('result errors', result);
                })
        })
    },

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