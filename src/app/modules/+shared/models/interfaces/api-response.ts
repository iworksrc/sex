import {IResponseStatus} from '@shared/models/interfaces/response-status';

export interface IApiResponse {
  status: IResponseStatus;
  data: any;
}
