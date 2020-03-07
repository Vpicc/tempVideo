/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDropzone } from 'react-dropzone';
import './style.scss';

const Dropzone = ({ onDrop, className, hidden }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const classList = classNames('drop-zone', className, {
    'drop-zone--hidden': hidden,
  });
  return (
    <div {...getRootProps()} className={classList}>
      <input {...getInputProps()} />
      <div className="drop-zone__box">
        {isDragActive
          ? <p className="drop-zone__text">Drop files here!</p>
          : <p className="drop-zone__text">Drag and drop some file here, or click to upload</p>}
      </div>
    </div>
  );
};

Dropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  className: PropTypes.string,
  hidden: PropTypes.bool,
};

Dropzone.defaultProps = {
  className: '',
  hidden: false,
};

export default Dropzone;
