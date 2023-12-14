export interface IDateFormData {
  title: string | null;
  date: Date;
  description: string;
  images: File[] | null;
}

export interface IDate extends IDateFormData {
  _id: string;
  imageUrls: string[];
}
