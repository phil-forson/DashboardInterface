type ITodoData = {
  text: string;
  dueDays: string;
  bgColor: string;
  textColor: string;
};

export const data: ITodoData[] = [
  {
    text: "Create Firestore Logo",
    dueDays: "2 days",
    textColor: "#50cd89",
    bgColor: "#1c3238",
  },
  {
    text: "Stakeholder Meeting",
    dueDays: "3 days",
    textColor: "#009ef7",
    bgColor: "#212e48",
  },
  {
    text: "Scooping & Estimations",
    dueDays: "5 days",
    bgColor: "#392f28",
    textColor: "#ffc700",
  },
  {
    text: "KPI App Showcase",
    dueDays: "2 days",
    bgColor: "#3a2434",
    textColor: "#f1416c",
  },
  {
    text: "Project Meeting",
    dueDays: "12 days",
    textColor: "#50cd89",
    bgColor: "#1c3238",
  },
  {
    text: "Customers Update",
    dueDays: "1 week",
    textColor: "#009ef7",
    bgColor: "#212e48",
  },
];
