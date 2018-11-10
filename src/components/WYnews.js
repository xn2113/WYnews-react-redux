import React,{Component} from 'react';
import fetchJsonp from 'fetch-jsonp';
import ReactDOM from 'react-dom';
class WYnews extends Component {
    constructor(props){
		super(props);
		this.state = {
			list:[]
		}
	}
	componentDidMount(){
		this.getData();
	}
	getData(){
		// 接口通过回调函数获取的数据,,使用fetch-jsonp插件,获取数据
		// (安装cnpm i fetch-jsonp --save,在包文件中Readme种复制方法,修改接口)
		fetchJsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then(function(response) {
            return response.json()
        }).then((json)=>{
            console.log(json)
            this.setState({
                list:json.list
            })
            console.log(this.state.list)
        })
    }
    render(){
        return <div>
            <header>
                <div className="title">网易新闻</div>
            </header>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return <li key={index}>
                            <p>{item.digest} <span>{item.ptime}</span></p>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}
export default WYnews;