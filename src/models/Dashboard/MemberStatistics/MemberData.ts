export type ICompanyUser = {
  name: string;
  books: Array<string>;
  companyName: string;
  departments: Array<string>;
  progress: number;
  progressColor: string;
};
export const data: ICompanyUser[] = [
  {
    name: "Emmanuel Peter",
    books: ["HTML", "JS", "ReactJS"],
    companyName: "Intertico",
    departments: ["Web", "UI/UX Design"],
    progress: 50,
    progressColor: "sysblue.100",
  },
  {
    name: "Samuel Yeboah Marfo",
    books: ["C#", "ASP.NET", "MS SQL"],
    companyName: "Freelance",
    departments: ["Houses & Hotels"],
    progress: 70,
    progressColor: "sysred.100",
  },
];
