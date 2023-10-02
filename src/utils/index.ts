export function toSwedishDateString(input: string): string {
  // Convert post date to format: Month day, Year
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(input).toLocaleDateString('sv-SE', options);
}
