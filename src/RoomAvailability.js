function isRoomAvailable(schedule) {
  var calendarId = 'pillartechnology.com_38373434343233392d353734@resource.calendar.google.com'
  return schedule.calendars[calendarId].busy.length == 0;
}
