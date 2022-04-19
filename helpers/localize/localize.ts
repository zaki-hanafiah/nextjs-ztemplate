import { cn, en, ms } from 'locales'
import { NextRouter } from 'next/router'

const getLang = (router: NextRouter) => {
    const { locale } = router
    let lang = en
    switch (locale) {
        case 'cn':
            lang = cn
            break
        case 'ms':
            lang = ms
            break
        default:
            lang = en
    }
    return lang
}

export default getLang
