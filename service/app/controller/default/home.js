'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const results = await this.app.mysql.get('type', {});
    console.info(results);
    this.ctx.body = {
      data: results,
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
    `;

    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }

  async getArticleById() {
    const { id } = this.ctx.params;
    const sql = `
    SELECT article.id as id, 
      article.title as title,
      article.introduce as introduce,
      article.content as content,
      FROM_UNIXTIME(article.create_time, '%Y-%m-%d %H:%m:%s') as createTime,
      article.view_count as viewCount,
      type.type_name as typeName,
      type.id as typeId 
      FROM article LEFT JOIN type ON article.type_id = type.id
      WHERE article.id = ${id}
    `;

    const result = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: result,
    };
  }
}

module.exports = HomeController;
