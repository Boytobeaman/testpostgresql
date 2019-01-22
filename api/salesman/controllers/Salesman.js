'use strict';

/**
 * Salesman.js controller
 *
 * @description: A set of functions called "actions" for managing `Salesman`.
 */

module.exports = {

  /**
   * Retrieve salesman records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.salesman.search(ctx.query);
    } else {
      return strapi.services.salesman.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a salesman record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.salesman.fetch(ctx.params);
  },

  /**
   * Count salesman records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.salesman.count(ctx.query);
  },

  /**
   * Create a/an salesman record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.salesman.add(ctx.request.body);
  },

  /**
   * Update a/an salesman record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.salesman.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an salesman record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.salesman.remove(ctx.params);
  },

  /**
   * Add relation to a/an salesman record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.salesman.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an salesman record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.salesman.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an salesman record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.salesman.removeRelation(ctx.params, ctx.request.body);
  }
};
