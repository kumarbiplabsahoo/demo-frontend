import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import AuthReducer from "./Auth/AuthReducer";
// import ActivityReducer from "./Activity/ActivityReducer";
 
// import AppGlobalReducer from "./AppGlobal/AppGlobalReducer";
// // import ExploreReducer from "./Explore/ExploreReducer";
// import ChatReducer from "./Chat/ChatReducer";
// import DocReducer from "./Doc/DocReducer";
// import DocSignReducer from "./DocSign/DocSignReducer";
// import DiscussReducer from "./Discuss/DiscussionReducer";
// import DashboardReducer from "./Dashboard/DashboardReducer";
 
// import PipelineReducer from "./Pipeline/PipelineReducer";
 
// import CommentReducer from "./Comment/CommentReducer";
// import ProjectReducer from "./Project/ProjectReducer";
// import ProfileReducer from "./Profiles/ProfileReducer";
 

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    // appGlobal: AppGlobalReducer,
    // auth: AuthReducer,
    // activity: ActivityReducer,

    // chat: ChatReducer,
    // comment: CommentReducer,
    // discussion: DiscussReducer,
    // dashboard: DashboardReducer,
    // doc: DocReducer,
    // docSign: DocSignReducer,
    // explore: ExploreReducer,

  

    // pipeline: PipelineReducer,
    // profile: ProfileReducer,
    // project: ProjectReducer,

    
  });

export default rootReducer;
