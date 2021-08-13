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
      SELECT user_name FROM admin_user WHERE user_name = '${userName}' 
      AND password = '${password}'`;
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      const openId = +new Date();
      ctx.session.openId = openId;
      ctx.body = {
        data: 1,
        message: '登录成功',
        openId,
      };
    } else {
      ctx.body = {
        data: 0,
        message: '登录失败',
      };
    }
  }

  async getTypes() {
    const types = await this.app.mysql.select('type');
    this.ctx.body = {
      data: types,
    };
  }

  async addArticle() {
    const data = this.ctx.request.body;
    const result = await this.app.mysql.insert('article', data);
    const insertSuccess = result.affectedRows === 1;
    const { insertId } = result;

    this.ctx.body = {
      success: insertSuccess,
      id: insertId,
    };
  }
  async updateArticle() {
    const data = this.ctx.request.body;
    const result = await this.app.mysql.update('article', data);
    const updateSuccess = result.affectedRows === 1;

    this.ctx.body = {
      success: updateSuccess,
    };
  }

  async getArticleList() {
    const sql = `
      SELECT article.id as id, 
      article.title as title,
      article.introduce as introduce,
      FROM_UNIXTIME(article.create_time, '%Y-%m-%d %H:%m:%s') as createTime,
      article.view_count as viewCount,
      type.type_name as typeName 
      FROM article LEFT JOIN type ON article.type_id = type.id 
      ORDER BY article.id DESC
    `;
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }

  async deleteArticle() {
    const { ctx, app } = this;
    const { id } = ctx.params;
    const res = await app.mysql.delete('article', { id });
    ctx.body = {
      data: res,
    };
  }

  async getArticleById() {
    const { id } = this.ctx.params;
    const sql = `
    SELECT article.id as id, 
      article.title as title,
      article.introduce as introduce,
      article.content as content,
      article.create_time as createTime,
      article.view_count as viewCount,
      type.type_name as typeName,
      type.id as typeId 
      FROM article LEFT JOIN type ON article.type_id = type.id 
      WHERE article.id = ${id}
    `;

    const res = await this.ctx.app.mysql.query(sql);

    this.ctx.body = {
      data: res,
    };
  }
}

module.exports = MainController;
