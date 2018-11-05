import styled, {
    css
} from 'styled-components'

const pr = css `
	position: relative;
`
const pa = css `
	position: absolute;
`
const db = css `
	display: block;
`
const dib = css `
	display: inline-block;
`
const fl = css `
	float: left;
`
const fr = css `
	float: right;
`
const oh = css `
	overflow: hidden;
`

export const Out = styled.header `
	width: 100%;
	border-top: 3px solid #009161;
	background: #fafafa;
	margin-bottom: 9999px;
`
export const Head = styled.div `
	${pr};
	width: 1140px;
	height: 64px;
	padding: 0 15px;
	margin: auto;
`
export const Logo = styled.a `
	${fl}
	${db}
	width: 150px;
	height: 64px;
	background-image: url(https://static.segmentfault.com/v-5bdbfaa9/global/img/logo-b.svg);
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
	    	${pa}
	    	width: 146px;
	    	height: 100%;
	    	left: 25px;
	    	top: 15px;
	    	background: url(https://static.segmentfault.com/v-5bdbfaa9/global/img/sf.gg-tip@2x.png) no-repeat 0 100%;
	    	background-size: 146px;
	    	z-index: 1;
		}
	}
`
export const Nav = styled.ul `
	${fl}
	${db}
	height: 64px;
	margin: -1px 0 0 20px;
	padding: 15px 0;
`
export const FirstMenu = styled.li `
	${fl}
	${dib}
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
	${dib}
    padding: 0 12px;
    height: 34px;
    line-height: 34px;
    color: ${props => props.choose ? '#009a61' : '#757575'};
    font-weight: ${props => props.choose ? '600' : '500'};
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    font-size: 16px;
`

export const DownArrow = styled.i `
	${fr}
	height: 34px;
	padding-top: 14px;
	margin-left: 4px;
	&::before {
		content: '';
		width:0;
    	height:0;
    	border:0;
    	border-left:4.5px solid transparent;
    	border-right:4.5px solid transparent;
    	border-top:4.5px solid #757575;
	}
`

export const SubMenu = styled.div `
	${pa}
	${fl}
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
	${fl}
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
	${db}
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
	    background-color: #f3f3f3;
    }
`

export const Recommend = styled.div `
	${pr}
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
	${pa}
	bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    line-height: 1;
    > a {
		color: #999;
    	font-size: 12px;
    }
`