import CardWork from "../CardWork"

export default function Works () {
    return(
        <section className={["works"].join(' ')}>
            <div className={["container"].join(' ')}>
                <h1 className="my-works--text">Get to know<br></br>my works.</h1>
            </div>
            <CardWork></CardWork>
        </section>
    )
}