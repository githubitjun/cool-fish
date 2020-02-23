// components/my-input/my-input.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    obj:Object
  },

  ready(){
    if (this.properties.obj.title) {
      this.setData({
        mytitle: this.properties.obj.title
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:10, // 倒计时的总时长
    mytitle:null, // 显示的内容
    isCountDown:false, // 是否正在倒计时
    timer:null // 倒计时的定时器
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // input框失去焦点的时候，给全局的mobile和vcode赋值
    getValue(e){
      const { currentTarget: { dataset: { type } }, detail: { value }} = e
      
      // 根据type，给app的globalData赋值
      if (type === 'mobile') {
        app.globalData.mobile = value
      } else if(type==='vcode'){
        app.globalData.vcode = value
      }
    },
    // 获取验证码
    getVCode(){
      //1、验证手机号是否合法
      var reg = /^1[3456789][0-9]{9}$/
      const mobile = app.globalData.mobile
      
      if (!reg.test(mobile)){
        wx.showToast({
          title: '手机号不合法',
          icon:'none'
        })
        return
      }

      // 如果正在倒计时，return 即可
      if (this.data.isCountDown) return

      // 可以开始倒计时
      this.setData({
        isCountDown:true, // 正在倒计时
        mytitle:`（${this.data.count}）`
      })

      // 搞一个定时器，隔一秒减少1 更新视图
      this.data.timer = setInterval(() => {
        if (this.data.count <= 1){
          clearInterval(this.data.timer)

          this.setData({
            mytitle:'获取验证码',
            isCountDown:false,
            count:10
          })

          return
        }

        this.data.count --

        this.setData({
          mytitle: `（${this.data.count}）`
        })
      },1000)
    }
  }
})
