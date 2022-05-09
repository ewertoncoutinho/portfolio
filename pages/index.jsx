import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Hello from '/src/components/Hello'
import CardAbout from '../src/components/CardAbout'
import Menu from '/src/components/Menu'
import Works from '../src/components/Works'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['home'])),
		},
	}
}

export default function Home() {
	const { t } = useTranslation()
	return (
		<>
			<Header discription={t('home:description')} />
			<Menu />
			<Hello
				greeting={t('home:hello')}
				name="Ewerton"
				caption={t('home:caption')}
			/>
			<CardAbout greeting={t('home:greeting')} about={t('home:about')} />
			<Works works={t('home:works')} />
			<Footer touch={t('home:touch')} />
		</>
	)
}
