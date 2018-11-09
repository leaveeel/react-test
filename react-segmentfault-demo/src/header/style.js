import styled, {
    css
} from 'styled-components'
import logo from '../img/logo-b.svg'
import sf from '../img/sf.gg-tip@2x.png'
import user from '../img/user-64.png'
import money from '../img/badge.svg'

const downarr = css `
    content: '';
    width: 0;
    height: 0;
    border: 0;
    border-left: 4.5px solid transparent;
    border-right: 4.5px solid transparent;
    border-top: 4.5px solid #757575;
`

export const Head = styled.header `
    width: 100%;
    border-top: 3px solid #009a61;
    background: #fafafa;
    margin-bottom: 9999px;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1);
    z-index: 3;
`
export const Main = styled.div `
    width: 1140px;
    height: 64px;
    margin: auto;
`

export const MainLeft = styled.div `
    width: 75%;
    float: left;
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
`

export const Logo = styled.a `
    float: left
    display: block
    width: 150px;
    height: 64px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: left center;
    -moz-background-size: auto 27px;
    -o-background-size: auto 27px;
    -webkit-background-size: auto 27px;
    background-size: auto 27px;
    &:hover{
        &::before{
            content: '';
            display: block;
            position: absolute;
            width: 146px;
            height: 100%;
            left: 25px;
            top: 15px;
            background: url(${sf}) no-repeat 0 100%;
            background-size: 146px;
            z-index: 1;
        }
    }
`
export const Nav = styled.ul `
    float: left
    display: block
    height: 64px;
    margin: -1px 0 0 20px;
    padding: 15px 0;
`
export const FirstMenu = styled.li `
    float: left
    display: inline-block
    position: relative;
    padding: 0;
    margin: 0 0 0 2px;
    color: #666;
    &:first-child{
        margin: 0;
    }
    &:hover{
        background-color: #F3F3F3;
        > div {
            display: block;
            visibility: visible;
        }
    }
`
export const FMa = styled.a `
    display: inline-block
    padding: 0 12px;
    height: 34px;
    line-height: 34px;
    color: ${props => props.choose ? '#009a61' : '#757575'};
    font-weight: ${props => props.choose ? '600' : '500'};
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    font-size: 16px;
    &::after {
        content: '';
        display: ${props => props.tips ? "block" : "none"};
        width: 6px;
        height: 6px;
        background-color: #ed1c24;
        position: absolute;
        right: 4px;
        top: 5px;
        border-radius: 50%;
    }
`

export const DownArrow = styled.i `
    float: right;
    height: 34px;
    padding-top: 14px;
    margin-left: 4px;
    &::before {
        ${downarr}
    }
`

export const SubMenu = styled.div `
    position: absolute
    float: left
    top: 100%;
    left: 0;
    z-index: 1000;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,0.175);
    box-shadow: 0 6px 12px rgba(0,0,0,0.175);
    display: none;
    visibility: hidden;
`

export const SubUl = styled.ul `
    float: left
    top: 0;
    left: 0;
    min-width: 120px;
    padding: 5px 0;
    font-size: 14px;
    text-align: left;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background-color: #fafafa;
    border-radius: 4px;
`

export const SubA = styled.a `
    display: block
    padding: 6px 13px;
    clear: both;
    font-weight: 500;
    line-height: 1.42857143;
    color: #757575;
    white-space: nowrap;
    font-size: 16px;
    &:hover{
        color: #009a61;
        text-decoration: none;
        background-color: # f3f3f3;
    }
`

export const Recommend = styled.div `
    position: relative
    padding: 15px 20px 30px;
    margin-left: 121px;
    min-height: 280px;
    max-width: 280px;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    box-shadow: -1px 0px 0 0 #eee;
`

export const RecommendItem = styled.div `
    line-height: 1.5;
    margin-bottom: 10px;
    min-width: 240px;
`

export const ItemTitle = styled.p `
    margin-bottom: 0;
    font-size: 14px;
    color: #009a61;
    font-weight: 500;
    &:hover{
        text-decoration: underline;
    }
`

export const ItemInfo = styled.div `
    color: #999;
    font-size: 12px;
`

export const ItemState = styled.span `
    color: #F5A623;
`

export const ItemMore = styled.div `
    position: absolute
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    line-height: 1;
    > a {
        color: #999;
        font-size: 12px;
    }
`

export const Search = styled.form `
    position: absolute
    display: inline-block
    float: right
    right: 0;
    transition: width 0.25s ease;
    margin: 15px 15px 0 0;
    vertical-align: middle;
    @media (min-width: 1200px) {
        width: ${props => props.focus ? '77%' : '265px'};
    }
    button {
        position: absolute
        width: 40px;
        height: 34px;
        top: 0;
        right: 0;
        color: #999;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: transparent;
        cursor: pointer;
        border-radius: 4px;
        background: none;
    }
    input {
        display: block
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42858;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
        -webkit-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
        -o-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
    }
`

export const MainRight = styled.div `
    @media (min-width: 1200px) {
        width: 25%
    }
    float: right
    position: relative
    padding-left: 15px;
    padding-right: 15px;
    text-align: right;
`

export const UnLogin = styled.ul `
    padding: 15px 0;
    display: inline-block
    li {
        height: 34px;
    }
    button {
        display: inline-block
        background: none;
        line-height: 34px;
        border: none;
        font-size: 14px;
        padding: 0 12px;
        font-weight: 500;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        cursor: pointer;
        :focus {
            outline: none;
        }
    }
    .login {
        margin-bottom:2px;
        color: #009a61;
        &:hover {
            background: #F3F3F3
        }
    }
    .register {
        color: #fff;
        background-color: #009a61;
        border-color: #008151;
        padding: 0 13px;
        margin-left: 10px;
        &:hover {
            background-color: #006741;
            border-color: #00432a;
        }
    }
`

export const IsLogin = styled.ul `
    padding: 15px 0;
    display: inline-block
    > li {
        position: relative
        display: inline-block
        height: 34px
        vertical-align: middle;
        &:first-child {
            margin-right: 12px;
        }
        button {
            overflow: hidden;
            width: 66px;
            height: 34px;
            -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.05);
            box-shadow: 0 1px 1px rgba(0,0,0,0.05);
            color: #333;
            border: 1px solid #ccc;
            background: #fff;
            font-weight: normal;
            cursor: pointer;
            white-space: nowrap;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42858;
            border-radius: 4px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            outline: 0;
            &:hover {
                color: #333;
                background-color: #e6e6e6;
                border-color: #adadad;
            }
            &:active {
                -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
                box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
            }
            i {
                float: right
                padding-top: 9px;
                margin-left: 3px;
                &::after {
                    ${downarr}
                    border-top-color: #333;
                }
            }
        }
        > span {
            display: inline-block
            padding: 0 12px;
            height: 34px;
            line-height: 34px;
            color: #757575;
            font-weight: 500;
            -moz-border-radius: 4px;
            -webkit-border-radius: 4px;
            border-radius: 4px;
            font-size: 20px;
            cursor: pointer;
            &:hover {
                background-color: #F3F3F3;
            }
        }
        > a {
            display: block
            background: url(${user}) no-repeat center;
            margin-left: 10px;
            width: 34px;
            height: 34px;
            -moz-border-radius: 50%;
            -webkit-border-radius: 50%;
            border-radius: 50%;
            vertical-align: bottom;
            background-size: contain;
        }
    }
`

export const Make = styled.ul `
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: ${props => props.show ? 'block' : 'none'};
    float: left;
    min-width: 120px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,0.175);
    box-shadow: 0 6px 12px rgba(0,0,0,0.175);
    background-clip: padding-box;
    a {
        display: block
        clear: both;
        line-height: 1.42858;
        color: #333;
        white-space: nowrap;
        padding: 3px 15px;
        &:hover {
            background-color: #f5f5f5;
        }
    }
    li:last-child{
        border-top: 1px solid #e5e5e5
        padding-top: 9px
        margin-top: 9px
    }
`

export const Opts = styled.div `
    position: absolute
    display: ${props => props.show ? 'block' : 'none'}
    padding: 0;
    right: 0;
    left: inherit;
    top: 100%;
    width: 320px;
    overflow: hidden;
    z-index: 1000;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.15);
    box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.18);
    border-radius: 3px;
    background-clip: padding-box;
    background: #f5f5f5;
    .head {
        width: 320px;
        > li {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            padding: 0 15px;
        }
    }
    .body {
        background: #fff;
        width: 320px;
        height: 270px;
    }
    .foot {
        display: block;
        color: #666;
        padding: 10px;
        font-size: 13px;
        text-align: right;
        border-top: 1px solid #ddd
    }
`

export const OptsHli = styled.li `
    width: 80px;
    text-align: center;
    padding: 0;
    color: ${props => props.active ? '#009A61' : '#666'}
    border-bottom: ${props => props.active ? '2px solid #009A61' : '1px solid #ddd'}
    cursor: pointer
    font-size: 20px;
    &:hover {
        border-bottom: 2px solid #009A61
    }
`

export const UserMenu = styled.div `
    display: ${props => props.show ? 'block' : 'none'}
    position: absolute;
    margin-top: 2px;
    padding: 5px 0;
    top: 100%;
    right: 0;
    z-index: 1000;
    min-width: 240px;
    font-size: 14px;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,0.175);
    box-shadow: 0 6px 12px rgba(0,0,0,0.175);
    background: #fff;
    hr {
        margin: 9px 0
        border: 0;
        border-top: 1px solid #eee
    }
    .head {
        overflow: hidden
        label {
            float: left;
            display: block;
            font-weight: bold;
            color: #212121;
            margin-left: 20px;
            margin-right: 10px;
            line-height: 34px;
        }
        ul {
            float: left
            display: block
            line-height: 34px
            li {
                float: left;
                color: #9E9E9E;
                margin-right: 4px;
                font-size: 14px;
                i {
                    float:left
                    display: block
                    margin-right: 5px;
                    width: 14px;
                    height: 34px;
                    background-image: url(${money});
                    background-repeat: no-repeat;
                }
                p {
                    float:left;
                    display: block;
                }
            }
        }
    }
    .body {
        overflow: hidden;
        li {
            width: 50%;
            float: right;
            text-align: left;
            a {
                display: block;
                padding: 3px 20px;
                clear: both;
                font-size: 14px;
                line-height: 1.42857143;
                color: #212121;
                white-space: nowrap
            }
            &:hover {
                background: #f5f5f5;
            }
        }
    }
    .foot {
        text-align: center;
        color: #999
        padding: 3px 0
        a {
            color: #999
            font-size: 13px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`

export const Gold = styled.i `
    background-position: 0;
`

export const Silver = styled.i `
    background-position: -14px;
`

export const Copper = styled.i `
    background-position: -28px;
`

export const Shadow = styled.div `
    display: ${props => props.show ? 'block' : 'none'}
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    .main {
        position: absolute;
        left: 50%;
        top: 50%;
        background: #fff;
        border-radius: 6px;
        -webkit-box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    }
`