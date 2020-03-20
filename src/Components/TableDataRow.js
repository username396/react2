import React, { Component } from 'react';

class TableDataRow extends Component {
    
    phanQuyen = () => {
        if(this.props.permission === 1 ){
            return "Admin";
        }else if(this.props.permission === 2){
            return "Moderator";
        }else {return "Normal User";}
    }
    editClick = () => {
        this.props.editFunclick();
        this.props.changeEdituserStatus()
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
        // console.log("id cua phan tu " + idUser);
    }
    
    render() {
        
        return (
                <tr>
                    <td>{this.props.stt+1}</td>
                    <td>{this.props.userName}</td>
                    <td>{this.props.tel}</td>
                    <td>{this.phanQuyen()}</td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={() => this.editClick()}><i className="fa fa-edit    ">Sửa</i></div>
                        <div className="btn btn-danger xoa" onClick = {(idUser) => this.deleteButtonClick(this.props.id)}><i className="fa fa-delete    ">Xóa</i></div>
                    </div>
                    </td>
                </tr>
       
        );
    }
}

export default TableDataRow;