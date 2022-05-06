export default function CardWork(props) {
    return (
        <article className={['container', 'card-work', props.color].join(' ')}>
            <h1>Clone Instagram.</h1>
            <nav>
                <h2 className="font-zero">Technologies</h2>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
            </nav>
            <div></div>
        </article>
    )
}
