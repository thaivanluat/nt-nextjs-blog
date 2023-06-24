import Head from "next/head";
import Link from "next/link";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";

export const siteTitle = "Next.js Sample Website";

function Layout({ children, home, customHeader, headerBgImage }) {
    return (
        <div>
            <Navbar />
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Personal website using Next.js by Luat Thai"
                />
            </Head>
            <Header bgImage={headerBgImage}>{customHeader}</Header>

            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            {children}
                        </div>
                    </div>
                </div>
            </main>

            {!home && (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <Link href="/">← Back to home</Link>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Layout;
