import loginAPI from '@/api/auth'

const state = {

}


const actions = {
    login(context, user) {
        return new Promise((resolve) => {
            loginAPI.register(user).then(response => {
                console.log('response', response)
                console.log(resolve)
            })
                .catch(result => {
                    console.log('result errors', result)
                })
        })
    }
}
export default {
    state, mutations, actions
}