'use strict';

/**
 * Survey.js controller
 *
 * @description: A set of functions called "actions" for managing `Survey`.
 */

module.exports = {

  /**
   * Retrieve survey records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.survey.search(ctx.query);
    } else {
      return strapi.services.survey.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a survey record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.survey.fetch(ctx.params);
  },

  /**
   * Count survey records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.survey.count(ctx.query);
  },

  /**
   * Create a/an survey record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.survey.add(ctx.request.body);
  },

  /**
   * Update a/an survey record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.survey.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an survey record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.survey.remove(ctx.params);
  },

  /**
   * Add relation to a/an survey record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.survey.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an survey record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.survey.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an survey record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.survey.removeRelation(ctx.params, ctx.request.body);
  }
};
