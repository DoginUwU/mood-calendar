import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { getMonths } from '../../utils/date';
import { Container, Day as DayComponent, Month, Tooltip, TooltipFace } from './styles';
import { Day, Month as MonthType } from './types';

const Moods = [
  {
    name: "happy",
    color: "var(--green)",
    icon: "face-happy",
  },
  {
    name: "neutral",
    color: "var(--yellow)",
    icon: "face-neutral",
  },
  {
    name: "sad",
    color: "var(--red)",
    icon: "face-sad",
  },
];

const Home = () => {
    const [date] = useState(new Date());
    const [months, setMonths] = useState<MonthType[]>([]);
    const [selectedDay, setSelectedDay] = useState<Day>();

    useEffect(() => {
        date.setDate(1)
        setMonths(getMonths(date))
    }, [date])

    const handleSelectDay = (day: Day) => {
      setSelectedDay(day);
    };

    const handleSetMood = (mood: typeof Moods[0]) => {
        if (selectedDay) {
            const { day, month } = selectedDay;
            const newMonths = [...months];
            newMonths[month].days[day - 1] = {
                ...newMonths[month].days[day - 1],
                color: mood.color,
            }
            setMonths(newMonths);
        }
    };

    return (
      <Container>
        <h1>Your mood calendar</h1>
        {months.map((month) => (
          <Month key={month.month}>
            <h2>{month.month}</h2>
            {month.days.map((day, index) => (
              <DayComponent
                key={index}
                data-tip
                data-for="date"
                onMouseEnter={() => handleSelectDay(day)}
                color={day.color}
              >
                {index + 1}
              </DayComponent>
            ))}
            <Tooltip
              id="date"
              place="right"
              effect="solid"
              clickable={true}
              delayHide={100}
            >
              {Moods.map((mood) => (
                <TooltipFace
                  key={mood.name}
                  color={mood.color}
                  onClick={() => handleSetMood(mood)}
                >
                  <Icon icon={`akar-icons:${mood.icon}`} />
                </TooltipFace>
              ))}
            </Tooltip>
          </Month>
        ))}
        <Footer />
      </Container>
    );
}

export default Home;