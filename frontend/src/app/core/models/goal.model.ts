export interface GoalModel {
  description: string;
  validator: string;
  period_id: string;
  pdi_id: string;
  status: string;
  key?: number;
}

export interface StatusOrPeriodModel {
  _id?: string;
  key: number;
  description: string;
}
