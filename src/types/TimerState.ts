interface Tab {
  title: string;
  color: string;
  initialTime: number;
  timerLabel: string;
}

interface TimerStateTypes {
  selectedTab: number;
  tabs: Tab[];
}

export type { TimerStateTypes };
