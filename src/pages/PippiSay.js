import React from 'react';
import axios from 'axios'
import qs from 'qs'


import {URL} from '../utils/Global'

function Form(props) {
    const [say,setSay] = React.useState("")
    const form = React.useRef(null)

    const kirimSay = (e) => {
        alert(say)
        e.preventDefault()
        const data = { 'say': say };
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: URL+"pippiSay",
        };
        axios(options);

    }

    return (
        <div>
            <div class="sub-heard-part">
                <ol class="breadcrumb m-b-0">
                <li><a href="index.html">Home</a></li>
                <li class="active">Pippi Say</li>
                </ol>
            </div>
            <div class="forms-main">
                <h2 class="inner-tittle">Form Pippi Say</h2>
                <form ref={form} onSubmit={kirimSay}>
                    <div class="graph-form">
                        <div class="form-body">
                            <div class="form-group"> 
                                <label for="exSay">Mau Pippi Ngomong Apa ?</label> 
                                <input type="say" class="form-control" id="exSay" value={say} placeholder="Masukkin Kata Apa yang Mau Dikirim" onChange={(e) => setSay(e.target.value)}/> 
                            </div> 
                            <button type="submit" class="btn btn-default" style={{margin:0}}>Kirim</button> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;