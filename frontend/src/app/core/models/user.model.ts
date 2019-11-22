export interface User {
  name: string;
  office: string;
  birthDate: string;
  effectiveDate: string;
  lastChangeOffice: string;
  lastPDI: string;
  madeBy: string;
  type: number;
}

export interface UserAuthenticate {
  accessToken?: string;
  name?: string;
  email: string;
  password: string;
}
