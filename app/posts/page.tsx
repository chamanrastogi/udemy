
import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "force-cache" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="mb-1">Posts</h1>
          <p className="text-muted mb-0">
            Posts fetched from JSONPlaceholder API
          </p>
        </div>

        <a
          href="https://jsonplaceholder.typicode.com/posts"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          Test API
        </a>
      </div>

      <div className="row g-4">
        {posts.map((post) => (
          <div className="col-md-6 col-lg-4" key={post.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <span className="badge bg-primary mb-3">
                  Post #{post.id}
                </span>

                <h5 className="card-title text-capitalize">
                  {post.title}
                </h5>

                <p className="card-text text-muted">
                  {post.body}
                </p>
              </div>

              <div className="card-footer bg-white">
                <small className="text-muted">
                  User ID: {post.userId}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link href="/" className="btn btn-dark">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
