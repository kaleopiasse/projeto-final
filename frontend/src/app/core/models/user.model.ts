export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  office: string;
  birthday: string;
  admissionDate: string;
  lastChangePosition: string;
  lastPDI?: string;
  madeBy?: string;
  profiles: string;
}

export interface UserAuthenticate {
  email: string;
  password: string;
  _id?: string;
  accessToken?: string;
  name?: string;
}

export interface UserTypes {
  items: [{
    type: string,
  }];
}
