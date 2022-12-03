import Api from "./Api";
const searchData = function (query) {
    return Api.get(`search/multi? `, { params: { query: query } });
};
export default searchData;