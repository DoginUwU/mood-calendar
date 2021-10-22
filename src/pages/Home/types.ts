type Month = {
  month: string;
  days: Day[];
};

type Day = {
  day: number;
  color?: string;
  month: number;
};

type DayProps = {
    color?: string;
}

type TooltipFaceProps = {
    color: string;
}

export type { Month, TooltipFaceProps, DayProps, Day };