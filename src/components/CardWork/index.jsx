import Link from 'next/link'
import Image from 'next/image'

export default function CardWork(props) {
	return (
		<Link href="https://shockwave-ewertoncoutinho.vercel.app/">
			<a target="_blank" rel="noopener" aria-label="Shock Wave">
				<article className={['card-work', props.color].join(' ')}>
					<Image
						alt="Shock Wave"
						src="/image/shockwave.png"
						as="image"
						layout="fill"
						objectFit="cover"
						quality={75}
						priority
					/>
				</article>
			</a>
		</Link>
	)
}
