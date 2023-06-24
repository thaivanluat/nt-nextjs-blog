import Link from "next/link";
import Date from "../date";
import Pagination, { paginate } from "../../components/pagination";
import { useState } from "react";

export default function BlogList({ blogs }) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;
    const onPageChange = (page) => {
        setCurrentPage(page);
    };
    const paginatedPosts = paginate(blogs, currentPage, pageSize);

    return (
        <>
            {paginatedPosts.map((item, i) => {
                return (
                    <div key={i}>
                        <div className="post-preview">
                            <h2 className="post-title">
                                <Link href={`/posts/${item.id}`}>
                                    {item.title}
                                </Link>
                            </h2>
                            <p className="post-meta">
                                Posted by {item.owner} on{" "}
                                <Date dateString={item.date} />
                            </p>
                        </div>
                        <hr />
                    </div>
                );
            })}

            <Pagination
                items={blogs.length}
                currentPage={currentPage} // 1
                pageSize={pageSize} // 2
                onPageChange={onPageChange}
            />
        </>
    );
}
