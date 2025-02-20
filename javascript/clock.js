// Getting current time with AM/PM depending on time
export const getCurrentTime = () => {
  let date = new Date().toString().slice(16, 24);
  let currentTime = "00:00:00 AM";

  if (Number(date.substring(0, 2)) > 12) {
    currentTime = `${date} PM`;
  } else {
    currentTime = `${date} AM`;
  }
  return currentTime;
};
