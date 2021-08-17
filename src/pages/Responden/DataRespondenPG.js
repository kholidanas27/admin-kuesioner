import React, { Component } from 'react'
import NavbarBuatKuesioner from "../../components/NavbarBuatKuesioner";
import Style from "../../components/styles/datarespondenpg.module.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import IconChecklist from "./../../assets/icon-checklist.svg";
import IconDownload from "./../../assets/icon-download.svg";

class DataRespondenPG extends Component {
    render() {
        return (
            <div>
                <NavbarBuatKuesioner/>
                <div className={Style.grid}>
                    <div className={Style.sidebar1}>
                        <div className="flex">
                            <img className="inline object-cover w-10 h-10 mx-1 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                            <div className="font-semibold px-2 pt-0 flex-wrap text-poppins text-blue-hole">
                                Petter Watson
                                <div className="text-xs pt-0 text-gray-400 text-poppins text-reguler text-poppins">
                                    SMA N 1 Klaten
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-4 px-10 text-blue-hole font-semibold">
                            PENCAPAIAN
                        </div>
                        <div className="flex pt-1 text-blue-hole font-bold">
                            <button style={{fontSize: '9px'}} className="bg-blue-hole px-3 py-0 text-sm text-white rounded-sm"  size="sm">
                            7 Hari Terakhir</button>
                            &nbsp;
                            <button style={{fontSize: '9px'}} className="bg-white text-blue-hole border-2 border-blue-hole px-3 py-0 text-sm rounded-sm ">
                            Keseluruhan</button>
                        </div>
                        <div className="flex text-sm font-normal text-gray-400 font-poppins" style={{fontSize: '10px'}}>
                            Bintangmu selama 7 Hari terakhir
                        </div>
                        <div className="pt-4">
                        <div className="flex py-1">
                            <img src={IconChecklist} className="w-7 h-7"></img>
                            <div className="px-2 pt-1 font-semibold text-sm">
                                Kuesioner
                            </div>
                            &nbsp;
                            <div className="px-14 font-semibold text-sm pt-1">
                                15
                            </div>
                        </div>
                        <div className="flex py-1">
                            <img src={IconChecklist} className="w-7 h-7"></img>
                            <div className="px-2 pt-1 font-semibold text-sm">
                                Partisipasi
                            </div>
                            &nbsp;
                            <div className="px-14 font-semibold text-sm pt-1">
                                15
                            </div>
                        </div>
                        <div className="flex py-1">
                            <img src={IconChecklist} className="w-7 h-7"></img>
                            <div className="px-2 pt-1 font-semibold text-sm">
                                Responden
                            </div>
                            &nbsp;
                            <div className="px-12 font-semibold text-sm pt-1">
                                15
                            </div>
                        </div>
                        <div className="flex py-1">
                            <img src={IconChecklist} className="w-7 h-7"></img>
                            <div className="px-2 pt-1 font-semibold text-sm">
                                SC
                            </div>
                            &nbsp;
                            <div className="pl-20 font-semibold text-sm pt-1">
                                39000
                            </div>
                        </div>
                        <div className="flex py-1">
                            <img src={IconChecklist} className="w-7 h-7"></img>
                            <div className="px-2 pt-1 font-semibold text-sm">
                                Poin
                            </div>
                            &nbsp;
                            <div className="pl-24 pr-14 font-semibold text-sm pt-1">
                                0
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className={Style.sidebar2}>
                    <Row>
                    <Col>
                    <div className="breadcumb" style={{fontSize: "14pt", fontWeight: "bold", paddingBottom: "10px"}}>
                        Pengisian Jawaban Kuesioner
                    </div>
                    <div className=" ">
                        <button className="bg-yellow-500 text-white font-semibold rounded-tr-lg font-poppins px-2">
                            Data Responden
                        </button>
                    </div>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className="font-semibold">NPSN</Form.Label>
                            <Form.Control type="text" placeholder="K-124321344" size="sm" as="select" id="inlineFormCustomSelectPref" custom>
                            <option value="1">K-124321344</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="font-semibold">Institusi / Sekolah</Form.Label>
                            <Form.Control type="text" placeholder="SMAN 1 Klaten" size="sm" disabled />
                        </Form.Group>
                         <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="font-semibold">Jenis User</Form.Label>
                            <Form.Control type="text" placeholder="SMAN 1 Klaten" size="sm" >
                            <option value="1">GU</option>
                            <option value="2">Si</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                         <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="font-semibold">Nama Responden</Form.Label>
                            <Form.Control type="text" placeholder="SMAN 1 Klaten" size="sm" >
                            <option value="1">Bambang Saputra</option>
                            <option value="2">Si</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="font-semibold">Username Responden</Form.Label>
                            <Form.Control type="text" placeholder="Bamang_spt01" size="sm" disabled />
                        </Form.Group>
                    </Form>
                    </Col>
                    <Col style={{paddingTop:"38px"}}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="font-semibold">Sifat</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom disabled>                             
                            <option value="1">Terbuka</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="font-semibold">Bentuk</Form.Label>
                            <Form.Control type="text" placeholder="Pilihan Ganda" size="sm"  disabled> 
                            </Form.Control>
                        </Form.Group>
                        <div className="pt-1">
                        <Form.Label className="font-semibold">Panduan</Form.Label>
                            <div>
                                <button class="text-blue-hole border-2 border-blue-hole px-3 py-1 text-sm rounded-sm  inline-flex items-center">
                                    <img class="w-4 h-4 mr-2" src={IconDownload}></img>
                                <span>Download Panduan</span>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col style={{paddingTop:"63px"}}> 
                    </Col>
                    </Row>
                    </div>
                    <div className={Style.sidebar3}>
                    <div className="flex font-semibold py-2 px-2 text-blue-hole border-b-2 border-gray-150">
                        RESPONDEN
                    </div>
                    <div className="pt-3">
                        <div className="flex py-1">
                            <img className="inline object-cover w-8 h-8 mx-1 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                            <div className="px-1 pl-2 pt-1 font-semibold text-sm">
                                Muryanto
                            </div>
                            &nbsp;
                            &nbsp;
                            <div className="pl-3 bg-gray-400 flex rounded-full px-5 font-semibold text-sm pt-1 ">
                            <div className="flex">
                                <div className=" absolute">
                                {/* <img src={IconChecklist} className="w-6 h-6"></img> */}
                                </div>
                                <div className="flex absolute right font-bold" style={{fontSize: '10px'}}>
                                    108 Poin
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex py-1">
                            <img className="inline object-cover w-8 h-8 mx-1 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                            <div className="px-1 pl-2 pt-1 font-semibold text-sm">
                                Muryanto
                            </div>
                            &nbsp;
                            &nbsp;
                            <div className="pl-3 bg-gray-400 flex rounded-full px-5 font-semibold text-sm pt-1 ">
                            <div className="flex">
                                <div className=" absolute">
                                {/* <img src={IconChecklist} className="w-6 h-6"></img> */}
                                </div>
                                <div className="flex absolute right font-bold" style={{fontSize: '10px'}}>
                                    108 Poin
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex py-1">
                            <img className="inline object-cover w-8 h-8 mx-1 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                            <div className="px-1 pl-2 pt-1 font-semibold text-sm">
                                Muryanto
                            </div>
                            &nbsp;
                            &nbsp;
                            <div className="pl-3 bg-gray-400 flex rounded-full px-5 font-semibold text-sm pt-1 ">
                            <div className="flex">
                                <div className=" absolute">
                                {/* <img src={IconChecklist} className="w-6 h-6"></img> */}
                                </div>
                                <div className="flex absolute right font-bold" style={{fontSize: '10px'}}>
                                    108 Poin
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex py-1">
                            <img className="inline object-cover w-8 h-8 mx-1 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                            <div className="px-1 pl-2 pt-1 font-semibold text-sm">
                                Muryanto
                            </div>
                            &nbsp;
                            &nbsp;
                            <div className="pl-3 bg-gray-400 flex rounded-full px-5 font-semibold text-sm pt-1 ">
                            <div className="flex">
                                <div className=" absolute">
                                {/* <img src={IconChecklist} className="w-6 h-6"></img> */}
                                </div>
                                <div className="flex absolute right font-bold" style={{fontSize: '10px'}}>
                                    108 Poin
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>  
                    <div className={Style.sidebar4}>
                    <div className="breadcumb" style={{fontSize: "14pt", fontWeight: "bold", paddingBottom: "10px"}}>
                        Buat Panduan Kuesioner
                    </div>
                    <Row>
                        <Col>
                        <Form className={Style.form}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Waktu Buat</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>ID Kuesioner</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Kuesioner Sarpras</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Keterangan Kuesioner</Form.Label>
                            <Form.Control as="textarea" placeholder="Kuesioner untuk mengetahui kualitas prasana sekolah" size="sm">
                            </Form.Control>
                        </Form.Group>
                    </Form>
                        </Col>
                        <Col style={{paddingTop:"0px"}}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Bentuk</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom disabled> 
                            <option value="0">Pilih Bentuk Kuesioner</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Sifat</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm" as="select" id="inlineFormCustomSelectPref" custom disabled> 
                            <option value="0">Pilih Sifat Kuesioner</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nilai Scoin</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Poin</Form.Label>
                            <Form.Control type="text" placeholder="e.g. nicho" size="sm"/>
                        </Form.Group>
                    </Col>
                        <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Isian</Form.Label>
                            <Form.Control as="textarea" rows={3} style={{fontSize:"10pt", height: '100px'}} placeholder="Ketik Isian disini" />
                        </Form.Group>
                        <div className={Style.btnupload}>
                            <input id="input-file" className="d-none" type="file" />
                            <Button  size="sm" >
                            Buat Panduan
                            </Button> 
                        </div>
                        </Col>
                    </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default DataRespondenPG;