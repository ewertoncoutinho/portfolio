import Link from 'next/link'
import Image from 'next/image'

export default function CardWork(props) {
	return (
		<article className={['container', 'card-work', props.color].join(' ')}>
			<Link href="https://shockwave-ewertoncoutinho.vercel.app/">
				<a target="_blank" rel="noopener" aria-label="Shock Wave">
					<Image
						alt="Shock Wave"
						src="/image/shockwave.png"
						as="image"
						layout="fill"
						objectFit="none"
						quality={75}
						priority
					/>
				</a>
			</Link>
		</article>
	)
}
