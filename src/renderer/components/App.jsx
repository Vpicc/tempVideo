import React from 'react';
import { hot } from 'react-hot-loader/root';
import fs from 'fs';
import '@src/page/guide/global.scss';
import stream from '@src/controllers/stream';

export default hot(() => (
  <div>
    <video id="videoPlayer" controls autoPlay>

      <source src={stream} type="video/mp4" />
    </video>
  </div>
));
