import { environment } from '../../../environments/environment';

export const enum ServiceEndpoints {
    Goals = 'goals',
    GoalsByPdi = 'goals/{{0}}',
    Periods = 'periods',
    Pdis = 'pdis',
    PdiByCollaboratorId = 'pdis/collaborator/{{0}}',
    Status = 'status',
    SelfFeedbacks = 'selffeedbacks',
    SelfFeedbacksByPdi = 'selffeedbacks/{{0}}',
    Users = 'users',
    UsersAuthenticate = 'users/authenticate',
    UsersById = 'users/{{0}}',
    UserTypes = 'usertypes',
    WheelOfSkills = 'wheelofskills',
    WheelOfSkillsByPdi = 'wheelofskills/{{0}}'
}

/** Interpola os parâmetros 'params[i]' nos '{{i}}' do endpoint, caso existam */
export const endpointInterpolation = (baseUrl: string, endpoint: string, ...params: Array<string|number>) => {
    const interpolatedEndpoint = params.reduce<string>((old, curr, i) => old.split(`{{${i}}}`).join(curr.toString()), endpoint);
    return baseUrl + interpolatedEndpoint;
};

/** Retorna a URL completa de um endpoint do backend, com os parâmetros 'params[i]' interpolados */
export const service = (endpoint: ServiceEndpoints, ...params: Array<string | number>): string => {
    return endpointInterpolation(environment.backUrl, endpoint, ...params);
};
