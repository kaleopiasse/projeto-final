export interface WheelOfSkillsModel {
  pdi_id: string;
  skills: WheelOfSkillsSkillModel[];
  action_plan: {
    improve: string;
    howToImprove: string;
  }[];
}

export interface WheelOfSkillsSkillModel {
  key: number;
  description: string;
  personalNote: number;
  objective: number;
  comments: string;
}
