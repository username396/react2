import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={// giữ lại các thông tin ban đầu
            id:this.props.userEditOject.id,
            name:this.props.userEditOject.name,
            
            tel:this.props.userEditOject.tel,
            Permission:this.props.userEditOject.Permission
            
        }
    }
    
    isChange = (event) => {// lưu thông tin mới vừa ghi vào 
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }
    saveButton= () => {
        var info = {};
        info.id =this.state.id;
        info.name =this.state.name;
        info.tel =this.state.tel;
        info.Permission =this.state.Permission;
        this.props.getUserEditInfo(info);
        this.props.changeEdituserStatus();
    }
    render() {
        console.log(this.state);
        return (
            <div className="row">
                <div className="col">
                    <form method="post">
                    <div className="card text-left">
                            <div className="card text-white bg-warning mb-3">
                                <div className="card-header text-center">Sửa thông tin user trong hệ thống</div>
                                <div className="card-body text-success">
                                <div className="form-group">
                                    
                                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditOject.name} type="text" name ="name" className="form-control" placeholder="tên user" />
                                </div>
                                <div className="form-group">
                                    
                                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditOject.tel} type="text" name="tel" className="form-control" placeholder="Nhập số diện thoại" />
                                </div>
                                
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditOject.Permission} className="custom-select" name="Permission" required>
                                    <option value>Chọn Quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>modrator</option>
                                    <option value={3}>Normal</option>
                                    </select>
                                </div>

                                {/* <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-danger" 
                                    value="Lưu" onClick ={() => this.props.changeEdituserStatus()}/>
                                </div> */}

                                <div className="form-group">
                                    <input type="button" className="btn btn-block btn-danger" 
                                    value="Lưu" onClick ={() => this.saveButton()}/>
                                </div>
                                </div>
                            </div>
                            </div>
                            </form>
                </div>
                </div>
        );
    }
}

export default EditUser;