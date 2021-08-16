import React, { Component } from 'react'
import NavbarBuatKuesioner from "../../components/NavbarBuatKuesioner";
import Style from "../../components/styles/buatinstrumentlinkert.module.css";
import { Form, Row, Col, Button } from "react-bootstrap";

class BuatInstrumentLinkert extends Component {
    render() {
        return (
            <div>
                <NavbarBuatKuesioner/>
                <div className={Style.grid}>
                    <div className={Style.sidebar1}>INI ADALAH UNTUK SIDEBAR1</div>
                    <div className={Style.sidebar2}>
                    <Row>
                    <Col>
                    <div className="breadcumb" style={{fontSize: "14pt", fontWeight: "bold", paddingBottom: "10px"}}>
                        Pembuatan Instrument
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
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Nama Kuesioner</Form.Label>
                            <Form.Control type="text" placeholder="Kuesioner Sarpras" size="sm" disabled/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Keterangan Kuesioner</Form.Label>
                            <Form.Control as="textarea" placeholder="Kuesioner untuk mengetahui kualitas prasana sekolah" size="sm" disabled>
                            
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    </Col>
                    <Col style={{paddingTop:"38px"}}>
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
                            <Form.Control type="text" placeholder="Skala Linkert" size="sm"  disabled> 
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nilai Scoin</Form.Label>
                            <Form.Control type="text" placeholder="Nilai Scoin" size="sm" disabled> 
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col style={{paddingTop:"38px"}}> 
                    </Col>
                    </Row>
                    </div>
                    <div className={Style.sidebar3}>3</div>  
                    <div className={Style.sidebar4}>
                    <Row>
                        <Col>
                        <Form className={Style.form}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Tingkat Kategori Pilihan</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Kategori 1</Form.Label>
                            <Form.Control type="text" as="textarea" placeholder="Ketik Pertanyaanmu disini" size="sm" rows={3}  />
                        </Form.Group>
                    </Form>
                        </Col>
                        <Col style={{paddingTop:"0px"}}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Jumlah Tingkat Jawaban Skala Linkert</Form.Label>
                            <Form.Control type="text" placeholder="Ketik Sub-Babmu disini" size="sm" as="select" id="inlineFormCustomSelectPref" custom >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Kategori 2</Form.Label>
                            <Form.Control type="text" as="textarea" placeholder="e.g. nicho" size="sm" rows={3}  />
                        </Form.Group>
                    </Col>
                        <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1" style={{paddingTop:'75px'}}>
                            <Form.Label>Kategori 3</Form.Label>
                            <Form.Control type="text" as="textarea" placeholder="e.g. nicho" size="sm" rows={3}  />
                        </Form.Group>
                        </Col>
                    </Row>
                    <div className={Style.sidebar5}>
                        sdkjfksdj
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BuatInstrumentLinkert;