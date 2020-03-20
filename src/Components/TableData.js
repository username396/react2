import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    
  deleteButtonClick = (idUser) => {
    // console.log(idUser);
    this.props.deleteUser(idUser);
  }
  mappingDataUser = () => (
    this.props.coSoDuLieu.map((value,key) => (
      <TableDataRow deleteButtonClick ={ (idUser) => this.deleteButtonClick(idUser)}
      changeEdituserStatus ={() => this.props.changeEdituserStatus()}
       editFunclick={(user) =>this.props.editFun(value)} key={key} stt={key} userName={value.name} tel={value.tel} permission={value.Permission} id={value.id} />
    ))
  )
  
  render() {
    console.log(this.props.coSoDuLieu);
        return (
            <div className="col">
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Điện Thoại</th>
        <th>Quyền</th>
        <th>Thao Tác</th>
      </tr>
    </thead>
    <tbody>
          {this.mappingDataUser()}
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;