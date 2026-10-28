export type Tenure = {
  years: number
  months: number
  days: number
  hours: number
}

function parseLocalDate(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function startOfNextDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

function calendarDiff(start: Date, end: Date): Tenure {
  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  let days = end.getDate() - start.getDate()
  let hours = end.getHours() - start.getHours()

  if (hours < 0) {
    hours += 24
    days -= 1
  }
  if (days < 0) {
    const daysInPreviousMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate()
    days += daysInPreviousMonth
    months -= 1
  }
  if (months < 0) {
    months += 12
    years -= 1
  }

  return { years, months, days, hours }
}

export function tenureBetween(startIso: string, endIso: string | null, now = new Date()): Tenure {
  const start = parseLocalDate(startIso)
  const end = endIso ? startOfNextDay(parseLocalDate(endIso)) : now
  return calendarDiff(start, end)
}

export function totalTenure(
  roles: { start: string; end: string | null }[],
  now = new Date(),
): Tenure {
  const totalMs = roles.reduce((sum, role) => {
    const start = parseLocalDate(role.start)
    const end = role.end ? startOfNextDay(parseLocalDate(role.end)) : now
    return sum + (end.getTime() - start.getTime())
  }, 0)
  const origin = new Date(2000, 0, 1)
  return calendarDiff(origin, new Date(origin.getTime() + totalMs))
}
