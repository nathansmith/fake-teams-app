import { MOCK_DATE_NUMBER, MOCK_DATE_STRING } from '~/__mocks__';
import { formatDate } from './';
import type { IFormatDateOptions } from './';

// ====================
// Describe `fileName`.
// ====================

describe('utils/formatDate', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Get string.
    const dateFromNumber = formatDate(MOCK_DATE_NUMBER);
    const dateFromString = formatDate(MOCK_DATE_STRING);

    // Test assertions.
    expect(dateFromNumber).toBe(dateFromString);
    expect(dateFromNumber).toBe('11/9');
  });

  // ========================
  // Test "options" scenario.
  // ========================

  test('handles "options" scenario', (): void => {
    // Dummy props.
    const options: IFormatDateOptions = {
      day: '2-digit',
      month: 'long',
      withDay: true,
      withMonth: true,
      withWeekday: true,
      withTime: true,
      withYear: true,
    };

    // Get string.
    const dateFromString = formatDate(MOCK_DATE_STRING, options);

    // Test assertions.
    expect(dateFromString).toBe('Saturday, November 09, 2024 at 1:00 PM');
  });

  // ================================
  // Test "no month or day" scenario.
  // ================================

  test('handles "no month or day" scenario', (): void => {
    // Dummy props.
    const options: IFormatDateOptions = {
      withDay: false,
      withMonth: false,
      withWeekday: true,
      withTime: true,
      withYear: false,
    };

    // Get string.
    const dateFromString = formatDate(MOCK_DATE_STRING, options);

    // Test assertions.
    expect(dateFromString).toBe('Saturday 1:00 PM');
  });
});
