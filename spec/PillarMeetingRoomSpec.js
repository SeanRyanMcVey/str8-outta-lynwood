
describe('Test next appointment', function() {


  it('should return a string', function() {
    expect(getNextMeeting()).not.toBeUndefined();
  });

  it('should return a date', function(){
    //need somewhere to assign room
    expect(getNextMeeting()).not.toBe("");
  })

});
