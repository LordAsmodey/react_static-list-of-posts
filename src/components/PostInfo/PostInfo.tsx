import React from 'react';
import { Post } from '../../types/post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      {' Posted by  '}
      <UserInfo user={post.user} />
    </div>
    <p className="PostInfo__body">
      {post.body}
    </p>
    {post.comments.length > 0
      ? <CommentList comments={post.comments} />
      : (
        <>
          <hr />
          <b>No comments yet</b>
        </>
      )}

  </div>
);