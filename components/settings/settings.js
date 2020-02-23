// components/settings/settings.js
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
    goToDetail(e){
      const { type, navigateTo} = e.currentTarget.dataset

      if (type != 'arrow') return

      if (navigateTo) {
        wx.navigateTo({
          url: navigateTo,
        })
      }
    }
  }
})
