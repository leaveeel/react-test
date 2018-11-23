import React from 'react';
import store from '../redux/store';
import { add, update, del, updateChecked, delChecked } from '../redux/actions/cart-actions';

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
        //store数据被改变时更新状态
        store.subscribe(() =>
            //获取store中的状态判断update是否选中
            store.getState().cart.update !== '' ?
            this.setState({
                product: store.getState().cart.cart[store.getState().cart.update].product,
                quantity: store.getState().cart.cart[store.getState().cart.update].quantity,
                unitCost: store.getState().cart.cart[store.getState().cart.update].unitCost
            }) : 
            this.setState({
                product: '',
                quantity: '',
                unitCost: ''
            })
        )
    }

    //清空选中
    initial = () => {
        //执行更新store方法，
        store.dispatch(delChecked([]));
        store.dispatch(updateChecked(''));
    }
    
    add = () => {
        if(this.state.product !== '' && this.state.quantity !== '' && this.state.unitCost !== '') {
            //执行add方法，将相关参数更新到store
            store.dispatch(add(this.state.product, this.state.quantity, this.state.unitCost))
            this.initial()
        }
    }

    update = () => {
        if(store.getState().cart.update !== '') {
            store.dispatch(update(this.state.product, this.state.quantity, this.state.unitCost));
            this.initial();
        }
    }

    del = () => {
        if(store.getState().cart.delete.length > 0) {
            store.dispatch(del(store.getState().cart.delete))
            this.initial();
        }
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
        console.log(store.getState().cart)
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
