import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import ProgLine from '../../components/progline/progline'
import Spinc from '../../components/spinc/spinc'
import './test.styl'

import service from '../../service/http'

class Test extends Component {
  constructor(){
    super()
    this.state={
      list:[],
      questionIndex: 0,
      current:'',
      percent:1,
      questionTotal:12,
      selectInit:65,//字母A ASCII码
      userOptions:[],
      disabled: false
    }
  }
  
  config = {
    navigationBarTitleText: '能力测试',
    usingComponents: {
        "i-icon": "../../iview-weapp/icon/index",
        "i-radio-group": "../../iview-weapp/radio-group/index",
        "i-radio": "../../iview-weapp/radio/index",
        "i-panel": "../../iview-weapp/panel/index"
    }
  }
  
  componentDidMount = async () => { 
    let params = {userOptions:this.state.userOptions}
    const res = await service.getTest(params)

    // // 按照code排列返回数据
    // function compare(property){
    //   return function(a,b){
    //     let valuePre = a[property];
    //     let valueNext = b[property];
    //     return valuePre - valueNext;
    //   }
		// }
		if(res && res.data){
			const sortResData = res.data.root.sort((a,b) => {
				return a[code] - b[code]
			})
			this.setState({
				list: [...sortResData]
			})
		}
  }

  change = (detail) => {
    let questionIndexChange = this.state.questionIndex+1
    let questionPrecent = this.state.percent+1  
    let mapOptions = this.state.list[this.state.questionIndex].options.map((i) => {
      return  i.option_title
    })
    let userOptions = this.state.list[this.state.questionIndex].options[mapOptions.indexOf(detail.target.value.substr(2))].id_option
    let returnData={
        userDoTitleId: this.state.list[this.state.questionIndex].code,
        userAnswerId: userOptions
    }
    if(this.state.userOptions.indexOf(returnData) === -1){
      this.state.userOptions.push(returnData)
    }

    setTimeout(() => {
      this.setState({
        questionIndex: questionIndexChange,
        percent: questionPrecent,
        current:'',
        disabled: false
      })
    },1000,setTimeout(() => {
      this.setState({
          disabled: true
      });
    },0)
    )

    if(this.state.questionIndex === 11){
      Taro.navigateTo({url:'../stuInfo/stuInfo'})
    }
  }

  render () {
    let { questionIndex, current, percent, questionTotal, selectInit, disabled } = this.state
    let questionMsg = this.state.list[questionIndex]
    // let questionTitle = questionMsg.question.replace( /<[^<>]+>/g, '').replace(/&ldquo;/g,'“').replace(/&rdquo;/g,'”').replace(/&lsquo;/g,"'").replace(/&rsquo;/g,"'").replace(/&nbsp;/g," ")
    // let qsOpitions = questionMsg.options

    return (
      <View className='test'>
        { this.state.list.length === 0 
        ? <Spinc style='margin-top:50%' />
        : <View>
            <ProgLine msg={questionIndex+1} percent={percent} questionTotal={questionTotal} />
            <View className='test-section'>
              <i-panel title={questionMsg.code + ' . ' + questionMsg.question}>
                <i-radio-group current={current} onChange={this.change.bind(this)}>
                {
                  questionMsg.options.map((item,index) => {
                    return(
                      <i-radio key={index} disabled={disabled} value={String.fromCharCode(selectInit++) + '.' + item.option_title}></i-radio>
                    )
                  })
                }
                </i-radio-group>
              </i-panel>
            </View>
          </View>
        }
      </View>
    )
  }
}

export default Test