import Api from "./Api";
const getTrailers = function (type, id) {
    return Api.get(`${type}/${id}/videos?`);
};
export default getTrailers;