import styled, {
    css
} from 'styled-components'

const border = css `
    1px dashed #ddd
`

export const AppleBusketS = styled.div `
    width: 400px;
    margin: 20px;
    border-radius: 4px;
    border: 1px solid #ddd;
    >.title{
        padding: 6px 0px;
        text-align: center;
        color: #069;
        font-size: 20px;
    }
    >.stats{
        width: 100%;
        border-top: ${border};
        border-bottom: ${border};
        padding: 10px 0px;
        .section{
            box-sizing: border-box;
            display: inline-block;
            width: 50%;
            padding-left: 8px;
            .head{
                padding: 6px 0px;
                font-size: 16px;
                color: #069;
            }
            .content{
                font-size: 20px;
                font-weight: 200;
            }
            &:first-of-type{
                border-right: 1px solid #f0f0f0;
            }
        }
    }
    >.appleList{
        padding: 10px 0px;
        .empty-tip{
            text-align: center;
            font-size: 16px;
            color: #ccc;
            padding: 20px 0px;
        }
    }
    >.btn-div{
        text-align: center;
        button{
            color: #fff;
            background-color: #096;
            border: none;
            font-size: 14px;
            padding: 6px 40px; 
            border-radius: 6px;
            margin: 20px auto;
        }
    }
`
