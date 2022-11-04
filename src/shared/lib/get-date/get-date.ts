export const getDate = (date: Date) => {
  return {
    dateAsNumber: parseInt(
      `${date.getFullYear()}${date.getMonth() + 1}${
        date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      }`
    ),
    dateAsString: `${
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    }.${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }.${date.getFullYear()}`,
  };
};
