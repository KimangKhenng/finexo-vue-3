import axios from 'axios'
import { defineStore } from 'pinia'

const useRepositoryStore = defineStore('repository', {
    state: () => ({
        repositories: []
    }),
    actions: {
        async getAllRepositories() {
            try {
                const { data } = await axios.get('https://api.github.com/users/tfd-ed/repos')
                console.log(data)
                this.repositories = data
            } catch (err) {
                console.log(err.message)
            }
        }
    }
})

export default useRepositoryStore