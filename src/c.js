import React from 'react';
import A from './images/b.jpeg';
import B from './images/Cabbage.jpg';
import C from './images/t.jpg';
import G from './images/g.jpg';
import H from './images/p.jpg';
import I from './images/so.jpg';
import J from './images/paprika.jpg';
import K from './images/l.jpg';
import L from './images/r.jpg';
import M from './images/k.jpg';
import N from './images/tu.jpg';
import O from './images/cu.jpeg';
import P from './images/c.jpg';

let styles = {
	row: {
        backgroundColor: 'rgba(50, 30, 30, 0.5)',
        height: '20vh',
        width: '78.5vw',
        margin: '10px 0px 0px 10px',
        display: 'flex',
    },

   image: {
        height: '18vh',
        width: '18vh',
        margin: '5px 0px 0px 5px',
    },

    name: {
        fontSize: '5vh',
        margin: '7vh 0vh 0vh 7vh',
    },

    description: {
        width: '40vw',
        fontSize: '2.5vh',
        margin: '7vh 0vh 0vh 7vh',
        overflowY: 'scroll',
        marginTop: 10
    },

    price: {
         margin: '7vh 0vh 0vh 7vh',
         fontSize: '6vh',
    }, 
}

const generateImage = (id) => {
    let image = null; 
    switch(id) {
        case 18:
            image = A;
            break;
        case 24:
            image = B;
            break;
        case 20:
            image = G;
            break;
        case 3:
            image = C;
            break;
        case 25:
            image = H;
            break;
        case 7:
            image = I;
            break;
        case 40:
            image = J;
            break;
        case 27:
            image = K;
            break;
        case 50:
            image = L;
            break;
        case 33:
            image = M;
            break;
        case 14:
            image = N;
            break;
        case 28: 
            image = O;
            break;
        case 80:
            image = P;
            break;
        default:
            console.log('ERROR: Image not found');
            break;
    }

    return image;
}

const Item = (props) => {
    let image = generateImage(props.id);
	return (
			<div style={styles.row}>
                <img alt={''} src={image} style = {styles.image}/>
                <div style = {styles.name}> {`${props.title}`} </div>
                <div style = {styles.description}> {`${props.description}`}</div>
                <div style = {styles.price}> {`$${props.price}`} </div>
                </div>
			);
}

export default Item; 
