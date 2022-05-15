import Link from 'next/link'
import CardWork from '../CardWork'

export default function Works({ works }) {
	return (
		<section className={['works'].join(' ')}>
			<div className={['container', 'center'].join(' ')}>
				<h1 className="my-works--text">{works}</h1>
				<CardWork
					url="https://shockwave-ewertoncoutinho.vercel.app/"
					img="/image/shockwave.png"
				></CardWork>
				<Link href="https://github.com/ewertoncoutinho?tab=repositories">
					<a
						className="github-works"
						target="_blank"
						rel="noopener noreferrer"
					>
						Repositories in GitHub
					</a>
				</Link>
			</div>
		</section>
	)
}
