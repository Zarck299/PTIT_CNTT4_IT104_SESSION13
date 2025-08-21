type Post = {
    id: number,
    title: string,
    content: string,
    author: string,
}
type PostList = {
    posts: Post,
}
export default function DetailPost({posts}: PostList) {
  return (
    <div style={{marginBottom: "20px"}}>
      <p><strong>Id:</strong> {posts.id}</p>
      <p><strong>Title:</strong> {posts.title}</p>
      <p><strong>Content:</strong> {posts.content}</p>
      <p><strong>Author:</strong> {posts.author}</p>
      <hr />
    </div>
  )
}
