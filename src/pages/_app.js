import 'bulma/css/bulma.css'
import Link from "next/link"

function App({ Component, pageProps }) {
    return (
        <>
            <div>
                <Link href="/"><a>Home</a></Link>
                {" "}
                <Link href="/about"><a>About</a></Link>
            </div>
            <Component {...pageProps} />
        </>
    )
}

export default App