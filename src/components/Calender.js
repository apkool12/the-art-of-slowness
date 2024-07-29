import React from 'react';
import PropTypes from 'prop-types';
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = ({ weekCalendarList, currentDate, goToPreviousMonth, goToNextMonth }) => {
  return (
    <div className="calendar-container">
      <div className="title">
        <button className="nav-button" onClick={goToPreviousMonth}>&lt;</button>
        <h1>{currentDate.getMonth() + 1}월</h1>
        <button className="nav-button" onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="calendar">
        <table>
          <thead>
            <tr>
              {DAY_LIST.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weekCalendarList.map((week, i) => (
              <tr key={i}>
                {week.map((day, j) => (
                  <td key={j} className={day ? 'filled' : 'empty'}>
                    {day || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  weekCalendarList: PropTypes.arrayOf(PropTypes.array).isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  goToPreviousMonth: PropTypes.func.isRequired,
  goToNextMonth: PropTypes.func.isRequired,
};

export default Calendar;
