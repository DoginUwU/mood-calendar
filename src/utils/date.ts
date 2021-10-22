import { Month } from "../pages/Home/types";

const getMonths = (date: Date) => {
  const months = [] as Month[];
  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    months.push({
      month,
      days: Array(days)
        .fill(0)
        .map((_, index) => ({
          day: index + 1,
          month: i,
        })),
    });
  }
  return months;
};


export { getMonths };