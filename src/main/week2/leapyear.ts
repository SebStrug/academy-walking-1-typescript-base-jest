export class LeapYear {
  isLeapYear(year: number): boolean {
    if (year % 4 !== 0) {
        return false
    }
    return !((year % 100 === 0) && (year % 400 !== 0))
  }
}
