import React, { Component } from 'react'
import NavbarBuatKuesioner from "../../components/NavbarBuatKuesioner";
import Style from "../../components/styles/undang.module.css";
import { Form, Row, Col, Button } from "react-bootstrap";

class Undang extends Component {
    render() {
        return (
            <div>
                <NavbarBuatKuesioner/>
                <div className={Style.grid}>
                    <div className={Style.sidebar1}>INI ADALAH UNTUK SIDEBAR1</div>
                    <div className={Style.sidebar2}>
                    <Row>
                    <Col>
                    <div className="breadcumb" className="flex-1" style={{fontSize: "14pt", fontWeight: "bold", paddingBottom: "10px"}}>
                        Undang User untuk menjawab Kuisioner
                    </div>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="K-124321344" size="sm" as="select" id="inlineFormCustomSelectPref" custom>
                            <option value="1">K-124321344</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Waktu Buat</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" type="date" size="sm" disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Nama Kuesioner</Form.Label>
                            <Form.Control type="text" placeholder="Kuesioner Sarpras" size="sm" disabled/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Keterangan Kuesioner</Form.Label>
                            <Form.Control as="textarea" placeholder="Kuesioner untuk mengetahui kualitas prasana sekolah" disabled size="sm">
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    </Col>
                    <Col style={{paddingTop:"65px"}}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Sifat</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom disabled>                             
                            <option value="1">Terbuka</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Bentuk</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom disabled>                             
                            <option value="1">Pilihan Ganda</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Klik Menu Daftar Responden</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom >                             
                            <option value="1">Pilih Daftar Responden</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>ID Kuesioner</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom >                             
                            <option value="1">Pilih ID Kuesioner</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col style={{paddingTop:"65px"}}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Pilih User</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom >                             
                            <option value="1">Pilih User</option>
                            <option value="2">User 1</option>
                            <option value="3">User 2</option>
                            </Form.Control>
                        </Form.Group>
                        <div className="pt-23">
                            <Button size="sm">
                                Undang
                            </Button>
                        </div> 
                    </Col>
                    </Row>
                    </div>
                    <div className={Style.sidebar3}>3</div>  
                    <div className={Style.sidebar4}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Undang;
