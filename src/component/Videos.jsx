import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useVideoList from '../hooks/useVideoList';
import Error from './UI/Error';
import Video from './Video';

export default function Videos() {
    const [page, setPage] = useState(1);
    const limit = 15;
    const { loading, error, videos, hasMore } = useVideoList(page, limit);
    let content = null;
    if (loading && !error) {
        content = <p>Loading....</p>;
    } else if (!loading && error) {
        content = <Error text="Something was wrong" />;
    } else if (!loading && !error && videos.length === 0) {
        content = <Error text="Not Found" />;
    } else {
        content = (
            <InfiniteScroll
                dataLength={videos.length}
                next={() => setPage((prevPage) => prevPage + limit)}
                hasMore={hasMore}
                loader="Loading ...."
            >
                {videos.map((video) => {
                    if (video?.noq !== 0) {
                        return (
                            <Link state={{ title: video.title }} to={`/quiz/${video.youtubeID}`}>
                                <Video key={video.youtubeID} video={video} />
                            </Link>
                        );
                    }
                    return <Video key={video.youtubeID} video={video} />;
                })}
            </InfiniteScroll>
        );
    }
    return content;
}
