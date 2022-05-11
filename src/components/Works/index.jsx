import CardWork from '../CardWork'

export default function Works({ works }) {
	return (
		<section className={['works'].join(' ')}>
			<div className={['container'].join(' ')}>
				<h1 className="my-works--text">{works}</h1>
			</div>
			<CardWork></CardWork>
		</section>
	)
}
