'use strict';

module.exports = app => {
  const { router, controller } = app;
  const adminAuth = app.middleware.adminAuth();
  router.get('/admin/index', controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
  router.get('/admin/getTypes', adminAuth, controller.admin.main.getTypes);
  router.post('/admin/addArticle', adminAuth, controller.admin.main.addArticle);
  router.post('/admin/updateArticle', adminAuth, controller.admin.main.updateArticle);
  router.get('/admin/getArticleList', adminAuth, controller.admin.main.getArticleList);
  router.get('/admin/deleteArticle/:id', adminAuth, controller.admin.main.deleteArticle);
  router.get('/admin/getArticleById/:id', adminAuth, controller.admin.main.getArticleById);
};
