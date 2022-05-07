export default function CardAbout({ greeting, about }) {
    return (
        <div className="container">
            <div className="card-about">
                <header>
                    <h2>{greeting}</h2>
                </header>
                <button className="about-me--text">
                    <h2>{about}</h2>
                    <svg
                        className="icon-arrow"
                        width="11"
                        height="16"
                        fill="#6E6E73"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M.484.42C.331.555.21.712.126.885a1.262 1.262 0 000 1.094c.083.173.205.33.358.463l6.428 5.56-6.428 5.56c-.31.268-.483.631-.483 1.01 0 .38.174.743.483 1.01.31.269.73.419 1.168.419.439 0 .859-.15 1.168-.418l7.605-6.578c.153-.132.275-.29.358-.463a1.262 1.262 0 000-1.094 1.434 1.434 0 00-.358-.463L2.82.407C2.19-.138 1.13-.138.484.42z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
