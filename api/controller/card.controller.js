const cardService = require('../service/card.service');
/**
  * GET /api/cards
  * @param {*} req
  * @param {*} res
  * @returns paginate cards list
*/
const list = (req, res) => {
  const { page, pageSize } = req.params;
  res.json(cardService.getCards(page, pageSize));
}

module.exports = {
  list
}