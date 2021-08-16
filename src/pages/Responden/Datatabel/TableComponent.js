import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from 'sweetalert';
import { deleteUser } from "../../../actions/userAction";
import IconDetail from "../../../assets/icon-detail.svg";
import IconReturn from "../../../assets/icon-return.svg";
import IconBayar from "../../../assets/icon-bayar.svg";
import IconChat from "../../../assets/icon-chat.svg";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id))
      swal("Data User Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
}


const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponent = (props) => {

  const columns = [
    {
      dataField: "id",
      text: "No",
      headerAlign: 'center',
      headerStyle: () => {
        return { width: "2%" };
      },
       style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
    {
      dataField: "nama",
      text: "Waktu Partisipan",
      headerAlign: 'center',
      style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
    {
      dataField: "nama",
      text: "Pemilik",
      headerAlign: 'center',
      style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerTitle: () =>{
        return { color: 'white' }
      },
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
    {
      dataField: "nama",
      text: "Username",
      style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: () => {
        return { width: "8%" };
      },
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
    {
      dataField: "nama",
      text: "JU",
      style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
    {
      dataField: "nama",
      text: "ID",
      style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
        {
      dataField: "nama",
      text: "Judul",
      style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: () => {
        return { width: "10%" };
      },
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
        {
      dataField: "nama",
      text: "Keterangan",
       style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: () => {
        return { width: "10%" };
      },
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
        {
      dataField: "nama",
      text: "Sifat",
       style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
        {
      dataField: "nama",
      text: "NPSN",
       style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
    {
      dataField: "alamat",
      text: "Institusi",
       style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
    {
      dataField: "alamat",
      text: "Nama Partisipan",
       style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
    {
      dataField: "alamat",
      text: "Scoin",
       style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    },
    {
      dataField: "alamat",
      text: "Hasil",
       style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
                <img src={IconDetail}/>
            </Link>
          </div>
        );
      },
    },
    {
      dataField: "alamat",
      text: "Bayar",
       style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
    formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
                <img src={IconBayar}/>
            </Link>
          </div>
        );
      },
    },
    {
      dataField: "return",
      text: "Return",
       style: () => {
        return { backgroundColor : "#F2F3F5"}
      },
      headerAlign: 'center',
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
       formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
                <img src={IconReturn}/>
            </Link>
          </div>
        );
      },
    },
    {
      dataField: "link",
      text: "",
      headerAlign: 'center',
       style: () => {
        return { backgroundColor: "#F2F3F5"}
      },
      headerStyle: {
      backgroundColor: '#18A1FA'
    },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
                <img src={IconChat}/>
            </Link>
          </div>
        );
      },
    },
  ];

  
  return (
  <div>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faUserPlus} /> Create User
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h4>{props.errorUsersList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
  </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
