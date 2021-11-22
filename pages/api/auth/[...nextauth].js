import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: '64423bd2b33ff1335163',
            clientSecret:'c271f4fddd8b5471ebfa868ce683b73fbc1ef855'
        })
    ]
})
