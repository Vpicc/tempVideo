import React, { useCallback, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import '@src/page/guide/global.scss';
import VideoPlayer from '@src/components/video-player';
import Dropzone from '@src/components/drop-zone';
import './style.scss';

export default hot(() => {
  const [src, setSrc] = useState('');
  const onDrop = useCallback((acceptedFiles) => {
    const [file] = acceptedFiles;
    setSrc(URL.createObjectURL(file));
  }, []);
  const srcEmpty = src === '';

  return (
    <div className="page">
      <Dropzone onDrop={onDrop} hidden={!srcEmpty} />
      <VideoPlayer src={src} hidden={srcEmpty} />
    </div>
  );
});
