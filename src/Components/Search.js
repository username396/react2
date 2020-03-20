import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            tempvalue:''
        }
    }
    getUserEditInfo =(info) => { //hàm lấy thông tin trong editUser
        this.setState({
            userObj:info// đây là đối tượng
        });
        this.props.getUserEditInfoApp(info);
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus === true){
            return <EditUser 
            getUserEditInfo={(info) => this.getUserEditInfo(info)}
            userEditOject={this.props.userEditOject} 
            changeEdituserStatus={() => this.props.changeEdituserStatus()} />
        }
    }
    
    isChange = (sukien) =>{ 
        console.log(sukien.target.value);
        this.setState({
            tempvalue:sukien.target.value
        });
        this.props.checkConnectProps(this.state.tempvalue);// tìm luôn trong quá trình gõ
    }
    hienThiNut = () =>{
        if(this.props.lienket === true){
            return <div className="btn btn-block btn-outline-secondary" onClick={()=> this.props.ketnoi()}> Đóng Lại </div>;
        }
        else{
            return <div className="btn btn-block btn-outline-info" onClick={()=> this.props.ketnoi()}> Thêm mới </div>;
        }
    }
    render() {
        
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                
                <div className="form-group">
                    <div className="btn-group">
                    <input type="text" className="form-control"placeholder="Nhập từ khóa tìm kiếm" onChange={(event) => this.isChange(event)}/>
                    <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempvalue)} >Tìm</div>
                    </div>
                    <div className="btn-group1">
                        {this.hienThiNut()}
                    </div>
                </div>
                </div>

        );
    }
}

export default Search;