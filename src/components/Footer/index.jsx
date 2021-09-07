export default function Footer(){
    return (
        <footer className="container contacts font-size-medium">
            <article className="mx-20">
                <h1 className="mb-40">Get in touch</h1>
                <nav>
                    <h2 className="font-zero">Contacts</h2>
                    <ul>
                        <li><a aria-label="Email" href="mailto:contato@ewertoncoutinho.com" target="_blank" rel="noopener noreferrer">Email</a></li>
                        <li><a aria-label="Github" href="https://github.com/ewertoncoutinho" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><a aria-label="Twitter" href="https://twitter.com/ewertoncoutinho" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a aria-label="Linkedin" href="https://www.linkedin.com/in/ewertoncoutinho" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    </ul>
                </nav>
                <p className="copy color-gray">@ 2021 Ewerton Coutinho</p>
            </article>
        </footer>
    )
}