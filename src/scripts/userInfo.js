
export class UserInfo{
  constructor(form, userName, userInfo, avatar, popup){
    this.form = form;
    this.setUserInfo = this.setUserInfo.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.userName = userName;
    this.userInfo = userInfo;
    this.avatar = avatar;
    this.popup = popup;
  }

  setUserInfo(){
    this.form.editName.value = this.userName.textContent;
    this.form.editInfo.value = this.userInfo.textContent;
  }
  
  updateUserInfo(event){
    event.preventDefault();
    this.userName.textContent = this.form.editName.value;
    this.userInfo.textContent = this.form.editInfo.value;
    this.popup.close();
  }
}
