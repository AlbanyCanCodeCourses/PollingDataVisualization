export function parseCurrency(currency) {
  return parseFloat(currency.replace(/[$,]/g, ""));
}

export function sumSalaryChange(acc, obj, i) {
  acc += parseCurrency(obj.salarychange);
  return acc;
}

export function avg(arr) {
  return Math.round(arr.reduce(sumSalaryChange, 0) / arr.length);
}

export function calculateMedian(arr) {
  // console.log(arr);
  arr.sort((a, b) => a - b);
  let half = Math.floor(arr.length / 2);
  return arr.length % 2
    ? Math.round(arr[half])
    : Math.round((arr[half] + arr[half + 1]) / 2);
}
