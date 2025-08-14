
export const getPreviousMonthDateRange = () => {
  const today = new Date();
  const firstDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const firstDayOfPreviousMonth = new Date(firstDayOfCurrentMonth);
  firstDayOfPreviousMonth.setMonth(firstDayOfPreviousMonth.getMonth() - 1);
  
  const lastDayOfPreviousMonth = new Date(firstDayOfCurrentMonth);
  lastDayOfPreviousMonth.setDate(lastDayOfPreviousMonth.getDate() - 1);
  
  return {
    start: firstDayOfPreviousMonth.toISOString().split('T')[0],
    end: lastDayOfPreviousMonth.toISOString().split('T')[0]
  };
};

export const formatDateRange = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  
  return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
};

export const isDateInRange = (date: string, start: string, end: string) => {
  const checkDate = new Date(date);
  const startDate = new Date(start);
  const endDate = new Date(end);
  
  return checkDate >= startDate && checkDate <= endDate;
};
