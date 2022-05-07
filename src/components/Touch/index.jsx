export default function Touch({ touch }) {
    return (
        <>
            <h1 className="mb-40">{touch}</h1>
            <nav className="touch">
                <ul>
                    <li>
                        <a
                            aria-label="Email"
                            href="mailto:ewertoncoutinho@hotmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            E-mail
                        </a>
                    </li>
                    <li>
                        <a
                            aria-label="Github"
                            href="https://github.com/ewertoncoutinho"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            aria-label="Twitter"
                            href="https://twitter.com/ewertoncoutinho"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            aria-label="Linkedin"
                            href="https://linkedin.com/in/ewertoncoutinho"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
