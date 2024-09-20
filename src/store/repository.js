import axios from 'axios'
import { defineStore } from 'pinia'

const useRepositoryStore = defineStore('repository', {
    state: () => ({
        courses: [],
        repos: [],
        usernames: []
    }),
    actions: {
        async getAllRepositories() {
            try {
                const { data } = await axios.get('/v1/courses')
                this.courses = data
            } catch (err) {
                console.log(err.message)
            }
        }
    }
})

export default useRepositoryStore