export interface TRANSACTIONI {
  type: string;
  amount: number;
  date: string;
  description: string;
  transactionType?: "income" | "expense";
}

// export interface EXPENSEI {
//   type: string;
//   amount: number;
//   date: string;
//   description: string;
// }
