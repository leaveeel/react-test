import React from 'react';
import store from '../redux/store';
import { add, update, del } from '../redux/actions/cart-actions';

//store.dispatch(update('bread 700g', 5, 110));
//store.dispatch(del('milk 500ml'))
class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            product: '',
            quantity: '',
            unitCost: ''
        }
    }

    componentWillMount() {
        this.unsubscribe()
    }

    //store改变时更新
    unsubscribe = () => {
        store.subscribe(() =>
            this.setState({
                delArr: store.getState().cart.delete,
                product: store.getState().cart.cart[store.getState().cart.update].product,
                quantity: store.getState().cart.cart[store.getState().cart.update].quantity,
                unitCost: store.getState().cart.cart[store.getState().cart.update].unitCost
            })
        )
    }

    //初始化input
    initial = () => {
        this.setState({
            product: '',
            quantity: '',
            unitCost: ''
        })
    }
    
    add = () => {
        if(this.state.product !== '' && this.state.quantity !== '' && this.state.unitCost !== '') {
            store.dispatch(add(this.state.product, this.state.quantity, this.state.unitCost))
            this.initial()
        }else {
            //alert('not full')
        }
    }

    update = () => {
        console.log(store.getState().cart)
    }

    del = () => {

    }

    productChange = (event) => {
        this.setState({
            product: event.target.value
        })
    }

    quantityChange = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }

    unitCostChange = (event) => {
        this.setState({
            unitCost: event.target.value
        })
    }

    render(){
        return (
            <div>
            product: <input value={this.state.product} onChange={this.productChange} /><br />
            quantity: <input value={this.state.quantity} onChange={this.quantityChange} /><br />
            unitCost: <input value={this.state.unitCost} onChange={this.unitCostChange} /><br />
            <button onClick={this.add}>add</button>
            <button onClick={this.del}>del</button>
            <button onClick={this.update}>update</button>
            </div>
        )
    }
}

export default Button;
