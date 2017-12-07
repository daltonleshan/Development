import React, { Component } from 'react';
import styles from './styles';
import Item from './c';

const d = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut cursus tortor. Curabitur consequat, diam eu feugiat auctor, risus urna vehicula justo, a vehicula nibh orci eu dolor. Nulla vestibulum nisl nec finibus pharetra. Nam vehicula neque ut mauris fringilla, ut placerat nulla lacinia. Praesent lacinia nisl tortor, ut fermentum diam feugiat vitae. Donec aliquet eros et congue malesuada. Nunc in libero ex. Etiam ac commodo mauris. Nulla vulputate felis sed lectus tristique, at pellentesque lorem egestas. Etiam eros felis, tempus a ligula at, euismod cursus lorem. Maecenas mollis accumsan ex sed ullamcorper. Nam sollicitudin, dui eget mollis malesuada, purus magna posuere elit, sed vehicula eros magna ac dui. Aenean porta dui in varius ornare. In sed hendrerit neque.';

const Tomato = <Item title={'Tomato'} id={3} type={'v'} price={19} description={d}/>;
const Broccoli = <Item title={'Broccoli'} id={18} type={'v'} price={23} description={d}/>;
const Ginger = <Item title={'Ginger'} type={'spices'} id={20} price={13} description={d}/>;
const Cabbage = <Item title={'Cabbage'} id={24} type={'v'} price={20} description={d}/>
const Parsley = <Item title={'Parsley'} id={25} type={'spices'} price={8} description={d}/>
const Sorghum = <Item title={'Curry'} id={7} type={'spices'} price={16} description={d}/>
const Paprika = <Item title={'Paprika'} id={40} type={'spices'} price={4} description={d}/>
const Lettuce = <Item title={'Lettuce'} id={27} type={'v'} price={10} description={d}/>
const Rosemary = <Item title={'Rosemary'} id={50} price={9} type={'spices'} description={d}/>
const Spinach = <Item title={'Spinach'} id={33} type={'v'} price={14} description={d}/>
const BR = <Item title={'Tumeric'} type={'spices'} id={14} price={14} description={d}/>
const WR = <Item title={'Cucumber'} id={28} type={'v'} price={13} description={d}/>
const Cinnamon = <Item title={'Cinnamon'} id={80} price={7} type={'spices'} description={d}/>

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groceries: false,
            spices: false,
            grains: false,
            name: true,
            price: false,
            displayed: this.addItems(), 
        };
    }

    addItems = () => {
        let arr = [];
        for(let i = 0; i < 1; i++) {
            arr.push(Tomato);
            arr.push(Broccoli);
            arr.push(Ginger);
            arr.push(Cabbage);
            arr.push(Parsley);
            arr.push(Sorghum);
            arr.push(Paprika);
            arr.push(Lettuce);
            arr.push(Rosemary);
            arr.push(Spinach);
        }
        return arr;
    }

    componentDidMount() {
		if(this.state.groceries && !this.state.spices && !this.state.grains) {
			this.filterGroceries(this.state.items);
		}
		if(this.state.spices && !this.state.grains && !this.state.groceries) {
			this.filterSpices(this.state.items);
		}
    }

    renderNavBox = () => {
        return <div style = {styles.nav}>
                {this.renderFilterForm()}
                </div>
    }

    renderHeader = () => {
        return <div style={styles.header}> Lorem </div>
    }
    //TODO: grains selected by default
    filter = (v) => {
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
            default:
                break;
        }
    }

    execute = () => {
    }

    filterItems = (arr, cond) => {
        let a = arr.filter((e) => {
            return e.props.type === cond; 
        });
        this.setState({displayed: a});
    }


    sortBy = (v) => {
        let key = v.target.value;
        switch(key){
            case 'name':
                this.sortByName(this.state.displayed);
                this.setState({name: !this.state.name, price: !this.state.price});
                break;
            default:
                this.sortByPrice(this.state.displayed);
                this.setState({price: !this.state.price, name: !this.state.name});
                break;
        }

    }

	newFilter = () => {
		if(!this.state.spices && this.state.groceries){
			this.setState({displayed: this.addItems()});
		}
		if(this.state.spices && !this.state.groceries) {
			this.setState({displayed: this.addItems()});
		}
	}

    renderFilterForm = () => {
        return <div style = {styles.form}>
                    <form onSubmit = {() => this.onSubmit()}>
                        <div style = {styles.title}> Filter </div>
                        <div style = {styles.radio}>
                            <label style = {styles.text}>
                                <input type = 'checkbox' value = 'groceries' checked={this.state.groceries} onChange={() => { 
										this.setState({groceries: !this.state.groceries});
									    this.filterItems(this.addItems(), 'v');	
										this.newFilter();
									}}/>
                                Groceries
                            </label>
                        </div>
                        <div  style = {styles.radio}>
                            <label style = {styles.text}>
                                <input type = 'checkbox' value = 'spices' checked={this.state.spices} onChange={() => {
										console.log('****');
										this.setState({spices: !this.state.spices})
										this.filterItems(this.addItems(), 'spices');
										this.newFilter();
									}}/>
                                Spices
                            </label>
                        </div>
                        <div style = {styles.title}> Sort By </div>
                        <div  style = {styles.radio}>
                            <label style = {styles.text}>
                                <input type = 'radio' group="sort" value = 'name' checked={this.state.name} onChange={(v) => this.sortBy(v)}/>
                                Name
                            </label>
                        </div>
                        <div  style = {styles.radio}>
                            <label style = {styles.text}>
                                <input type = 'radio' group="sort" value = 'price' checked={this.state.price} onChange={(v) => this.sortBy(v)}/>
                                Price
                            </label>
                        </div>
                        <button style={styles.button} onPress={()=>console.log('BUTTON')}> Reload </button>
                    </form>
                </div>
    }
    
    renderContent = () => {

        return <div style = {styles.content}>
                {this.state.displayed}
                </div>
    }

    sortByName = (arr) => {
        arr.sort((e,f) => {
            return e.props.title > f.props.title;
        });
    }

    sortByPrice = (arr) => {
        arr.sort((e,f) => {
            return e.props.price > f.props.price;
        });
    }

    onSubmit = () => {
        console.log("name: " + this.state.name);
        console.log("price: " + this.state.price);
        if(this.state.name) {
            this.sortByName(this.state.displayed);
        } else if (this.state.price) {
            this.sortByPrice(this.state.displayed);
        }
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
