import React, { useState, useEffect } from 'react';
import NumberOfPeople from './NumberOfPeople.js';

const SelectSeet = (props) => {
  const { peopleType, setPeoType, peoType } = props;
  console.log(peopleType);
  return (
    <div>
      {peopleType.map((ele, idx) => {
        return <NumberOfPeople key={ele + idx} setPeoType={setPeoType} peoType={peoType} type={ele} />;
      })}
    </div>
  );
};

export default SelectSeet;
