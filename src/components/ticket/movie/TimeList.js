import React, { useEffect } from 'react';

//modulse
import { Row, Col, Radio } from 'antd';

const TimeList = (props) => {
	const { MovieAPI, decide, chooseTime } = props;
	let timeArray;
	if (decide.movie) {
		for (let i = 0; i < MovieAPI.dailyBoxOfficeList.length; i++) {
			if (MovieAPI.dailyBoxOfficeList[i].movieNm === decide.movie) {
				timeArray = MovieAPI.dailyBoxOfficeList[i].show[decide.date];
			}
		}
	}
	return (
		<>
			{!decide.movie || !decide.theater || !decide.date ? (
				<Row>예약가능한 시간이 없습니다.</Row>
			) : (
				<Radio.Group>
					{timeArray &&
						timeArray.map((ele, idx) => {
							return (
								<Radio.Button key={`time-${idx}`} value={ele} onClick={(e) => chooseTime(e)}>
									{ele}
								</Radio.Button>
							);
						})}
				</Radio.Group>
			)}
		</>
	);
};

export default TimeList;
