import Link from 'next/link'

export default function About() {
	return (
		<div className="about">
			<div className="container">
				<h1>About</h1>
				<p className="font-size-small">building...</p>
				<Link href="/">
					<a>voltar</a>
				</Link>
			</div>
		</div>
	)
}
