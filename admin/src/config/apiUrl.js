const ipUrl = 'http://127.0.0.1:7001/admin/'

const servicePath = {
    checkLogin : `${ipUrl}checkLogin`,
    getTypes: `${ipUrl}getTypes`,
    addArticle: `${ipUrl}addArticle`,
    updateArticle: `${ipUrl}updateArticle`,
    getArticleList: `${ipUrl}getArticleList`,
    deleteArticle: `${ipUrl}deleteArticle/`,
    getArticleById: `${ipUrl}getArticleById/`,
}

export default servicePath