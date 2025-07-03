// pages/todoList/todoList.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    todoList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},

  handleToggleStatus(e) {
    const id = e.currentTarget.dataset.id;
    const status = e.currentTarget.dataset.status;

    const newTodoList = this.data.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !status };
      }
      return item;
    });
    this.setData({
      todoList: newTodoList,
    });
  },

  handleDelete(e) {
    const id = e.currentTarget.dataset.id;
    const newTodoList = this.data.todoList.filter((item) => item.id !== id);
    this.setData({
      todoList: newTodoList,
    });
  },

  handleAdd() {
    const newValue = {
      id: Date.now(),
      title: this.data.inputValue,
      completed: false,
    };
    this.setData({
      todoList: [newValue, ...this.data.todoList],
      inputValue: '',
    });
  },

  handleInputChange(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
});
