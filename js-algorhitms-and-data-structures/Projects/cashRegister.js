function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };

  const cidObject = Object.fromEntries(cid);

  const totalCid = Object.values(cidObject).reduce(
    (acc, curr) => acc + curr,
    0
  );

  let changeDue = cash * 100 - price * 100;

  if (changeDue > totalCid * 100) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeDue === totalCid * 100) {
    return { status: "CLOSED", change: cid };
  }

  const change = [];

  for (let i = cid.length - 1; i >= 0; i--) {
    const denomination = cid[i][0];
    let value = cid[i][1] * 100;
    const currencyValue = currencyValues[denomination];

    let count = 0;

    while (changeDue >= currencyValue && value > 0) {
      changeDue -= currencyValue;
      value -= currencyValue;
      count++;
    }

    if (count > 0) {
      change.push([denomination, (count * currencyValue) / 100]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
