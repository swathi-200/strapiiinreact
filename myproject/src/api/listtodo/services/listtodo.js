'use strict';

/**
 * listtodo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::listtodo.listtodo');
