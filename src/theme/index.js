// #3366FF - azulito
const LIGHT_THEME = {
    BODY: '#FFF',
    BODY_FADE: '#F6F6F6',
    PRIMARY_TEXT_1: '#162D3D',
    PRIMARY_TEXT_2: '#5b6e80',
    INVERTED_TEXT: '#FFFFFF',
    MAIN_COLOR: "#2E58FF"
}

const DARK_THEME = { 
    BODY: '#000000', // 01161e,
    BODY_FADE: '#000000',
    PRIMARY_TEXT_1: '#FFFFFF',
    PRIMARY_TEXT_2: '#7A92A5',
    INVERTED_TEXT: '#162D3D',
    MAIN_COLOR: "#2E58FF"
}

const theme = mode => (mode === "dark" ? DARK_THEME : LIGHT_THEME);

export default theme;