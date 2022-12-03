import Api from "./Api";
const getTopRated = function (type, page) {
    return Api.get(`${type}/top_rated?`, { params: { page: page } });
};
export default getTopRated;