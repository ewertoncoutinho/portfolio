import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Hello from '/src/components/Hello'
import CardAbout from '../src/components/CardAbout'
import Menu from '/src/components/Menu'
import Works from '../src/components/Works'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import About from '../src/components/About'

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
})

export default function Home() {
	const { t } = useTranslation()
	return (
		<>
			<Header
				description={t('common:description')}
				url="https://ewertoncoutinho.vercel.app"
			/>
			<Menu />
			<Hello
				greeting={t('common:hello')}
				name="Ewerton"
				caption={t('common:caption')}
			/>
			<CardAbout
				greeting={t('common:greeting')}
				about={t('common:about')}
			/>
			<Works works={t('common:works')} />
			<Footer touch={t('common:touch')} />
		</>
	)
}
