const template = require('../../data/template.json');

/**
 * get the cards list
 * @param {number} page is page number for pagination
 * @param {number} pageSize is page size for pagination. if this value is -1, disable pagination
 * @returns [] | {results, pagination}
 */
const getCards = (page, pageSize) => {
  // if pageSize is negative, returns full data
  if (pageSize == -1) {
    return template
  }

  // otherwise, paginate the data
  const size = (pageSize || 20);
  const start = (page || 0) * size

  return {
    results: template.slice(start, start + size),
    pagination: {
      page: (page || 0),
      pageSize: size,
      total: template.length
    }
  }
}

module.exports = {
  getCards
}
