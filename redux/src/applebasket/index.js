import React from 'react';
import { AppleBusketS } from './style';

class AppleBusket extends React.Component {
    render() {
        return (
            <AppleBusketS>
                <div className="title">BASKET</div>
                <div className="stats">
                    <div className="section">
                        <div className="head">NOW</div>
                        <div className="content">0，0g</div>
                    </div>
                    <div className="section">
                        <div className="head">END</div>
                        <div className="content">0，0g</div>
                    </div>
                </div>
                <div className="appleList">
                    <div className="empty-tip">NULL</div>
                </div>
                <div className="btn-div">
                    <button>GET</button>
                </div>
            </AppleBusketS>
        )
    }
}

export default AppleBusket
