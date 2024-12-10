// ======
// Types.
// ======

export type IDay = '2-digit' | 'numeric';
export type IHour = '2-digit' | 'numeric';
export type IMinute = '2-digit' | 'numeric';
export type IMonth = '2-digit' | 'long' | 'narrow' | 'numeric' | 'short';
export type IWeekday = 'long' | 'narrow' | 'short';
export type IYear = '2-digit' | 'numeric';

export interface IFormatDateOptions {
  day?: IDay;
  month?: IMonth;
  withDay?: boolean;
  withMonth?: boolean;
  withTime?: boolean;
  withWeekday?: boolean;
  withYear?: boolean;
}

// ====================
// Helper: format date.
// ====================

const formatDate = (date: number | string = Date.now(), options?: IFormatDateOptions): string => {
  // Day & Month = ON.
  let day: IDay | undefined = 'numeric';
  let month: IMonth | undefined = 'numeric';

  // Time & Year = OFF.
  let hour: IHour | undefined = undefined;
  let hour12: boolean | undefined = undefined;
  let minute: IMinute | undefined = undefined;
  let weekday: IWeekday | undefined = undefined;
  let year: IYear | undefined = undefined;

  // Override day: YES.
  if (options?.day) {
    day = options?.day;
  }

  // Override month: YES.
  if (options?.month) {
    month = options?.month;
  }

  // With day: NO.
  if (options?.withDay === false) {
    day = undefined;
  }

  // With month: NO.
  if (options?.withMonth === false) {
    month = undefined;
  }

  // With weekday: YES.
  if (options?.withWeekday) {
    weekday = 'long';
  }

  // With time: YES.
  if (options?.withTime) {
    hour = 'numeric';
    hour12 = true;
    minute = 'numeric';
  }

  // With year: YES.
  if (options?.withYear) {
    year = 'numeric';
  }

  // Bundle options.
  const newOptions = {
    // Date format.
    day,
    month,
    weekday,
    year,

    // Time format.
    hour,
    hour12,
    minute,
  };

  // Expose string.
  return new Intl.DateTimeFormat('en-US', newOptions).format(
    typeof date === 'string' ? new Date(date) : date
  );
};

// Export.
export { formatDate };
