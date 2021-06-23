import React from 'react';
const makeData = (number, titlePrefix = 'Tab') => {
  const data = [];
  for (let i = 0; i < number; i++) {
    data.push({
      title: `${titlePrefix} ${i}`,
      content: "Content " + i
    });
  }
  return data;
}

export {makeData};