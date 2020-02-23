// components/course-component/c.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    obj:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    sendValueToParent(e){
      const {id,isFull} = e.currentTarget.dataset

      if (isFull) return

      // 此刻把id值从组件传递到页面中
      this.triggerEvent('myevent',id)
    }
  }
})
