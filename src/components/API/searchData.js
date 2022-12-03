import Api from "./Api";
const searchData = function (type, query, page) {
    return Api.get(`search/${type}? `, { params: { query: query, page: page } });
};
export default searchData;