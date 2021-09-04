export default function CardWork(props){
    return(
        <article className={["container", "card-work", props.color].join(' ')}>
            <h1>Clone Instagram.</h1>
            <nav>
                <ul>
                    <h2 className="font-zero">Technologies</h2>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
            </nav>
            <div></div>
        </article>
    )
}