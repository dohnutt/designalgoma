//@prepros-prepend format-google-calendar.js

var maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() + 1);

formatGoogleCalendar.init({
  calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/br6vtp5bcjfgtvijlsclt0oeu0@group.calendar.google.com/events?key=AIzaSyBQFaIpKMuozBk5bixcOQG2w0tHYHbFeK0',
  past: false,
  upcoming: true,
  sameDayTimes: true,
  dayNames: true,
  upcomingTopN: 5,
  itemsTagName: 'article',
  upcomingSelector: '.js-upcoming-events',
  pastSelector: '.js-past-events',
  recurringEvents: true,
  upcomingHeading: '<h2>Upcoming events</h2>',
  format: [
    '*summary*',
    '*date*',
    '*location*'
    '*description*',

  ],
  timeMax: maxDate.toISOString(),
});
