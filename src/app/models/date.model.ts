export interface IDateFormData {
  title: string | null;
  date: Date;
  description: string;
}

export interface IDate extends IDateFormData {
  _id: string;
}
