import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Language(props) {
	const router = useRouter()

	useEffect(() => {
		const location = window.location.pathname
		if (location == '/') {
			document.getElementById('portugues').checked = true
		} else {
			document.getElementById('english').checked = true
		}
	}, [])

	return (
		<div className="lang">
			<div className="container">
				<div className="mt-40 mb-80">
					<label htmlFor="portugues">
						<input
							type="radio"
							id="portugues"
							onClick={() => {
								router.push('/', '/', {
									locale: 'pt-BR',
								})
							}}
						/>
						<span>Português</span>
					</label>
					<label htmlFor="english">
						<input
							type="radio"
							id="english"
							onClick={() => {
								router.push('/en-US', '/en-US', {
									locale: 'en-US',
								})
							}}
						/>
						<span>English</span>
					</label>
				</div>
			</div>
		</div>
	)
}
