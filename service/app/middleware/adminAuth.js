'use strict';

module.exports = options => {
  return async function adminAuth(ctx, next) {
    console.info('sss', ctx.session.openId);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = {
        data: '没有登录',
      };
    }
  };
};
