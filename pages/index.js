import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import BlogList from "../components/blog/blog_list";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout
            home={true}
            customHeader={<HomeHeader></HomeHeader>}
            headerBgImage="/images/home-bg.jpg"
        >
            <Head>
                <title>{`Home - ${siteTitle}`}</title>
            </Head>
            <BlogList blogs={allPostsData}></BlogList>
        </Layout>
    );
}

const HomeHeader = () => {
    return (
        <div className="site-heading">
            <h1>My Blog</h1>
            <hr className="small" />
            <span className="subheading">Personal Blog using Next JS</span>
        </div>
    );
};
