import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        home: 'Home',
        services: 'Service',
        courses: 'Courses',
        register: 'Register'
    },
    khm: {
        home: 'ទំព័រដើម',
        services: 'សេវាកម្ម',
        courses: 'មេរៀន',
        register: 'ចុះឈ្មោះ'

    }
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n