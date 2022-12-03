import Api from "./Api";
const getData = function (type, page) {
    return Api.get(`${type}/top_rated?`, { params: { page: page } });
};
export default getData;