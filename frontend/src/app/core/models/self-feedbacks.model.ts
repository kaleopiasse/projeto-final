export interface SelfFeedbackModel {
  pdi_id: string;
  questions: SelfFeedbackQuestionModel[];
}

export interface SelfFeedbackQuestionModel {
  key: number;
  description: string;
  answer: string;
}
