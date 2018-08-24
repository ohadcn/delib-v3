const m = require('mithril');
const root = document.body;
import './style.css';

//functions
import './functions/firebaseAuth';

//Views
import Splash from "./views/Splash/Splash";
import Delib from "./views/Delib/Delib";
import Option from "./views/Option/Option";
import Options from "./views/Options/Options";
import Team from "./views/Team/Team";
import Org from "./views/Org/Org";
import Messages from "./views/Messages/Messages";


m.route(root, "/splash", {
    "/splash": Splash,
    "/delib": Delib,
    '/option/:id': Option,
    'options/': Options,
    'team/:id': Team,
    'org/:id': Org,
    'messages/:id': Messages
})