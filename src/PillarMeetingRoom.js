

	var CLIENT_ID = '61927715661-mjlsmoc5mqnrmtuqse92n3nf3sprpvug.apps.googleusercontent.com';
	var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

	var test

	// function checkAuth() {
	// 	gapi.auth.authorize(
	// 		{
	// 			'client_id': CLIENT_ID,
	// 			'scope': SCOPES.join(' '),
	// 			'immediate': true
	// 		});
	// }

	// function handleAuthResult(authResult) {
	// 	var authorizeDiv = document.getElementById('authorize-div');
	// 	if (authResult && !authResult.error) {
	// 		authorizeDiv.style.display = 'none';
	// 		loadCalendarApi();
	// 	} else {
	// 		authorizeDiv.style.display = 'inline';
	// 	}
	// }

	// function authorizeRoom(){
	// 	gapi.auth.authorize(
	// 		{client_id: CLIENT_ID, scope: SCOPES, immediate: false},
	// 		handleAuthResult);
	// }

	function loadStuff(){
		// gapi.auth.authorize(
		// 	{
		// 		'client_id': CLIENT_ID,
		// 		'scope': SCOPES.join(' '),
		// 		'immediate': true
		// 	});

			gapi.auth.authorize({client_id: CLIENT_ID, scope: SCOPES.join(''), immediate: true});

			gapi.client.load('calendar', 'v3').then(function(response) {
			  // Handle response
				console.log(response);
			}, function(reason) {
			  // Handle error
				console.log(reason);
			});


			/*gapi.client.load('calendar', 'v3').then(function()
			{
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
						test = events[0].start.dateTime;
					} else {
						test = "";
					}
					});

			}, function(reason) {
	  		console.log("error");
			});*/

			console.log("3");
	};

	function loadCalendarApi() {
		console.log("Hello");
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
				test = events[0].start.dateTime;
			} else {
				test = "";
			}
		});

	}

	function getNextMeeting()
	{
		loadStuff();
		return test;
	}
