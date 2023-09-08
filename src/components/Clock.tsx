import { useEffect, useState, useLayoutEffect } from "react"

const UPDATE_CYCLE = 1000

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
    US = 'en-US',
    KR = 'ko-KR'
}

const getLocaleFormString = (text: string) => {
    switch (text) {
        case Locale.US:
            return Locale.US
        case Locale.KR:
            return Locale.KR
        default:
            return Locale.US
    }
}

const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState<Locale>()

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)

        return () => {
            clearInterval(timer);
        }
    }, [])


    // useEffect(() => {
    //     const saveLocale = localStorage.getItem(KEY_LOCALE)
    //     if (saveLocale !== null) {
    //         setLocale(getLocaleFormString(saveLocale))
    //         console.log('setLocale(getLocaleFormString(saveLocale))')
    //         console.log(getLocaleFormString(saveLocale))
    //     }
    // }, [])

    useLayoutEffect(() => {
        const saveLocale = localStorage.getItem(KEY_LOCALE)
        if (saveLocale !== null) {
            setLocale(getLocaleFormString(saveLocale))
            console.log('setLocale(getLocaleFormString(saveLocale))')
            console.log(getLocaleFormString(saveLocale))
        }
    }, [])
    
    useEffect(() => {
        if (locale) {
            localStorage.setItem(KEY_LOCALE, locale)
            console.log('localStorage.setItem')
            console.log(locale)
        }
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-label">현재 시각</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => setLocale(getLocaleFormString(e.target.value))}>
                    <option value="en-US">en-US</option>
                    <option value="ko-KR">ko-KR</option>
                </select>

            </p>
        </div>
    )
}

export default Clock