'use strict';

module.exports = app => {
  const { router, controller } = app;
  const adminAuth = app.middleware.adminAuth();
  router.get('/admin/index', controller.admin.main.index);
  router.get('/admin/checkLogin', controller.admin.main.checkLogin);
  router.get('/admin/getTypes', controller.admin.main.getTypes);
};
