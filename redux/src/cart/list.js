import React from 'react';
import store from '../redux/store';
import { updateChecked, delChecked } from '../redux/actions/cart-actions';


class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cart: store.getState().cart.cart
        }
    }

    componentWillMount(){
        store.subscribe(() =>
            this.setState({
                cart: store.getState().cart.cart
            })
        )
    }

    updateChecked = (event) => {
        //获取属性并转换为number
        let index = +event.target.getAttribute('data-index')
        store.dispatch(updateChecked(index))
    }

    //复选框功能
    //选中时向数组添加index，取消移除
    delChecked = (event) => {
        let arr = store.getState().cart.delete;
        let index = +event.target.getAttribute('data-index')
        if(event.target.checked) {
            arr.push(index)
        }else {
            //获取点击的checkbox在数组中的位置并删除
            let arrIndex = arr.indexOf(index)
            arr.splice(arrIndex, 1)
        }
        store.dispatch(delChecked(arr))
    }

    render() {
        return (
            <div>
            <ul>
            {this.state.cart.map((data, index) => 
                <li key = {index}>
                    <input type='checkbox' readOnly='readOnly' checked={store.getState().cart.delete.indexOf(index) !== -1 ? true : false} data-index={index} onClick={this.delChecked} />
                    <input name='update' readOnly='readOnly' checked={index === store.getState().cart.update ? true : false} type='radio' data-index={index} onClick={this.updateChecked} />
                    product: {data.product} quantity: {data.quantity} unitCost: {data.unitCost}
                </li>
            )}
            </ul>
            </div>
        )
    }
}

export default List;
