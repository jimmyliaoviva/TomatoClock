// find free icons in https://fontawesome.com/icons?d=gallery&s=solid&m=free
// find font fontawesome API docs in https://fontawesome.com/how-to-use/with-the-api/setup/getting-started
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import {
    faPlay,
    faPause,
    faTimes,
    faBell,
    faPlus,
    faPen,
} from '@fortawesome/free-solid-svg-icons';

const icons = [
    faPlay,
    faPause,
    faTimes,
    faBell,
    faPlus,
    faPen,
];

function init(){
    library.add(...icons);
    dom.i2svg();
}

export {
    init
};