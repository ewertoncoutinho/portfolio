import Link from 'next/link'
import Image from 'next/image'

export default function CardWork({ url, img, color = '#000' }) {
	return (
		<>
			<Link href={url}>
				<a target="_blank" rel="noopener" aria-label="Shock Wave">
					<article
						style={{ background: color }}
						className={['card-work'].join(' ')}
					>
						<Image
							alt="Shock Wave"
							src={img}
							as="image"
							layout="fill"
							objectFit="contain"
							quality={100}
							priority
						/>
					</article>
				</a>
			</Link>
		</>
	)
}
