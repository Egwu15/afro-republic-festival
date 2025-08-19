// utils/calendar.ts
export interface CalendarEvent {
    title: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
}

export function generateCalendarLinks(event: CalendarEvent) {
    const pad = (n: number) => n.toString().padStart(2, '0');

    // Google Calendar format YYYYMMDDTHHMMSS
    const formatGoogleDate = (date: Date) =>
        date.getFullYear() +
        pad(date.getMonth() + 1) +
        pad(date.getDate()) +
        'T' +
        pad(date.getHours()) +
        pad(date.getMinutes()) +
        pad(date.getSeconds());

    const startGoogle = formatGoogleDate(event.startDate);
    const endGoogle = formatGoogleDate(event.endDate);

    const googleParams = new URLSearchParams({
        action: 'TEMPLATE',
        text: event.title,
        dates: `${startGoogle}/${endGoogle}`,
        details: event.description,
        location: event.location,
        sf: 'true',
        output: 'xml',
    });

    const googleLink = `https://calendar.google.com/calendar/render?${googleParams.toString()}`;

    // ICS format for Apple Calendar
    const formatICSDate = (date: Date) =>
        date.getUTCFullYear() +
        pad(date.getUTCMonth() + 1) +
        pad(date.getUTCDate()) +
        'T' +
        pad(date.getUTCHours()) +
        pad(date.getUTCMinutes()) +
        pad(date.getUTCSeconds()) +
        'Z';

    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
DTSTART:${formatICSDate(event.startDate)}
DTEND:${formatICSDate(event.endDate)}
END:VEVENT
END:VCALENDAR`.trim();

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const icsLink = URL.createObjectURL(blob);

    return { googleLink, icsLink };
}
