import React from 'react';

//modules
import styled from 'styled-components';

//layout
const ButtonStyle = styled.div`
  display: inline-block;
  margin-right: 10px;
  padding: 10px 20px;
  box-sging: border-box;
  border: 1px solid #000;
  border-radius: 5px;
  color: #666;
`
const BookingSubNai = () => {
  const buttonList = [
    {
      name: 'ENGLISH',
      lang: 'ko'
    },
    {
      name: '예매가이드',
      modal: false
    },
    {
      name: '제휴할인혜택',
      path: '/'
    },
    {
      name: '상영시간표',
      icon: '',
      modal: false
    },
    {
      name: '예매 다시하기',
      icon: '',
      modal: false
    },
    
  ]
  return (
    buttonList.map((ele, idx)=> {
      return (
        <ButtonStyle key={`bookingNai-${idx}`}>{ele.name} </ButtonStyle>
      )
    })
  )
}

export default BookingSubNai;