// 转化成日期格式
export const toDate = function (date) {
  return isDate(date) ? new Date(date) : null
}

// 判断是否为日期
export const isDate = function (date) {
  if (date === null || date === undefined) return false
  if (isNaN(new Date(date).getTime())) return false
  if (Array.isArray(date)) return false // deal with `new Date([ new Date() ]) -> new Date()`
  return true
}

// 根据年月获取当月多少天
export const getDayCountOfMonth = function (year, month) {
  let temp = new Date(year, month, 0)
  return temp.getDate()
}

// 根据年获取当年多少天
export const getDayCountOfYear = function (year) {
  const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
  return isLeapYear ? 366 : 365
}

// 根据日期获取当月第一天是周几（返回1-7）
export const getFirstDayOfMonth = function (date) {
  const temp = new Date(date.getTime())
  temp.setDate(1)
  return temp.getDay()
}

// 传入日期与间隔，得日期前间隔天数
export const prevDate = function (date, amount = 1) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount)
}

// 传入日期与间隔，得日期后间隔天数
export const nextDate = function (date, amount = 1) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount)
}

// 放入6*7格子，传入年月获取从周一到周日算，第一个格子的日期
export const getStartDateOfMonth = function (year, month) {
  const result = new Date(year, month, 1)
  const day = result.getDay()
  if (day === 0) {
    return prevDate(result, 6)
  } else {
    return prevDate(result, day - 1)
  }
}

// 获取传入日期是当年第几周
export const getWeekNumber = function (src) {
  if (!isDate(src)) return null
  const date = new Date(src.getTime())
  date.setHours(0, 0, 0, 0)
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7))
  // January 4 is always in week 1.
  const week1 = new Date(date.getFullYear(), 0, 4)
  // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
  // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
      7
    )
  )
}

// 返回数组，数组内有n个值从0~n-1
export const range = function (n) {
  return Array.apply(null, { length: n }).map((_, n) => n)
}

// 根据日期和天数，返回日期前几天的dd，数组形式，如
// getPrevMonthLastDays(2019-10-17,10)
// [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
export const getPrevMonthLastDays = (date, amount) => {
  if (amount <= 0) return []
  const temp = new Date(date.getTime())
  temp.setDate(0)
  const lastDay = temp.getDate()
  return range(amount).map((_, index) => lastDay - (amount - index - 1))
}

// 根据日期，返回当月所有dd，数组形式，如
// getMonthDays(2019-10-17)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
export const getMonthDays = date => {
  const temp = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const days = temp.getDate()
  return range(days).map((_, index) => index + 1)
}

// 设置日期
export const changeYearMonthAndClampDate = function (date, year, month) {
  // clamp date to the number of days in `year`, `month`
  // eg: (2010-1-31, 2010, 2) => 2010-2-28
  const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month))
  return modifyDate(date, year, month, monthDate)
}

// 更新日期
export const modifyDate = function (date, y, m, d) {
  return new Date(
    y,
    m,
    d,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  )
}

// 返回上个月
export const prevMonth = function (date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  return month === 0
    ? changeYearMonthAndClampDate(date, year - 1, 11)
    : changeYearMonthAndClampDate(date, year, month - 1)
}

// 返回下个月
export const nextMonth = function (date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  return month === 11
    ? changeYearMonthAndClampDate(date, year + 1, 0)
    : changeYearMonthAndClampDate(date, year, month + 1)
}

// 返回上年
export const prevYear = function (date, amount = 1) {
  const year = date.getFullYear()
  const month = date.getMonth()
  return changeYearMonthAndClampDate(date, year - amount, month)
}
// 返回下年
export const nextYear = function (date, amount = 1) {
  const year = date.getFullYear()
  const month = date.getMonth()
  return changeYearMonthAndClampDate(date, year + amount, month)
}

export const extractDateFormat = function (format) {
  return format
    .replace(/\W?m{1,2}|\W?ZZ/g, '')
    .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '')
    .trim()
}

export const extractTimeFormat = function (format) {
  return format
    .replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, '')
    .trim()
}

export const validateRangeInOneMonth = function (start, end) {
  return (
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear()
  )
}
