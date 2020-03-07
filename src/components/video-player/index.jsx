import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const VideoPlayer = ({ src, className, hidden }) => {
  const classList = classNames('video-player', className, {
    'video-player--hidden': hidden,
  });
  return (
    <div className={classList}>
      <video src={src} id="videoPlayer" controls autoPlay>
        <track kind="captions" />
        <source type="video/mp4" />
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  hidden: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  className: '',
  hidden: false,
};


export default VideoPlayer;
