import React from 'react';
import { AppleItemS } from './style';

class AppleItem extends React.Component {
    render() {
        return (
            <AppleItemS>
            <div className="info">
            <div className="name">Number 1</div>
            <div className="weight">265g</div>
            </div>
            <div className="btn-div"><button>down</button></div>
            </AppleItemS>
        )
    }
}

export default AppleItem;
