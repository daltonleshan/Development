import React, { Component } from 'react';
import Background from './images/background.jpg';
import Cabbage from './images/Cabbage.jpg';

let styles = {
    body: {
        backgroundImage: `url(${Background})`,
        height: '100vh',
        width: '100vw',
        fontFamily: 'Geometric, sans-serif',
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
        fontSize: '3vh',
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
        fontSize: '4vh',
        margin: '7vh 0vh 0vh 7vh',
    },

    description: {
        width: '40vw',
        fontSize: '2.5vh',
        margin: '7vh 0vh 0vh 7vh',
        overflowY: 'scroll',
    },

    price: {
         margin: '7vh 0vh 0vh 7vh',
         fontSize: '6vh',
    },
};

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groceries: false,
            spices: false,
            grains: false,
            name: true,
            price: false,
        };
    }

    componentDidMount() {
        console.log('mounted');
    }

    renderNavBox = () => {
        console.log('nav created');
        return <div style = {styles.nav}>
                {this.renderFilterForm()}
                </div>
    }

    renderHeader = () => {
        return <div style={styles.header}> Lorem </div>
    }

    filter = (v) => {
        console.log(v.target.value)
        let key = v.target.value;
        switch(key) {
            case 'groceries':
                this.setState({groceries: !this.state.groceries});
                break;
            case 'spices':
                this.setState({spices: !this.state.spices});
                break;
            case 'grains':
                this.setState({grains: !this.state.grains});
                break;
        }
    }

    sortBy = (v) => {
        console.log(v.target.value)
        let key = v.target.value;
        switch(key){
            case 'name':
                this.setState({name: !this.state.name, price: !this.state.price});
                break;
            default:
                this.setState({price: !this.state.price, name: !this.state.name});
                break;
        }

    }

    renderFilterForm = () => {
        console.log('filter form');
        return <div style = {styles.form}>
                    <form onSubmit = {() => console.log('submitted')}>
                        <div style = {styles.title}> Filter </div>
                        <div style = {styles.radio}>
                            <label style = {styles.text}>
                                <input type = 'checkbox' value = 'groceries' checked={this.state.groceries} onChange={(v) => this.filter(v)}/>
                                Groceries
                            </label>
                        </div>
                        <div  style = {styles.radio}>
                            <label style = {styles.text}>
                                <input type = 'checkbox' value = 'spices' checked={this.state.spices} onChange={(v) => this.filter(v)}/>
                                Spices
                            </label>
                        </div>
                        <div  style = {styles.radio}>
                            <label style = {styles.text}>
                                <input type = 'checkbox' value = 'grains' checked={this.state.grains} onChange={(v) => this.filter(v)}/>
                                Grains
                            </label>
                        </div>
                        <div style = {styles.title}> Sort By </div>
                        <div  style = {styles.radio}>
                            <label style = {styles.text}>
                                <input type = 'radio' group="sort" value = 'grains' checked={this.state.name} onChange={(v) => this.sortBy(v)}/>
                                Name
                            </label>
                        </div>
                        <div  style = {styles.radio}>
                            <label style = {styles.text}>
                                <input type = 'radio' group="sort" value = 'grains' checked={this.state.price} onChange={(v) => this.sortBy(v)}/>
                                Price
                            </label>
                        </div>
                        <button type='submit' style= {styles.button}> Submit </button>
                    </form>
                </div>
    }
    
    renderContent = () => {
        let arr = [ ]; 
        for(let i = 0; i < 15; i++) {
            arr.push(this.renderRow());
        }
        return <div style = {styles.content}>
                {arr}
                </div>
    }

    renderRow = () => {
        return <div style={styles.row}>
                <img src={Cabbage} style = {styles.image}/>
                <div style = {styles.name}> Garbage </div>
                <div style = {styles.description}> 
                        A cultivated plant eaten as a vegetable, having thick green or purple leaves surrounding a spherical heart or head of young leaves.
                </div>
                <div style = {styles.price}> {`$${19}`} </div>
                </div>
    }

    render() {
        return (
            <div style = {styles.body}>
            {this.renderHeader()}
            <div style = {styles.wrapper}>
                {this.renderNavBox()}
                {this.renderContent()}
            </div>
            </div>
        );
    }

}

export default Body;
