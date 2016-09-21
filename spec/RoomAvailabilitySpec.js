describe('Room availability', function() {

  let sampleResponse = {
   "calendars": {
    "pillartechnology.com_38373434343233392d353734@resource.calendar.google.com": {
     "busy": [
      {
       "start": "2016-09-21T13:45:00Z",
       "end": "2016-09-21T14:00:00Z"
      },
      {
       "start": "2016-09-21T17:00:00Z",
       "end": "2016-09-21T18:00:00Z"
      },
      {
       "start": "2016-09-21T19:00:00Z",
       "end": "2016-09-21T20:30:00Z"
      }
     ]
    }
   }
 };

  it('should be busy at 13:50', function() {
    expect(isRoomAvailable("2016-09-21T13:50Z", sampleResponse)).toBe(false);
  });

});
