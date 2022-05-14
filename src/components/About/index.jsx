import { useRouter } from 'next/router'

export default function About() {
	const router = useRouter()
	return (
		<div className="about">
			<div className="container">
				<h1>About</h1>
				<p className="font-size-small">Building...</p>
				<button onClick={() => router.push('/')}>back</button>
			</div>
		</div>
	)
}
