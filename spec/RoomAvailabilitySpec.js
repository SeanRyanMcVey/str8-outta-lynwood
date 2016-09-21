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

  it('should be busy when the busy list contains a time range', function() {
    expect(isRoomAvailable(sampleResponseWithTimes)).toBe(false);
  });

  it('should be available when the busy list is empty', function(){
    expect(isRoomAvailable(sampleResponseWithoutTimes)).toBe(true);
  });

});
