import styled, { css } from 'styled-component';

export const AppleItemS = styled.div `
    width: 420px;
    margin: 10px auto;
    border-radius: 4px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .info {
        flex-grow: 15;
        .name {
            padding: 6px 0;
            font-size: 20px;
            color: #069;
            font-weight: 500;
        }
        .weight {
            font-size: 16px;
            font-weight: 200;
        }
    }
    .btn-div {
        flex-grow: 2;
        button {
            border: none;
            background-color: #3498db;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
            padding: 10px 24px;
            border-radius: 6px;
            margin: 18px auto;
            outline: none;
        }
        button:hover {
            background-color: #5dade2
        }
    }
`
