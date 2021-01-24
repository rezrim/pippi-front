import React from 'react';
import axios from 'axios'
import qs from 'qs'


import {URL} from '../utils/Global'

function Form(props) {
    const [link,setLink] = React.useState("")
    const form = React.useRef(null)

    const kirimSay = (e) => {
        alert(link)
        e.preventDefault()
        const data = { 'link': link };
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: URL+"ngingetinLive",
        };
        axios(options);

    }

    return (
        <div>
            <div class="sub-heard-part">
                <ol class="breadcrumb m-b-0">
                <li><a href="index.html">Home</a></li>
                <li class="active">Pippi Ngingetin Live</li>
                </ol>
            </div>
            <div class="forms-main">
                <h2 class="inner-tittle">Form Ngingetin Live</h2>
                <form ref={form} onSubmit={kirimSay}>
                    <div class="graph-form">
                        <div class="form-body">
                            <div class="form-group"> 
                                <label for="exSay">Masukkin Link Youtubenya ya :</label> 
                                <input type="say" class="form-control" id="exSay" value={link} placeholder="Link Youtube" onChange={(e) => setLink(e.target.value)}/> 
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