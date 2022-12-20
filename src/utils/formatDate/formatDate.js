const formatDate = (time = '') => {
  const dates = time.split('T');
  const dateList = dates[0].split('-');

  const year = dateList[0];
  const month = dateList[1];
  const day = dateList[2];

  return `${day}/${month}/${year}`;
};

export default formatDate;
