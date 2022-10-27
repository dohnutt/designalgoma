exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            calendarApi: process.env.GOOGLE_CALENDAR_KEY
        }),
    }
}