import { defineStore } from "pinia";

const useServiceStore = defineStore('service', {
    state: () => {
        return {
            services: [
                {
                    image: "images/s1.png",
                    id: 1,
                    title: "Etherum Wallet",
                    description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
                }, {
                    image: "images/s2.png",
                    id: 2,
                    title: "Security Storage",
                    description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "
                }, {
                    image: "images/s3.png",
                    id: 2,
                    title: "Expert Support",
                    description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "
                }
            ],
            getServiceByID(id) {
                const service = this.services.find((item) => {
                    return item.id == id
                })
                return service
            }
        }
    },
    // Have effect on state
    // Call API to update state
    actions: {

    }
})

const useCardStore = defineStore('card', {
    state: () => ({
        cards: [
            {
                image: "images/s1.png",
                title: "Currency Wallet",
                description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
            }, {
                image: "images/s2.png",
                title: "Security Storage",
                description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "
            }, {
                image: "images/s3.png",
                title: "Expert Support",
                description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "
            }
        ]
    })
})

export { useServiceStore, useCardStore }