import React, {useState,Component} from 'react';


class Torrent extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        torrentInfoHash: "",
        torrentMagnetURI: "",
        torrentName: "",
        torrentProgress: "",
        torrentFiles: []
    }

    componentDidMount() {
        // Sintel, a free, Creative Commons movie
        const torrentId = this.props.card.magnet_url
        console.log(torrentId)
        const WebTorrent = require('webtorrent');
        const client = new WebTorrent();

        client.on('error', err => {
            console.log('[+] Webtorrent error: ' + err.message);
        });

        client.add(torrentId, function (torrent) {
            const file = torrent.files.find(function (file) {
                return file.name.endsWith('.mp4')
            })
            console.log(file)
            file.appendTo('.player')
        });
    }

    render() {
        return (
            <div className="player">
            </div>
        );
    }
}

export default Torrent;