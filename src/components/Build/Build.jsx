import { React } from 'react';
import { format, intervalToDuration } from 'date-fns';
import { ReactComponent as DoneIcon } from '../../assets/icons/done.svg';
import { ReactComponent as FailIcon } from '../../assets/icons/fail.svg';
import { ReactComponent as PendingIcon } from '../../assets/icons/clock.svg';
import { PropTypes } from 'prop-types';

import './Build.css';

export function Build(props) {
  const { id, message, branch, hash, author, date, buildTime, status } = props;

  const statusIcons = {
    done: <DoneIcon className="build__icon" />,
    fail: <FailIcon className="build__icon" />,
    pending: <PendingIcon className="build__icon" />,
  };

  const duration = intervalToDuration({ start: 0, end: buildTime * 1000 });

  return (
    <div className="build">
      <div className="build__commit-container">
        <div className="build__icon-container">{statusIcons[status]}</div>
        <div className="build__information-container">
          <div className="build__title-container">
            <span className={`build__id build__id--${status}`}>#{id}</span>
            <span className="build__title">{message}</span>
          </div>
          <div className="build__commit-info">
            <div className="build__head-container">
              <span className="build__branch">{branch}</span>
              <span className="build__hash">{hash}</span>
            </div>
            <div className="build__author">{author}</div>
          </div>
        </div>
      </div>
      <div className="build__time-container">
        <span className="build__date">{format(date, 'dd MMM, hh:mm')}</span>
        <span className="build__buildTime">
          {duration.hours > 0 && duration.hours + ' h '}
          {duration.minutes > 0 && duration.minutes + ' min'}
        </span>
      </div>
    </div>
  );
}

Build.propTypes = {
  id: PropTypes.number,
  message: PropTypes.string,
  branch: PropTypes.string,
  hash: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.number,
  buildTime: PropTypes.number,
  status: PropTypes.string,
};
