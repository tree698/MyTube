import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, onClickVideo, display }) => {
  const displayType = display === 'grid' ? styles.grid : styles.list;

  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onClickVideo(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={video.snippet.thumbnails.high.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{video.snippet.title}</p>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
