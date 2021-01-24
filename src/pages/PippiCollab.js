import React from 'react';
import axios from 'axios'
import qs from 'qs'


import {URL} from '../utils/Global'

function Form(props) {
    const [link,setLink] = React.useState("")
    const [collab,setCollab] = React.useState("")
    const form = React.useRef(null)

    const kirimSay = (e) => {
        alert("Link = " + link + " dan Collab = "+collab)
        e.preventDefault()
        const data = { 'link': link, 'collab':collab };
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: URL+"pengumumanCollab",
        };
        axios(options);

    }

    return (
        <div>
            <div class="sub-heard-part">
                <ol class="breadcrumb m-b-0">
                <li><a href="index.html">Home</a></li>
                <li class="active">Pippi Ngingetin Collab</li>
                </ol>
            </div>
            <div class="forms-main">
                <h2 class="inner-tittle">Form Ngingetin Collab</h2>
                <form ref={form} onSubmit={kirimSay}>
                    <div class="graph-form">
                        <div class="form-body">
                            <div class="form-group"> 
                                <label for="exSay">Collabnya Sama Siapa ?</label> 
                                <input type="say" class="form-control" id="exSay" value={collab} placeholder="Masukkan Nama yang Collab" onChange={(e) => setCollab(e.target.value)}/> 
                            </div> 
                            <div class="form-group"> 
                                <label for="exLink">Link Youtubenya ?</label> 
                                <input type="link" class="form-control" id="exLink" value={link} placeholder="Masukkin Link Youtube" onChange={(e) => setLink(e.target.value)}/> 
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