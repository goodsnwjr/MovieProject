import React from 'react';

//modulse
import {Row, Col} from 'antd';

const TheaterList = (props) => {
  const {chooseMovie, setDecide, theater} = props;
  console.log(theater);
  let theaterList = theater && theater.codes;
// #  지역코드 : area code
  // const list = [
  //   {"0105001" : "서울시"},
  //   "0105002" : "경기도",
  //   "0105015" : "인천시",
  //   "0105003" : "강원도",
  //   "0105013" : "대전시",
  //   "0105004" : "충청북도",
  //   "0105005" : "충청남도",
  //   "0105012" : "대구시",
  //   "0105011" : "부산시",
  //   "0105014" : "울산시",
  //   "0105006" : "경상북도",
  //   "0105007" : "경상남도",
  //   "0105008" : "전라북도",
  //   "0105009" : "전라남도",
  //   "0105010" : "제주도",
  //   "0105016" : "광주시",
  //   "0105017" : "세종시"
  // ]
  // const list = {
  //   "0105001" : "서울시",
  //   "0105002" : "경기도",
  //   "0105015" : "인천시",
  //   "0105003" : "강원도",
  //   "0105013" : "대전시",
  //   "0105004" : "충청북도",
  //   "0105005" : "충청남도",
  //   "0105012" : "대구시",
  //   "0105011" : "부산시",
  //   "0105014" : "울산시",
  //   "0105006" : "경상북도",
  //   "0105007" : "경상남도",
  //   "0105008" : "전라북도",
  //   "0105009" : "전라남도",
  //   "0105010" : "제주도",
  //   "0105016" : "광주시",
  //   "0105017" : "세종시"
  // }

  return (
    <Row>
      {
        theater && theaterList.map((ele, idx) => {
          return(
            <Row key={'theater-list-'+idx}>
              <Col>{ele.korNm}</Col>
            </Row>
          )
        }) 
      }
    </Row>
  ) 
};

export default TheaterList;