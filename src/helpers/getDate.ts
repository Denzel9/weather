const date = new Date()
export const currentHour =
  date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours().toString()
export const currentTime = `${currentHour}:${date.getMinutes()}`

export const getApPm = (time: string) => ('00' < time && time <= '12' ? 'AM' : 'PM')
