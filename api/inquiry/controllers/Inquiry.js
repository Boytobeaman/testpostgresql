'use strict';

/**
 * Inquiry.js controller
 *
 * @description: A set of functions called "actions" for managing `Inquiry`.
 */

module.exports = {

  /**
   * Retrieve inquiry records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.inquiry.search(ctx.query);
    } else {
      return strapi.services.inquiry.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a inquiry record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.inquiry.fetch(ctx.params);
  },

  /**
   * Count inquiry records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.inquiry.count(ctx.query);
  },

  /**
   * Create a/an inquiry record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.inquiry.add(ctx.request.body);
  },

  /**
   * Update a/an inquiry record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.inquiry.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an inquiry record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.inquiry.remove(ctx.params);
  },

  /**
   * Add relation to a/an inquiry record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.inquiry.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an inquiry record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.inquiry.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an inquiry record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.inquiry.removeRelation(ctx.params, ctx.request.body);
  }
};
