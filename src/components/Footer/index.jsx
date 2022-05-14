import Copy from '../Copy'
import Language from '../Language'
import Touch from '../Touch'

export default function Footer({ touch }) {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<Touch touch={touch}></Touch>
					<Copy></Copy>
				</div>
				<Language></Language>
			</footer>
		</>
	)
}
