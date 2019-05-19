let count = 0;

export function parseCurrency(currency) {
  return parseFloat(currency.replace(/[$,]/g, ""));
}

export function sumSalaryChange(acc, obj, i) {
  count = i;
  acc += parseCurrency(obj.salary_change);
  return acc;
}

export function avg(obj) {
  return Math.round(obj.reduce(sumSalaryChange, 0) / ++count);
}

export function calculateMedian(arr) {
  let half = Math.floor(arr.length / 2);
  return arr.length % 2
    ? Math.round(arr[half])
    : Math.round((arr[half] + arr[half + 1]) / 2);
}
