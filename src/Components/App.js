// import React from 'react';

import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

import { v1 as uuidv1 } from 'uuid';
import DataUser from './Data.json';

// function App() {
//  thongBao =() =>{}
  // return (
    
  //  <div>
  //    <Header/>
  //    <div className="searchForm">
  //       <div className="container">
  //           <div className="row">
  //               <Search/>
  //               <TableData/>
  //               <AddUser/>
  //           </div>  
  //       </div>
  //    </div>
  //  </div>
  // );
// }

// export default App;


import React, { Component } from 'react';


class App extends Component {
 
  // thongBao = () =>{
  //   alert("ket noi thanh cong");
  // }
  constructor(props) {
    super(props);
    this.state={
      hienthiForm:false,
      //data : Data,
      //data:DataUser,
      data:[],
      searchText:'',
      editUserStatus:false,
      userEditOject:{}
    }
  }
  
  
  componentWillMount() {
    // kiểm tra xem có hay chưa
    
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser)); // JSON để biến dạng mảng thành chuỗi ,vì localStorage ko thể lưu dưới dạng mảng được
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }

  

  getTextSearch = (dl) =>{
    this.setState({
      searchText:dl
    });

  }

  doiTrangThai = () =>{
    this.setState({
      hienthiForm : !this.state.hienthiForm
    });
  }

  editUser = (user)=>{
    //console.log("da ket nối ok");
    this.setState({
      userEditOject:user
    });
    //console.log(user);
  }
  getNewUserData = (name,tel,Permission) => {
    var item ={};
    //item.id = "";
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    var items = this.state.data
    items.push(item);
    console.log('ket noi oke');
    //console.log(item);
    //console.log(items);
    this.setState({ //để bỏ thông tin vào trong data
      data:items
    });
    //console.log(this.state.data);

    localStorage.setItem('userData',JSON.stringify(items));
    
    // console.log(name);
    // console.log(tel);
    // console.log(Permission);
  }
  changeEdituserStatus =() => {
    this.setState({
      editUserStatus:  !this.state.editUserStatus //chấm thang nghĩa là thay đổi ngược lại trạng thái hiện tại
    });
  }
  getUserEditInfoApp = (info) => { //cập nhật lại thông tin mới sửa xuống lại danh sách
    //console.log('thong tin da sua xong la '+ info.name);
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
        
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  deleteUser = (idUser) => {
    //console.log(idUser);
    // var arr=[1,2,3];
    // var x =2;
    // arr = arr.filter(item => imtem != x);// tạo 1 mảng mới  không chứa phần tử xóa ,nghĩa là xóa
    // console.log(arr);
    // var tempData = this.state.data;
    // tempData = tempData.filter(item => item.id !== idUser);

    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data:tempData // xoa xong thì phải set lại dữ liệu 
    });
    // đẩy vào dữ liệu
    localStorage.setItem('userData',JSON.stringify(tempData));

    //console.log(tempData);
    
    // this.state.data.forEach((value,key) => {
    //   if(value.id === idUser){
    //     console.log(key);
        
    //   }
    // })
  }
  render() {

    // localStorage.setItem("key1","hí hí ");
    // console.log(localStorage.getItem('key1'));
    // localStorage.removeItem('key1');
     
    //localStorage.setItem('userData',this.state.data); // cả 2 cái đều được
    //localStorage.setItem('userData',Data);
    //localStorage.setItem('userData',JSON.stringify(DataUser));
    var ketqua=[];
    this.state.data.forEach((item) =>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    //console.log(ketqua);
    
    
    return (
    
      <div>
        <Header/>
        <div className="searchForm">
           <div className="container">
               <div className="row">
                   <Search 
                    getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                    userEditOject={this.state.userEditOject} 
                    changeEdituserStatus ={() => this.changeEdituserStatus()}
                    editUserStatus ={this.state.editUserStatus} 
                    checkConnectProps ={(dl)=> this.getTextSearch(dl)} 
                    ketnoi ={()=>this.doiTrangThai()} 
                    lienket={this.state.hienthiForm}/>

                   <TableData 
                      deleteUser = {(idUser) => this.deleteUser(idUser)} 
                      changeEdituserStatus ={() => this.changeEdituserStatus()}
                     editFun={(user) =>this.editUser(user)}
                     coSoDuLieu= {ketqua} />
                   {/* <TableData coSoDuLieu= {this.state.data} /> lấy hế tất cả giá trị*/}

                   <AddUser add={(name,tel,Permission) => this.getNewUserData(name,tel,Permission)}
                    lienket={this.state.hienthiForm}/>
               </div>  
           </div>
        </div>
      </div>
     );
    
}
}

export default App;


