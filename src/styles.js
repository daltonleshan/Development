import Background from './images/chalkboard.jpg';

let styles = {
    body: {
        backgroundImage: `url(${Background})`,
        height: '100%',
        width: '100%',
        fontFamily: 'ChalkboardSE-Regular',
        color: 'white',
    },

    header: {
        fontSize: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    nav: {
        height: '88.5vh',
        width: '20vw',
        borderColor: '#d6d7da',
        display: 'flex',
        borderRightWidth: 4,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    form: {
    },

    radio: {
        paddingTop: '3vh',
    },

    button: {
        width: '8vw',
        height: '4vh',
        marginTop: '8vh',
    },

	title: {
        fontSize: '6vh',
        paddingTop: '10vh',
    },

    text: {
        fontSize: '2.5vh',
    },

    content: {
        width: '80vw',
        height: '88.5vh',
        overflowY: 'scroll',
    },

    wrapper: {
        display: 'flex',
    },

};

export default styles;
