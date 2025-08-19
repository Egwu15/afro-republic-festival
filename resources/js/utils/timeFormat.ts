/**
 * Formats an ISO 8601 date string to a 12-hour time format (e.g., "12:17 AM").
 * @param {string} isoDateString - The ISO date string to format.
 * @returns {string} The formatted time string, or an empty string if the input is invalid.
 */
export const formatTimeWithAMPM = (isoDateString: string): string => {
    // Return an empty string or handle the error if the input is not a valid string.
    if (!isoDateString) {
        return '';
    }

    const date = new Date(isoDateString);

    // Check if the date object is valid.
    if (isNaN(date.getTime())) {
        return '';
    }

    const formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'Europe/London',
    });

    return formatter.format(date);
};
