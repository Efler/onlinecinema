import React, {Component} from 'react';


class Torrent extends Component {
    constructor(props) {
        super(props);
        console.log(props)
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
            const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
        const obtainedTorrentId = this.props.card.magnet_url
        const test = 'magnet:?xt=urn:btih:d250f1e527c86108d1f180571f43f8dc47edcd3f&dn=rutor.info&tr=udp://opentor.net:6969&tr=http://retracker.local/announce'
        const WebTorrent = require('webtorrent');
        const client = new WebTorrent();

        client.on('error', err => {
            console.log('[+] Webtorrent error: ' + err.message);
        });
        client.add(obtainedTorrentId, function (torrent) {
            const file = torrent.files.find(function (file) {
                return file.name.endsWith('.mp4')
            })
            file.appendTo('body')
        });
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Torrent;