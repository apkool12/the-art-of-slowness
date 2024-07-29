import React from 'react';
import useCalendar from '../components/useCalendar';
import 느림이 from '../image/느림이1.png';
import icon_1 from '../image/Routin_icon.png';
import Calendar from '../components/Calender'; // Calendar 컴포넌트를 임포트
import SmallCalendar from '../components/SmallCalendar';
import './MonthlyStat.css';

const MonthlyStat = () => {
	const { weekCalendarList, currentDate, goToPreviousMonth, goToNextMonth } = useCalendar();

	return (
		<div className='Monthly-back'>
			<div className="monthly-stat">
				<img src={느림이} alt="icon" />
				<section className="stat-header">
					<Calendar
						weekCalendarList={weekCalendarList}
						currentDate={currentDate}
						goToPreviousMonth={goToPreviousMonth}
						goToNextMonth={goToNextMonth}
					/>

					<section className="legend">
						<span className="legend-item completed"></span> 100% 완료
						<span className="legend-item partial"></span> 50% 이상 완료
						<span className="legend-item little"></span> 10% 이상 완료
						<span className="legend-item ongoing"></span> 현재 진행 중 (오늘)
						<span className="legend-item none"></span> 아직 없음			
					</section>
					
					<section className="legend-activity">
						<div className="legend-activity-card">
							<p>루틴 수행</p>
							<p2>저속노화 발걸음을 수행한 날</p2>
							<span>12일</span>
						</div>
						<div className="legend-activity-card">
							<p>100% 달성</p>
							<p2>루틴 100% 달성한 날</p2>
							<span>12일</span>
						</div>
						<div className="legend-activity-card">
							<p>최대 발걸음 연속일</p>
							<p2>모든 루틴을 수행한 날들의 연속</p2>
							<span>12일</span>
						</div>
					</section>
				</section>
				
				<section className="activity-stat">
					<div className="activity-header">
						<img src={icon_1} alt="icon" />
						<h3>루틴 발걸음</h3>
						<span>매월 1일부터 오늘까지의 기록이 반영된 결과예요</span>
					</div>
				</section>

				<div className="activity-steps">
          <div className="activity-step">
            <div className="calendar-small">
              <SmallCalendar weekCalendarList={weekCalendarList} />
            </div>
            <div className="calendar-small">
              <SmallCalendar weekCalendarList={weekCalendarList} />
            </div>
            <div className="calendar-small">
              <SmallCalendar weekCalendarList={weekCalendarList} />
            </div>
          </div>
        </div>

				<div className="top-activities">
					<h3>이 달의 TOP 3</h3>
					<div className="top-activity">
						<div className="top-activity-card">
							<p>과일 섭취하기</p>
							<span>12일</span>
						</div>
						<div className="top-activity-card">
							<p>근력 운동하기</p>
							<span>11일</span>
						</div>
						<div className="top-activity-card">
							<p>30분 산책하기</p>
							<span>9일</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MonthlyStat;
