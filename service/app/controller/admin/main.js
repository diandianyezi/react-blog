'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async checkLogin() {
    const { userName, password } = this.ctx.request.body;
    const { ctx } = this;
    const sql = `
      SELECT user_name FROM admin_user WHERE user_name=${userName} 
      AND password=${password}`;
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      const openId = +new Date();
      ctx.session.openId = openId;
      ctx.body = {
        data: '1',
        message: '登录成功',
        openId,
      };
    }
  }

  async getTypes() {
    const types = await this.app.mysql.select('type');
    this.ctx.body = {
      data: types,
    };
  }

}

module.exports = MainController;
