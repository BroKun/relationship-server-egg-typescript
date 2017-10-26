import { DocumentQuery } from 'mongoose';
import Query = Relationship.Query;
/**
 * 查询字符串信息校验
 */
export const queryValidationRule = {
  page: {
    type: 'int',
    min: 1,
    required: false,
  },
  per_page: {
    type: 'int',
    min: 10,
    max: 100,
    required: false,
  },
  order: {
    type: 'string',
    required: false,
  },
  sort: {
    type: 'int',
    required: false,
  },
};
export function defaultQuery(): Query {
  return {
    page: 1,
    per_page: 20,
  };
}
export function pagedQuery(documentQuery: DocumentQuery<any, any>, queries: Query) {
  documentQuery = documentQuery.skip((queries.page - 1) * queries.per_page).limit(queries.per_page);
  if (queries.sort) {
    documentQuery = documentQuery.sort({ [queries.sort]: queries.order === 'asc' ? 1 : -1 });
  }
  return documentQuery;
}
