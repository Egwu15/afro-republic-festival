import { cn } from '@/lib/utils';
import { CalendarEvent, generateCalendarLinks } from '@/utils/addEventToCalender';
import React from 'react';

const CalendarButtons: React.FC<{ event: CalendarEvent; className: string | null | undefined }> = ({ event, className }) => {
    const { googleLink, icsLink } = generateCalendarLinks(event);

    return (
        <div className={cn('flex gap-4', className)}>
            <a href={googleLink} target="_blank" rel="noopener noreferrer" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Add to Google Calendar
            </a>

            <a href={icsLink} download={`${event.title}.ics`} className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
                Add to Apple Calendar
            </a>
        </div>
    );
};

export default CalendarButtons;
