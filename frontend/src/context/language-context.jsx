/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'site-language'

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState(() => {
		const stored = localStorage.getItem(STORAGE_KEY)
		return stored === 'en' ? 'en' : 'ru'
	})

	const setLang = nextLanguage => {
		const normalized = nextLanguage === 'en' ? 'en' : 'ru'
		setLanguage(normalized)
		localStorage.setItem(STORAGE_KEY, normalized)
	}

	const value = useMemo(
		() => ({
			language,
			setLanguage: setLang,
			isEnglish: language === 'en',
		}),
		[language],
	)

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within LanguageProvider')
	}
	return context
}
