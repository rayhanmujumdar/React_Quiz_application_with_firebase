import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideoList(page, limit = 10) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        const fetchVideos = async () => {
            // firebase connect
            const db = getDatabase();
            const videoRef = ref(db, '/videos');
            // video data query
            const queryVideo = query(
                videoRef,
                orderByKey(),
                startAt(`${page}`),
                limitToFirst(limit)
            );
            try {
                const snapshot = await get(queryVideo);
                setLoading(false);
                if (snapshot.exists()) {
                    const allVideos = snapshot.val();
                    setVideos((prevVideos) => [...prevVideos, ...Object.values(allVideos)]);
                } else {
                    setHasMore(false);
                }
            } catch (err) {
                setLoading(false);
                setError(true);
            }
        };
        fetchVideos();
    }, [page, limit]);
    return { videos, loading, error, hasMore };
}
