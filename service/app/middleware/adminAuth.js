'use strict';

module.exports = () => {
  return async function adminAuth(ctx, next) {
    console.info(ctx.session.openId);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = {
        data: '没有登录',
      };
    }
  };
};
