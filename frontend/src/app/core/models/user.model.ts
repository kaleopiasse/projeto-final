export interface User {
  name: string;
  email: string;
  office: string;
  birthday: string;
  admissionDate: string;
  lastChangePosition: string;
  lastPDI: string;
  madeBy: string;
  type: number;
}

export interface UserAuthenticate {
  email: string;
  password: string;
  _id?: string;
  accessToken?: string;
  name?: string;
}
