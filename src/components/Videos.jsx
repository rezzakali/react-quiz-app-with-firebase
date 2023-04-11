import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useVideoList from '../hooks/useVideoList';
import Video from './Video';

function Videos() {
  const [page, setPage] = useState(1);
  const { error, loading, videos, hasMore } = useVideoList(page);

  let content = null;
  if (loading) content = <div>Loading...</div>;
  if (!loading && error) content = <div>{error}</div>;

  if (!loading && !error && videos?.length === 0)
    content = <div>No videos found!</div>;

  if (!loading && !error && videos?.length > 0)
    content = (
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={hasMore}
        next={() => setPage(page + 8)}
        loader={<h4>Loading...</h4>}
        endMessage={<p>Yay! You have seen it all</p>}
      >
        {videos.map((video) =>
          video.noq === 0 ? (
            <Video
              title={video.title}
              noq={video.noq}
              id={video.youtubeID}
              key={video.youtubeID}
            />
          ) : (
            <Link
              to={`/quiz/${video.youtubeID}`}
              state={{ videoTitle: video.title }}
              key={video.youtubeID}
            >
              <Video title={video.title} noq={video.noq} id={video.youtubeID} />
            </Link>
          )
        )}
      </InfiniteScroll>
    );

  return <div>{content}</div>;
}

export default Videos;
