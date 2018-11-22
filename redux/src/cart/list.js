import React from 'react';
import store from '../redux/store';
import { updateChecked, delChecked } from '../redux/actions/cart-actions';


class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            delArr: [],
            cart: store.getState().cart.cart
        }
    }

    componentWillMount(){
        this.unsubscribe()
    }

    //更新store
    unsubscribe = () => {
        store.subscribe(() =>
            this.setState({
                cart: store.getState().cart.cart
            })
        )
    }

    updateChecked = (event) => {
        let index = +event.target.getAttribute('data-index')
        store.dispatch(updateChecked(index))
    }

    //选中时向数组添加index，取消移除
    delChecked = (event) => {
        let arr = this.state.delArr;
        //字符串转数字
        let index = +event.target.getAttribute('data-index')
        if(event.target.checked) {
            arr.push(index)
            this.setState({
                delArr: arr
            })
        }else {
            //获取点击的checkbox在数组中的位置并删除
            let arrIndex = arr.indexOf(index)
            this.setState({
                arr: arr.splice(arrIndex, 1)
            })
        }
        store.dispatch(delChecked(arr))
    }

    render() {
        return (
            <div>
            <ul>
            {this.state.cart.map((data, index) => 
                <li key = {index}>
                    <input type='checkbox' data-index={index} onClick={this.delChecked} />
                    <input name='update' type='radio' data-index={index} onClick={this.updateChecked} />
                    product: {data.product} quantity: {data.quantity} unitCost: {data.unitCost}
                </li>
            )}
            </ul>
            </div>
        )
    }
}

export default List;
