import { DateTime } from 'luxon';

export const toBCDate =(timestampInSeconds: number): string => {
  return DateTime.fromSeconds(timestampInSeconds)
    .setZone('America/Vancouver')
    .toFormat('yyyy-MM-dd');
}