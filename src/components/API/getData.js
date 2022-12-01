import Api from "./Api";
const getData = function (type, page) {
    return Api.get(`trending/${type}/week`, { params: { page: page } });
};
export default getData;