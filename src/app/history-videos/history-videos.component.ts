import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-videos',
  templateUrl: './history-videos.component.html',
  styleUrls: ['./history-videos.component.css']
})
export class HistoryVideosComponent implements OnInit {

  videos = [
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: "https://a.uguu.se/mgKizORe.mp4",
    },
    {
      title: 'أعينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_2.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_3.mp4',
    }
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_4.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_5.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_6.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_7.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_8.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_9.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_10.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_11.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_12.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_13.mp4',
    },
    {
      title: 'عينة من المحتوى',
      description: 'جلس كريستيانو رونالدو وليونيل ميسي بجانب بعضهما البعض',
      src: 'assets/videos/libya_vid_14.mp4',
    },
  ]

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBackPage() {
    this.location.back();
  }
}
