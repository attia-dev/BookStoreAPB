import type { AuthorDto, CreateAuthorDto, GetAuthorListDto, UpdateAuthorDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  apiName = 'Default';
  

  create = (input: CreateAuthorDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AuthorDto>({
      method: 'POST',
      url: '/api/app/author',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/author/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AuthorDto>({
      method: 'GET',
      url: `/api/app/author/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetAuthorListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AuthorDto>>({
      method: 'GET',
      url: '/api/app/author',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateAuthorDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/author/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
