import axios from "axios";

// get ll projects
export default {
    getProjects: function(){
        return axios.get("/api/projects");
    },
    getProject: function(id){
        return axios.get("/api/projects/" + id);
    },
    saveProject: function(projectData){
        return axios.post("/api/projects/" + projectData)
    },
    deleteProject: function(id){
        return axios.delete("/api/projects/" + id);
    }
}