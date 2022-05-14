import Header from '../src/components/Header'
import About from '../src/components/About'
import Menu from '../src/components/Menu'

export default function MyAbout() {
	return (
		<>
			<Header
				title="About me"
				description=""
				url="https://ewertoncoutinho.vercel.app"
			/>
			<Menu></Menu>
			<About></About>
		</>
	)
}
