export interface TrainingSchema {
  id: number;
  home: boolean;
  opponent: string;
  location: string;
  date: string;
  time: string;
  serie: {
    yes: boolean;
    date: string;
    time: string;
    enddate: string;
  };
}
