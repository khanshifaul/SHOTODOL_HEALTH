import type { RouterConfig } from '@nuxt/schema'
export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 50,
            }
        }
    },
}