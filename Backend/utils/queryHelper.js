export function buildQueryParams({ query, sortableFields = [], filterableFields = [] }) {
  const filters = [];
  const values = [];

  // Filtering
  for (const field of filterableFields) {
    if (query[field]) {
      filters.push(`${field} LIKE ?`);
      values.push(`%${query[field]}%`);
    }
  }

  // Sorting
  let orderBy = '';
  if (query.sort && sortableFields.includes(query.sort.split('_')[0])) {
    const [field, direction = 'asc'] = query.sort.split('_');
    orderBy = `ORDER BY ${field} ${direction.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'}`;
  }

  // Pagination
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const offset = (page - 1) * limit;
  const limitClause = `LIMIT ${limit} OFFSET ${offset}`;

  return {
    filterClause: filters.length ? `WHERE ${filters.join(' AND ')}` : '',
    orderByClause: orderBy,
    limitClause,
    values,
    page,
    limit
  };
}



