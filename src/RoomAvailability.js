function isRoomAvailable(schedule) {
  var calendarId = 'pillartechnology.com_38373434343233392d353734@resource.calendar.google.com'
  return schedule.calendars[calendarId].busy.length == 0;
}

function getFreebusyCal(input) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://www.googleapis.com/calendar/v3/freeBusy");
  xhr.send(input);
}

function get_http_response_code(xhr) {
  return xhr.status;
}
