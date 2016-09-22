describe('Room availability', function() {

  let sampleResponseWithTimes = {
   "calendars": {
    "pillartechnology.com_38373434343233392d353734@resource.calendar.google.com": {
     "busy": [
      {
       "start": "2016-09-21T13:45:00Z",
       "end": "2016-09-21T14:00:00Z"
      }
     ]
    }
   }
 };

 let sampleResponseWithoutTimes = {
  "calendars": {
   "pillartechnology.com_38373434343233392d353734@resource.calendar.google.com": {
    "busy": [
    ]
   }
  }
};

let sampleInput = {
  "timeMin": "2016-09-21T13:45:00Z",
  "timeMax": "2016-09-21T14:00:00Z",
  "timeZone": "string",
  "groupExpansionMax": 1,
  "calendarExpansionMax": 1
};

  it('should be busy when the busy list contains a time range', function() {
    expect(isRoomAvailable(sampleResponseWithTimes)).toBe(false);
  });

  it('should be available when the busy list is empty', function(){
    expect(isRoomAvailable(sampleResponseWithoutTimes)).toBe(true);
  });

  beforeEach(function(){
    jasmine.Ajax.install();
  });

  afterEach(function(){
    jasmine.Ajax.uninstall();
  });

  it('gets freebusy calendar data', function() {
    getFreebusyCal();
    expect(jasmine.Ajax.requests.mostRecent().url).toBe('https://www.googleapis.com/calendar/v3/freeBusy');
    expect(jasmine.Ajax.requests.mostRecent().method).toBe('POST');
  });

  it('sends input provided by user', function() {
    var testInput = JSON.stringify(sampleInput);
    getFreebusyCal(testInput);
    expect(jasmine.Ajax.requests.mostRecent().params).toBe(testInput);
  });

  it('can detect a 200 http response code', function () {
    var xhr = new XMLHttpRequest();
    jasmine.Ajax.requests.mostRecent().respondWith({'status': 200});
    expect(get_http_response_code(xhr)).toBe(200);
  });

  it('can detect a 404 http response code', function () {
    var xhr = new XMLHttpRequest();
    jasmine.Ajax.requests.mostRecent().respondWith({'status': 404});
    expect(get_http_response_code(xhr)).toBe(404);
  });
});
