import axios from 'axios'
import { defineStore } from 'pinia'

const useRepositoryStore = defineStore('repository', {
    state: () => ({
        repositories: []
    }),
    actions: {
        async getAllRepositories() {
            const response = await axios.get('https://api.github.com/users/tfd-ed/repos')
            console.log(response.data)
        }
    }
})

export default useRepositoryStore