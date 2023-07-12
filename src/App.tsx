import "./App.scss";
import daysObj from "./data.json";

function App() {
  const balance: number = 921.48;
  const monthTotal: number = 478.33;
  const stat: number = 2.4;
  const currentDay = new Date().toDateString().toLocaleLowerCase().slice(0, 3);

  const spendingByDaysList = daysObj.map((dayObj) => {
    const dayColor = currentDay === dayObj.day ? "cayn" : "red";
    return (
      <div key={dayObj.day}>
        <div className="container">
          <div
            className={`amount ${dayColor}`}
            style={{ height: `${dayObj.amount}%` }}
            onMouseEnter={() => console.log(dayObj.amount)}
          >
            {dayObj.amount}
          </div>
        </div>{" "}
        <div className="day">{dayObj.day}</div>{" "}
      </div>
    );
  });

  return (
    <>
      <div className="balance">
        {" "}
        <div className="h2">
          <h2>My balance</h2>{" "}
          <div className="total-balance">{`$${balance}`}</div>{" "}
        </div>
        <div className="circles-container">
          <div className="circle white"></div>{" "}
          <div className="circle black"></div>
        </div>
      </div>

      <div className="spending">
        <h1>Spending - Last 7 days</h1>
        <div className="spending-week">{spendingByDaysList}</div>

        <div className="total">
          <div className="month-total">
            <span>Total this month</span>${monthTotal}
          </div>
          <div>
            <div className="stat">
              <span>+{stat}%</span>
              from last month
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
