

	var CLIENT_ID = '61927715661-mjlsmoc5mqnrmtuqse92n3nf3sprpvug.apps.googleusercontent.com';
	var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

	function checkAuth() {
		gapi.auth.authorize(
			{
				'client_id': CLIENT_ID,
				'scope': SCOPES.join(' '),
				'immediate': true
			}, handleAuthResult);
	}

	function handleAuthResult(authResult) {
		var authorizeDiv = document.getElementById('authorize-div');
		if (authResult && !authResult.error) {
			authorizeDiv.style.display = 'none';
			loadCalendarApi();
		} else {
			authorizeDiv.style.display = 'inline';
		}
	}

	function authorizeRoom(){
		gapi.auth.authorize(
			{client_id: CLIENT_ID, scope: SCOPES, immediate: false},
			handleAuthResult);
	}

	function loadCalendarApi() {
		gapi.client.load('calendar', 'v3', listUpcomingEvents);
	}

	function listUpcomingEvents() {
		var request = gapi.client.calendar.events.list({
			'calendarId': 'pillartechnology.com_38373434343233392d353734@resource.calendar.google.com',
			'timeMin': (new Date()).toISOString(),
			'showDeleted': false,
			'singleEvents': true,
			'maxResults': 1,
			'orderBy': 'startTime'
		});

		request.execute(function(resp) {

			var events = resp.items;
			if(events.length > 0) {
				var nextAppointment = events[0].start.dateTime;
			} else {
				var noAppointments = 'No Upcoming Events Found.';
			}

			appendPre('Upcoming events:');
			appendPre(nextAppointment);


		});

		function GetNextMeeting()
		{

		}

	}
