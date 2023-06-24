import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (
        <Layout
            customHeader={
                <DetailPostHeader postData={postData}></DetailPostHeader>
            }
            headerBgImage="/images/post-bg.jpg"
        >
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
    );
}

const DetailPostHeader = ({ postData }) => {
    return (
        <div className="post-heading">
            <h1>{postData.title}</h1>
            <h2 className="subheading">{postData.subHeading}</h2>
            <span className="meta">
                Posted by <a href="#">{postData.owner}</a> on{" "}
                <Date dateString={postData.date} />
            </span>
        </div>
    );
};
