import Api from "./Api";
const searchData = function (type, query) {
    return Api.get(`search/${type}? `, { params: { query: query } });
};
export default searchData;