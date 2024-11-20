import cardService from "@services/card.service";

class CardController {
  /**
    * GET /api/cards
    * @param {*} req
    * @param {*} res
    * @returns paginate cards list
  */
  list(req, res) {
    const { page, pageSize } = req.query;
    res.status(200).json(cardService.getCards(Number(page), Number(pageSize)));
  }
}

export default new CardController;
