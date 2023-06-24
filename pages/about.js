import Layout from "../components/layout";
import Head from "next/head";

export default function About() {
    return (
        <Layout
            customHeader={<AboutHeader></AboutHeader>}
            headerBgImage="/images/about-bg.jpg"
        >
            <Head>
                <title>About</title>
            </Head>
            <p>
                Hi, I'm Law, and I graduated from the University of Information
                in 2020 with a degree in Information System. My interests are in
                Software Engineering, and I love to create beautiful and
                performant products with delightful user experiences.
            </p>
        </Layout>
    );
}

const AboutHeader = () => {
    return (
        <div className="page-heading">
            <h1>About Me</h1>
            <hr className="small" />
            <span className="subheading">Law Thai - Software Engineer</span>
        </div>
    );
};
