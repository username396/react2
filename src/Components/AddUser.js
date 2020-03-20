import React, { Component } from 'react';

class AddUser extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state ={
  //     trangThaiChinhSua:false
  //   }
  // }
  // thayDoiTrangThai = () =>{
  //   this.setState({
  //     trangThaiChinhSua:!this.state.trangThaiChinhSua
  //   });
  // }
  // hienThinut = () =>{
  //   if(this.state.trangThaiChinhSua === true){
  //     return<div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}> Đóng Lại </div>;
  //   }
  //   else{
  //     return<div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}> Thêm mới </div>;
  //   }
  // }
  // hienthiForm = () =>{
  //   if(this.state.trangThaiChinhSua === true){
  //         return(
        //   <div className="card text-left">
        //   <div className="card border-success mb-3 mt-2" style={{maxWidth: '18rem'}}>
        //     <div className="card-header">Thêm mới user</div>
        //     <div className="card-body text-success">
        //       <div className="form-group">
        //         <label >Tên user</label>
        //         <input type="text" className="form-control" placeholder="tên user" />
        //       </div>
        //       <div className="form-group">
        //         <label >Điện Thoại</label>
        //         <input type="text" className="form-control" placeholder="Nhập số diện thoại" />
        //       </div>
        //       <div className="form-group">
        //         <label >Phân Quyền</label>
        //         <input type="text" className="form-control" placeholder="Admin" />
        //       </div>
        //       <div className="form-group">
        //         <select className="custom-select" required>
        //           <option value>Chọn Quyền mặc định</option>
        //           <option value={1}>Admin</option>
        //           <option value={2}>modrator</option>
        //           <option value={3}>Normal</option>
        //         </select>
        //       </div>
        //       <div className="form-group">
        //         <div className="btn btn-block btn-primary">Thêm mới</div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        // );
        // }
        
  // }
  //   render() {
  //       return (
  //           <div className="col-3">
              
  //             {this.hienThinut()}
  //             {this.hienthiForm()}
                
  //             </div>

  //       );
  //   }

  constructor(props) {
    super(props);
    this.state ={
      id:"",
      name:"",
      tel:"",
      Permission:""
    }
  }
  
  isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      // console.log(name);
      // console.log(value);
      
      this.setState({
        [name] : value
      });

      //pakage to item
      // var item ={};
      // item.id = this.state.id;
      // item.name = this.state.name;
      // item.tel = this.state.tel;
      // item.Permission = this.state.Permission;
     // console.log(item);
  }
  kiemTraTrangThai = () =>{
    if(this.props.lienket === true){
      return(
        <div className="col">
          <form>
        <div className="card text-left">
                  <div className="card border-success mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Thêm mới user</div>
                    <div className="card-body text-success">
                      <div className="form-group">
                        
                        <input type="text" onChange={(event) => this.isChange(event)} name ="name" className="form-control" placeholder="tên user" />
                      </div>
                      <div className="form-group">
                        
                        <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" placeholder="Nhập số diện thoại" />
                      </div>
                      
                      <div className="form-group">
                        <select className="custom-select" name="Permission" onChange={(event) => this.isChange(event)} required>
                          <option value>Chọn Quyền mặc định</option>
                          <option value={1}>Admin</option>
                          <option value={2}>modrator</option>
                          <option value={3}>Normal</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" 
                        onClick={(name,tel,Permission) => this.props.add(this.state.name,this.state.tel,this.state.Permission)} value="Thêm mới"/>
                      </div>
                    </div>
                  </div>
                </div>
                </form>
                </div>
      );
    }
  }
    render() {
     // console.log(this.state);
        return (
            <div>
              {this.kiemTraTrangThai()}
              </div>

        );
    }

    
}

export default AddUser;