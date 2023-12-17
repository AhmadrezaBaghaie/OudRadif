let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_folder = document.querySelector(".track-folder");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    "name": "0-Moghadame",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Abuata/0-Moghadame.mp3",
    "folder": "Abuata"
  },
  {
    "name": "1-Daramad Abouata",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Abuata/1-Daramad Abouata.mp3",
    "folder": "Abuata"
  },
  {
    "name": "2-Chaharmezrabe Abouata",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Abuata/2-Chaharmezrabe Abouata.mp3",
    "folder": "Abuata"
  },
  {
    "name": "3-Goosheye Hejaz, Pt. 1",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Abuata/3-Goosheye Hejaz, Pt. 1.mp3",
    "folder": "Abuata"
  },
  {
    "name": "4-goosheye Hejaz, Pt. 2",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Abuata/4-goosheye Hejaz, Pt. 2.mp3",
    "folder": "Abuata"
  },
  {
    "name": "5-Chaharmezrabe Hejaz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Abuata/5-Chaharmezrabe Hejaz.mp3",
    "folder": "Abuata"
  },
  {
    "name": "6-Goosheye Dobeyti",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Abuata/6-Goosheye Dobeyti.mp3",
    "folder": "Abuata"
  },
  {
    "name": "7-Chaharmezrab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Abuata/7-Chaharmezrab.mp3",
    "folder": "Abuata"
  },
  {
    "name": "8-Goosheye Chaharbagh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Abuata/8-Goosheye Chaharbagh.mp3",
    "folder": "Abuata"
  },
  {
    "name": "9-Goosheye Gabri",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Abuata/9-Goosheye Gabri.mp3",
    "folder": "Abuata"
  },
  {
    "name": "0-Moghadame",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/0-Moghadame.mp3",
    "folder": "Afshari"
  },
  {
    "name": "1-Chaharmezrab Afshari",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/1-Chaharmezrab Afshari.mp3",
    "folder": "Afshari"
  },
  {
    "name": "2-Daramad Aval",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/2-Daramad Aval.mp3",
    "folder": "Afshari"
  },
  {
    "name": "3-Daramade Dovom",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/3-Daramade Dovom.mp3",
    "folder": "Afshari"
  },
  {
    "name": "4-Goosheye Avaz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/4-Goosheye Avaz.mp3",
    "folder": "Afshari"
  },
  {
    "name": "5-Goosheye Jamedaran",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/5-Goosheye Jamedaran.mp3",
    "folder": "Afshari"
  },
  {
    "name": "6-Goosheye Bastenegar",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/6-Goosheye Bastenegar.mp3",
    "folder": "Afshari"
  },
  {
    "name": "7-Goosheye Nahib",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/7-Goosheye Nahib.mp3",
    "folder": "Afshari"
  },
  {
    "name": "8-Goosheye Rohab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/8-Goosheye Rohab.mp3",
    "folder": "Afshari"
  },
  {
    "name": "9-Goosheye Masnavie Pich",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/9-Goosheye Masnavie Pich.mp3",
    "folder": "Afshari"
  },
  {
    "name": "10-Forood",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/10-Forood.mp3",
    "folder": "Afshari"
  },
  {
    "name": "11-Goosheye Gharaei",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/11-Goosheye Gharaei.mp3",
    "folder": "Afshari"
  },
  {
    "name": "12-Chaharmezrab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Afshari/12-Chaharmezrab.mp3",
    "folder": "Afshari"
  },
  {
    "name": "0-Moghadame",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/0-Moghadame.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "1-Daramade Aval Esfahan",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/1-Daramade Aval Esfahan.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "2-Goosheye Avaz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/2-Goosheye Avaz.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "3-Goosheye Jame Daran",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/3-Goosheye Jame Daran.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "4-Goosheye Bayate Raje",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/4-Goosheye Bayate Raje.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "5-Goosheye Hazin",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/5-Goosheye Hazin.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "6-Goosheye Kereshmeh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/6-Goosheye Kereshmeh.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "7-Goosheye Oshagh Esfahan",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/7-Goosheye Oshagh Esfahan.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "8-Goosheye Soozo Godaz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/8-Goosheye Soozo Godaz.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "9-Chaharmezrabe Esfahan",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/9-Chaharmezrabe Esfahan.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "10-Forood Esfahan",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Esfahan/10-Forood Esfahan.mp3",
    "folder": "Bayat-e-Esfahan"
  },
  {
    "name": "0-Chaharmezrab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Tork/0-Chaharmezrab.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "1-Chaharmezrabe Bayate Tork",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Tork/1-Chaharmezrabe Bayate Tork.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "2-Moghadame Bayate Tork",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Tork/2-Moghadame Bayate Tork.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "3-Daramad Bayat Tork",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Tork/3-Daramad Bayat Tork.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "4-Goosheye Jame Daran",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Tork/4-Goosheye Jame Daran.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "5-Goosheye Dogah",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Tork/5-Goosheye Dogah.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "6-Goosheye Mehrabani",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Tork/6-Goosheye Mehrabani.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "7-Goosheye Ghatar",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Bayat-e-Tork/7-Goosheye Ghatar.mp3",
    "folder": "Bayat-e-Tork"
  },
  {
    "name": "0-Chaharmezrab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/0-Chaharmezrab.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "1-Chaharmezrab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/1-Chaharmezrab.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "2-Daramade Aval",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/2-Daramade Aval.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "3-Daramade Sevom",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/3-Daramade Sevom.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "4-Goosheye Mooye",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/4-Goosheye Mooye.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "5-Goosheye Kereshme",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/5-Goosheye Kereshme.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "6-Goosheye Pish Zangoole Va Zangoole",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/6-Goosheye Pish Zangoole Va Zangoole.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "7-Goosheye Zabol",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/7-Goosheye Zabol.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "8-Goosheye Panjemooye Va Ghesmate Dovom Zabol",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/8-Goosheye Panjemooye Va Ghesmate Dovom Zabol.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "9-Chaharmezrab Chahargah",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/9-Chaharmezrab Chahargah.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "10-Goosheye Hesar",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/10-Goosheye Hesar.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "11-Goosheye Mokhalef",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/11-Goosheye Mokhalef.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "12-Goosheye Mokhalef Ghesmate Dovom",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/12-Goosheye Mokhalef Ghesmate Dovom.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "13-Goosheye Hozan",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/13-Goosheye Hozan.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "14-Goosheye Pas Hesar",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/14-Goosheye Pas Hesar.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "15-Goosheye Maarbad",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/15-Goosheye Maarbad.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "16-Goosheye Maghloob",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/16-Goosheye Maghloob.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "17-Goosheye Naghmeh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/17-Goosheye Naghmeh.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "18-Goosheye Hodi",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/18-Goosheye Hodi.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "19-Goosheye Pahlavi",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/19-Goosheye Pahlavi.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "20-Goosheye Mansoori",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Chaharagah/20-Goosheye Mansoori.mp3",
    "folder": "Chaharagah"
  },
  {
    "name": "0-Moghadame",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Dashti/0-Moghadame.mp3",
    "folder": "Dashti"
  },
  {
    "name": "1-Goosheye Hajiani",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Dashti/1-Goosheye Hajiani.mp3",
    "folder": "Dashti"
  },
  {
    "name": "2-Goosheye Dashti",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Dashti/2-Goosheye Dashti.mp3",
    "folder": "Dashti"
  },
  {
    "name": "3-Goosheye Bidegani",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Dashti/3-Goosheye Bidegani.mp3",
    "folder": "Dashti"
  },
  {
    "name": "4-Goosheye Choopani",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Dashti/4-Goosheye Choopani.mp3",
    "folder": "Dashti"
  },
  {
    "name": "5-Goosheye Dashtestani",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Dashti/5-Goosheye Dashtestani.mp3",
    "folder": "Dashti"
  },
  {
    "name": "6-Goosheye Ghamangiz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Dashti/6-Goosheye Ghamangiz.mp3",
    "folder": "Dashti"
  },
  {
    "name": "7-Goosheye Gilaki",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Dashti/7-Goosheye Gilaki.mp3",
    "folder": "Dashti"
  },
  {
    "name": "8-Goosheye Oj",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Dashti/8-Goosheye Oj.mp3",
    "folder": "Dashti"
  },
  {
    "name": "9-Zarbi",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Dashti/9-Zarbi.mp3",
    "folder": "Dashti"
  },
  {
    "name": "0-Moghadame",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/0-Moghadame.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "1-Daramade Aval",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/1-Daramade Aval.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "2-Goosheye Kereshme",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/2-Goosheye Kereshme.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "3-Goosheye Chakavak",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/3-Goosheye Chakavak.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "4-Foroud",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/4-Foroud.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "5-Goosheye Bidad",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/5-Goosheye Bidad.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "6-Forood",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/6-Forood.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "7-Goosheye Neydavood",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/7-Goosheye Neydavood.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "8-Goosheye Bavi",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/8-Goosheye Bavi.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "9-Chaharmezrabe Homayoun",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/9-Chaharmezrabe Homayoun.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "10-Goosheye Nafir",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/10-Goosheye Nafir.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "11-Goosheye Bahre Noor",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/11-Goosheye Bahre Noor.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "12-Goosheye Oshagh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/12-Goosheye Oshagh.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "13-Goosheye Shooshtari",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/13-Goosheye Shooshtari.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "14-Goosheye Mey Goli",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/14-Goosheye Mey Goli.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "15-Goosheye Mansoori",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/15-Goosheye Mansoori.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "16-Forood Be Shooshtari",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/16-Forood Be Shooshtari.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "17-Goosheye Bakhtiari",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/17-Goosheye Bakhtiari.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "18-Chaharmezrab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/18-Chaharmezrab.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "19-Frood",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Homayoun/19-Frood.mp3",
    "folder": "Homayoun"
  },
  {
    "name": "0-Moghadame",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/0-Moghadame.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "1-Goosheye Bardasht",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/1-Goosheye Bardasht.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "2-Daramade Aval",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/2-Daramade Aval.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "3-Goosheye Avaz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/3-Goosheye Avaz.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "4-Goosheye Dad",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/4-Goosheye Dad.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "5-Chaharmezrabe Mahour",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/5-Chaharmezrabe Mahour.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "6-Goosheye Delkash",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/6-Goosheye Delkash.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "7-Goosheye Kereshmeye Delkash",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/7-Goosheye Kereshmeye Delkash.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "8-Goosheye Neyshaboorak",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/8-Goosheye Neyshaboorak.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "9-Goosheye Feyli",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/9-Goosheye Feyli.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "10-Goosheye Zirafkan",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/10-Goosheye Zirafkan.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "11-Mahour Saghir",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/11-Mahour Saghir.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "12-Goosheye Shekaste",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/12-Goosheye Shekaste.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "13-Goosheye Aragh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/13-Goosheye Aragh.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "14-Goosheye Mohayer",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/14-Goosheye Mohayer.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "15-Goosheye Bastenegar",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/15-Goosheye Bastenegar.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "16-Chaharmezrabe Aragh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/16-Chaharmezrabe Aragh.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "17-Goosheye Raak",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/17-Goosheye Raak.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "18-Goosheye Safire Raak",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/18-Goosheye Safire Raak.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "19-Foroud Be Mahour",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Mahoor/19-Foroud Be Mahour.mp3",
    "folder": "Mahoor"
  },
  {
    "name": "0-Moghadame",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/0-Moghadame.mp3",
    "folder": "Nava"
  },
  {
    "name": "1-Daramade Aval",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/1-Daramade Aval.mp3",
    "folder": "Nava"
  },
  {
    "name": "2-Daramade Dovom",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/2-Daramade Dovom.mp3",
    "folder": "Nava"
  },
  {
    "name": "3-Goosheye Kereshme",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/3-Goosheye Kereshme.mp3",
    "folder": "Nava"
  },
  {
    "name": "4-Goosheye Gardanie",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/4-Goosheye Gardanie.mp3",
    "folder": "Nava"
  },
  {
    "name": "5-Gooshye Naghme",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/5-Gooshye Naghme.mp3",
    "folder": "Nava"
  },
  {
    "name": "6-Goosheye Hazin",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/6-Goosheye Hazin.mp3",
    "folder": "Nava"
  },
  {
    "name": "7-Goosheye Bayate Raje",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/7-Goosheye Bayate Raje.mp3",
    "folder": "Nava"
  },
  {
    "name": "8-Goosheye Oshagh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/8-Goosheye Oshagh.mp3",
    "folder": "Nava"
  },
  {
    "name": "9-Goosheye Gavesht",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/9-Goosheye Gavesht.mp3",
    "folder": "Nava"
  },
  {
    "name": "10-Goosheye Ashiran",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/10-Goosheye Ashiran.mp3",
    "folder": "Nava"
  },
  {
    "name": "11-Goosheye Neyshaboorak",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/11-Goosheye Neyshaboorak.mp3",
    "folder": "Nava"
  },
  {
    "name": "12-Chaharmezrab Nava",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/12-Chaharmezrab Nava.mp3",
    "folder": "Nava"
  },
  {
    "name": "13-Goosheye Hosseini",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/13-Goosheye Hosseini.mp3",
    "folder": "Nava"
  },
  {
    "name": "14-Zarbi Nava",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/14-Zarbi Nava.mp3",
    "folder": "Nava"
  },
  {
    "name": "15-Goosheye Malek Hosseini",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/15-Goosheye Malek Hosseini.mp3",
    "folder": "Nava"
  },
  {
    "name": "16-Goosheye Boosalik",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/16-Goosheye Boosalik.mp3",
    "folder": "Nava"
  },
  {
    "name": "17-Goosheye Rahavi",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/17-Goosheye Rahavi.mp3",
    "folder": "Nava"
  },
  {
    "name": "18-Goosheye Takhte Taghdis",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/18-Goosheye Takhte Taghdis.mp3",
    "folder": "Nava"
  },
  {
    "name": "19-Forood Nava",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Nava/19-Forood Nava.mp3",
    "folder": "Nava"
  },
  {
    "name": "0-Moghadame",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/0-Moghadame.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "1-Daramade Aval",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/1-Daramade Aval.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "2-Daramade Dovom",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/2-Daramade Dovom.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "3-Goosheye Zange Shotor",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/3-Goosheye Zange Shotor.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "4-Goosheye Zangooleye Saghir Va Kabir",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/4-Goosheye Zangooleye Saghir Va Kabir.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "5-Goosheye Parvane",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/5-Goosheye Parvane.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "6-Goosheye Naghme",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/6-Goosheye Naghme.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "7-Goosheye Khosravani",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/7-Goosheye Khosravani.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "8-Goosheye Neyriz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/8-Goosheye Neyriz.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "9-Goosheye Panjgah",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/9-Goosheye Panjgah.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "10-Goosheye Sepehr",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/10-Goosheye Sepehr.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "11-Goosheye Oshagh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/11-Goosheye Oshagh.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "12-Goosheye Nahib",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/12-Goosheye Nahib.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "13-Goosheye Aragh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/13-Goosheye Aragh.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "14-Goosheye Mohayer",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/14-Goosheye Mohayer.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "15-Chaharmezrab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/15-Chaharmezrab.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "16-Goosheye Hazin",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/16-Goosheye Hazin.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "17-goosheye Kereshme",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/17-goosheye Kereshme.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "18-Goosheye Tarz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/18-Goosheye Tarz.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "19-Goosheye Leili o Majnoon",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/19-Goosheye Leili o Majnoon.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "20-Goosheye Norooze Khara",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/20-Goosheye Norooze Khara.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "21-Goosheye Mavarollnahr",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/21-Goosheye Mavarollnahr.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "22-Goosheye Raak",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/22-Goosheye Raak.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "23-Goosheye Safire Raak",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/23-Goosheye Safire Raak.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "24-Forood",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/24-Forood.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "25-Chahar Mezrab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Rast-Panjgah/25-Chahar Mezrab.mp3",
    "folder": "Rast-Panjgah"
  },
  {
    "name": "0-Daramad Aval",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/0-Daramad Aval.mp3",
    "folder": "Segah"
  },
  {
    "name": "1-Daramede Dovom",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/1-Daramede Dovom.mp3",
    "folder": "Segah"
  },
  {
    "name": "2-Goosheye Zabol",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/2-Goosheye Zabol.mp3",
    "folder": "Segah"
  },
  {
    "name": "3-Goosheye Baste Negar",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/3-Goosheye Baste Negar.mp3",
    "folder": "Segah"
  },
  {
    "name": "4-Chaharmezrabe Segah",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/4-Chaharmezrabe Segah.mp3",
    "folder": "Segah"
  },
  {
    "name": "5-Goosheye Hesar",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/5-Goosheye Hesar.mp3",
    "folder": "Segah"
  },
  {
    "name": "6-Goosheye Hezan",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/6-Goosheye Hezan.mp3",
    "folder": "Segah"
  },
  {
    "name": "7-Goosheye Maarbad",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/7-Goosheye Maarbad.mp3",
    "folder": "Segah"
  },
  {
    "name": "8-Goosheye Mokhalef",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/8-Goosheye Mokhalef.mp3",
    "folder": "Segah"
  },
  {
    "name": "9-Goosheye Maghloob",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/9-Goosheye Maghloob.mp3",
    "folder": "Segah"
  },
  {
    "name": "10-Goosheye Naghmeye Maghloob",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/10-Goosheye Naghmeye Maghloob.mp3",
    "folder": "Segah"
  },
  {
    "name": "11-Goosheye Par Parastoo",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/11-Goosheye Par Parastoo.mp3",
    "folder": "Segah"
  },
  {
    "name": "12-Goosheye Kereshme",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/12-Goosheye Kereshme.mp3",
    "folder": "Segah"
  },
  {
    "name": "13-Chaharmezrab Segah",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/13-Chaharmezrab Segah.mp3",
    "folder": "Segah"
  },
  {
    "name": "14-Goosheye Hazin",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/14-Goosheye Hazin.mp3",
    "folder": "Segah"
  },
  {
    "name": "15-Goosheye Hozan",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/15-Goosheye Hozan.mp3",
    "folder": "Segah"
  },
  {
    "name": "16-Goosheye Mooye",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Segah/16-Goosheye Mooye.mp3",
    "folder": "Segah"
  },
  {
    "name": "0-Moghadame",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/0-Moghadame.mp3",
    "folder": "Shoor"
  },
  {
    "name": "1-Daramad Aval",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/1-Daramad Aval.mp3",
    "folder": "Shoor"
  },
  {
    "name": "2-Daramad Dovom",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/2-Daramad Dovom.mp3",
    "folder": "Shoor"
  },
  {
    "name": "3-Daramad Chaharom",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/3-Daramad Chaharom.mp3",
    "folder": "Shoor"
  },
  {
    "name": "4-Goosheye Kereshme",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/4-Goosheye Kereshme.mp3",
    "folder": "Shoor"
  },
  {
    "name": "5-Rahavi",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/5-Rahavi.mp3",
    "folder": "Shoor"
  },
  {
    "name": "6-Kereshme",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/6-Kereshme.mp3",
    "folder": "Shoor"
  },
  {
    "name": "7-Daramade Panjom",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/7-Daramade Panjom.mp3",
    "folder": "Shoor"
  },
  {
    "name": "8-Kereshmeh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/8-Kereshmeh.mp3",
    "folder": "Shoor"
  },
  {
    "name": "9-Goosheye Avaz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/9-Goosheye Avaz.mp3",
    "folder": "Shoor"
  },
  {
    "name": "10-Chaharmezrab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/10-Chaharmezrab.mp3",
    "folder": "Shoor"
  },
  {
    "name": "11-Goosheye Naghmeh",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/11-Goosheye Naghmeh.mp3",
    "folder": "Shoor"
  },
  {
    "name": "12-Goosheye Hazin",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/12-Goosheye Hazin.mp3",
    "folder": "Shoor"
  },
  {
    "name": "13-Goosheye Zirkeshe Salmak",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/13-Goosheye Zirkeshe Salmak.mp3",
    "folder": "Shoor"
  },
  {
    "name": "14-Goosheye Salmak",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/14-Goosheye Salmak.mp3",
    "folder": "Shoor"
  },
  {
    "name": "15-Goosheye Molla Noroozi",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/15-Goosheye Molla Noroozi.mp3",
    "folder": "Shoor"
  },
  {
    "name": "16-Moghadameye Golriz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/16-Moghadameye Golriz.mp3",
    "folder": "Shoor"
  },
  {
    "name": "17-Goosheye Golriz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/17-Goosheye Golriz.mp3",
    "folder": "Shoor"
  },
  {
    "name": "18-Goosheye Safa",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/18-Goosheye Safa.mp3",
    "folder": "Shoor"
  },
  {
    "name": "19-Moghadameye Bozorg",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/19-Moghadameye Bozorg.mp3",
    "folder": "Shoor"
  },
  {
    "name": "20-Goosheye Bozorg",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/20-Goosheye Bozorg.mp3",
    "folder": "Shoor"
  },
  {
    "name": "21-Goosheye Dobeyti",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/21-Goosheye Dobeyti.mp3",
    "folder": "Shoor"
  },
  {
    "name": "22-Goosheye Khara",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/22-Goosheye Khara.mp3",
    "folder": "Shoor"
  },
  {
    "name": "23-Goosheye Ghajar",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/23-Goosheye Ghajar.mp3",
    "folder": "Shoor"
  },
  {
    "name": "24-Hazin",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/24-Hazin.mp3",
    "folder": "Shoor"
  },
  {
    "name": "25-Goosheye Molla Nazi",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/25-Goosheye Molla Nazi.mp3",
    "folder": "Shoor"
  },
  {
    "name": "26-Goosheye Panje Gordi",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/26-Goosheye Panje Gordi.mp3",
    "folder": "Shoor"
  },
  {
    "name": "27-Goosheye Ozal",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/27-Goosheye Ozal.mp3",
    "folder": "Shoor"
  },
  {
    "name": "28-Chahar Mezrab",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/28-Chahar Mezrab.mp3",
    "folder": "Shoor"
  },
  {
    "name": "29-Goosheye Gereyli",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/29-Goosheye Gereyli.mp3",
    "folder": "Shoor"
  },
  {
    "name": "30-Goosheye Razavi",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/30-Goosheye Razavi.mp3",
    "folder": "Shoor"
  },
  {
    "name": "31-Goosheye Shahnaz",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/31-Goosheye Shahnaz.mp3",
    "folder": "Shoor"
  },
  {
    "name": "32-goosheye Gharache",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/32-goosheye Gharache.mp3",
    "folder": "Shoor"
  },
  {
    "name": "33-Goosheye Hosseini",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/33-Goosheye Hosseini.mp3",
    "folder": "Shoor"
  },
  {
    "name": "34-Foroud",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/34-Foroud.mp3",
    "folder": "Shoor"
  },
  {
    "name": "35-Shour",
    "artist": "Mansoor Nariman",
    "image": "Oud - Mansoor Nariman/oud.jpeg",
    "path": "Oud - Mansoor Nariman/Shoor/35-Shour.mp3",
    "folder": "Shoor"
  }
];


function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 128;
  let green = Math.floor(Math.random() * 256) + 128;
  let blue = Math.floor(Math.random() * 256) + 128;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url('" + track_list[track_index].image + "')";
  track_name.textContent = track_list[track_index].name;
  track_folder.textContent = track_list[track_index].folder;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "Playing " + (track_index + 1) + " of " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}


function createScrollableList() {
  const trackListContainer = document.getElementById('trackList');
  const folders = {};

  track_list.forEach((track, index) => {
    if (!folders[track.folder]) {
      folders[track.folder] = true;

      const folderItem = document.createElement('div');
      folderItem.textContent = track.folder;
      folderItem.classList.add('listItem', 'folderName');
      trackListContainer.appendChild(folderItem);
    }

    const trackItem = document.createElement('div');
    const spaces = '\xa0'.repeat(track.folder.length); // '\xa0' is a non-breaking space
    trackItem.textContent = `${spaces} ${track.name}`;
    trackItem.classList.add('listItem', 'trackItem');
    trackItem.addEventListener('click', function() {
      loadTrack(index);
      playTrack();

    });

    trackListContainer.appendChild(trackItem);
  });
}




// Call the function to generate the scrollable list
createScrollableList();









// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

