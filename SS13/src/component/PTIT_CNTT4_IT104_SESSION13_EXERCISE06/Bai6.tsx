import {Component} from 'react'
type Post = {
    id: number,
    title: string,
    content: string,
    author: string,
}
type PostList = {
    posts: Post,
}
export default class DetailPost extends Component<PostList> {
  render(){
    const { posts } = this.props;
    return (
      <div>
        <h2>Chi tiết bài viết</h2>
        <p>Id: {posts.id}</p>
        <p>Tiêu đề: {posts.title}</p>
        <p>Nội dung: {posts.content}</p>
        <p>Tác giả: {posts.author}</p>
      </div>
    );
  }
}
