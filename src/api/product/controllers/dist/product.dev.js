'use strict';
/**
 * product controller
 */

var createCoreController = require('@strapi/strapi').factories.createCoreController;

module.exports = createCoreController('api::product.product', function (_ref) {
  var strapi = _ref.strapi;
  return {
    findOne: function findOne(ctx) {
      var slug, entity, sanitizedEntity;
      return regeneratorRuntime.async(function findOne$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              slug = ctx.params.slug;
              _context.next = 3;
              return regeneratorRuntime.awrap(strapi.db.query('api::product.product').findOne({
                where: {
                  slug: slug
                }
              }));

            case 3:
              entity = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(this.sanitizeOutput(entity));

            case 6:
              sanitizedEntity = _context.sent;
              return _context.abrupt("return", this.transformResponse(sanitizedEntity));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  };
});