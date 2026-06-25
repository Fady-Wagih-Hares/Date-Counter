const DateDisplay = ({ count }) => {
  const dateNowCount = new Date();
  // console.log(dateNowCount);
  dateNowCount.setDate(dateNowCount.getDate() + count);
  return (
    <div className="date">
      {count === 0
        ? "Today is "
        : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      <span>{dateNowCount.toDateString()}</span>
    </div>
  );
};
export default DateDisplay;
