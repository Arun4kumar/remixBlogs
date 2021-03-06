import { Link, redirect } from "remix";
import db from "~/utils/db.server";

export const action = async ({ request }) => {
  const form = await request.formData();

  const title = form.get("title");
  const body = form.get("body");

  const fields = { title, body };

  const post = await db.post.create({ data: fields });

  console.log(fields);

  return redirect(`/posts/${post.id}`);
};

const Newpost = () => {
  return (
    <>
      <div className="page-header">
        <h1>New Post</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>
      <div className="page-content">
        <form method="POST" className="form">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="body">Post Body</label>
            <textarea name="body" id="body" />
          </div>
          <button className="btn btn-block" type="submit">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
};

export function ErrorBoundary({ error }) {
  console.log(error);
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default Newpost;
