import Api from "./Api";
const getVideos = function (type, id) {
    return Api.get(`${type}/${id}/videos?`);
};
export default getVideos;