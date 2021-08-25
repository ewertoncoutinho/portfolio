export default function Hello ({ 
  greeting = "Hi, I'm", 
  name = "Ewerton", 
  caption = "I'm a UX/UI Designer and Full-stack Developer", 
  colorIcon = "#6E6E73"
}) {

  return (
    <div className={"container"}>
      <div className={["presentation", "ml-20"].join(' ')}>
        <h1 className="m-0">
          <div>{ greeting }&nbsp;</div>
          <div>{ name }</div>
        </h1>
        <section>
          <h2 className={["mt-20", "font-size-small", "color-gray"].join(" ")}>{ caption }</h2>
        </section>
        <nav className={["my-social", "mt-50", "font-zero"].join(" ")}>
          <h2 className="font-zero">My social networks</h2>
          <ul>
            <li>
              <a aria-label="Linkedin" href="https://www.linkedin.com/in/ewertoncoutinho/" target="_blank" rel="noopener noreferrer">
                Linkedin
                <svg className="social" width="25" height="25" viewBox="0 0 25 25" fill={colorIcon} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 2.364A1.958 1.958 0 011.958.406h19.52a1.957 1.957 0 011.96 1.958v19.52a1.959 1.959 0 01-1.96 1.96H1.958A1.958 1.958 0 010 21.884V2.365zm9.277 6.978h3.174v1.594c.458-.916 1.63-1.74 3.39-1.74 3.377 0 4.177 1.825 4.177 5.173v6.202H16.6v-5.44c0-1.907-.458-2.983-1.621-2.983-1.614 0-2.285 1.16-2.285 2.983v5.44H9.277V9.342zm-5.86 11.083h3.418V9.195H3.418V20.425zM7.325 5.533a2.198 2.198 0 11-4.394.096 2.198 2.198 0 014.394-.096z"/></svg>
              </a>
            </li>
            <li>
              <a aria-label="Github" className="mx-15" href="https://github.com/ewertoncoutinho/" target="_blank" rel="noopener noreferrer">
                Github
                <svg className="social" width="25" height="25" viewBox="0 0 25 25" fill={colorIcon} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.078.406C5.439.406.062 5.783.062 12.421c0 5.317 3.44 9.808 8.216 11.4.6.105.826-.256.826-.57 0-.286-.015-1.233-.015-2.239-3.019.556-3.8-.736-4.04-1.412-.135-.345-.721-1.411-1.232-1.697-.42-.225-1.021-.78-.015-.796.946-.015 1.622.871 1.848 1.232 1.08 1.817 2.808 1.306 3.499.991.105-.78.42-1.306.766-1.607-2.673-.3-5.467-1.337-5.467-5.932 0-1.307.466-2.388 1.232-3.23-.12-.3-.541-1.531.12-3.183 0 0 1.006-.316 3.304 1.231a11.15 11.15 0 013.004-.405c1.021 0 2.042.135 3.003.405 2.298-1.562 3.305-1.231 3.305-1.231.66 1.652.24 2.883.12 3.184.766.84 1.231 1.907 1.231 3.229 0 4.61-2.808 5.632-5.482 5.932.436.376.811 1.097.811 2.223 0 1.607-.015 2.899-.015 3.304 0 .316.226.69.827.57a12.035 12.035 0 008.185-11.399c0-6.638-5.377-12.015-12.015-12.015z"/></svg>
              </a>
            </li>
            <li>
              <a aria-label="Twitter" href="https://twitter.com/ewertoncoutinho" target="_blank" rel="noopener noreferrer">
                Twitter
                <svg className="social" width="25" height="25" viewBox="0 0 25 20" fill={colorIcon} xmlns="http://www.w3.org/2000/svg"><path d="M23.561 2.793a9.64 9.64 0 01-2.762.757A4.825 4.825 0 0022.915.89a9.61 9.61 0 01-3.054 1.166 4.809 4.809 0 00-8.193 4.386 13.653 13.653 0 01-9.911-5.025 4.792 4.792 0 00-.651 2.418c0 1.667.848 3.14 2.138 4.003a4.792 4.792 0 01-2.177-.602v.06a4.812 4.812 0 003.857 4.715 4.841 4.841 0 01-2.173.083 4.812 4.812 0 004.492 3.34 9.651 9.651 0 01-7.118 1.992 13.602 13.602 0 007.37 2.161c8.846 0 13.683-7.327 13.683-13.682 0-.207-.006-.416-.015-.621a9.769 9.769 0 002.4-2.49h-.002z"/></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};