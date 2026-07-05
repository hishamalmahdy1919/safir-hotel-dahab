(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_5ED15302_50D7_ACED_41C0_97FA41DEDB5E]); this.init(); this.syncPlaylists([this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890,this.mainPlayList])",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  {
   "horizontalAlign": "center",
   "scrollBarOpacity": 0.5,
   "left": 0,
   "children": [
    {
     "layout": "horizontal",
     "horizontalAlign": "left",
     "itemLabelFontWeight": "normal",
     "maxHeight": 600,
     "maxWidth": 800,
     "itemBorderRadius": 0,
     "backgroundOpacity": 0.2,
     "itemThumbnailHeight": 75,
     "scrollBarVisible": "rollOver",
     "itemThumbnailScaleMode": "fit_outside",
     "itemLabelFontSize": 14,
     "itemThumbnailShadowHorizontalLength": 3,
     "itemVerticalAlign": "middle",
     "scrollBarMargin": 2,
     "class": "ThumbnailList",
     "itemLabelPosition": "bottom",
     "borderRadius": 5,
     "itemPaddingLeft": 3,
     "paddingLeft": 20,
     "paddingRight": 20,
     "scrollBarWidth": 10,
     "backgroundColorRatios": [
      0
     ],
     "propagateClick": false,
     "itemThumbnailShadowBlurRadius": 4,
     "itemBackgroundColorDirection": "vertical",
     "minHeight": 0,
     "itemThumbnailShadow": true,
     "verticalAlign": "top",
     "itemOpacity": 1,
     "itemThumbnailWidth": 100,
     "itemLabelFontColor": "#FFFFFF",
     "backgroundColor": [
      "#000000"
     ],
     "playList": "this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890",
     "itemThumbnailShadowSpread": 1,
     "minWidth": 0,
     "itemBackgroundColor": [],
     "itemLabelGap": 5,
     "gap": 10,
     "itemThumbnailOpacity": 1,
     "borderSize": 0,
     "itemThumbnailShadowColor": "#000000",
     "itemPaddingBottom": 3,
     "itemHorizontalAlign": "center",
     "itemPaddingTop": 3,
     "selectedItemLabelFontWeight": "bold",
     "itemPaddingRight": 3,
     "itemLabelFontStyle": "normal",
     "paddingBottom": 10,
     "itemBackgroundColorRatios": [],
     "paddingTop": 10,
     "itemLabelHorizontalAlign": "center",
     "backgroundColorDirection": "vertical",
     "itemThumbnailShadowOpacity": 0.8,
     "itemMode": "normal",
     "scrollBarColor": "#FFFFFF",
     "data": {
      "name": "ThumbnailList473"
     },
     "shadow": false,
     "itemThumbnailShadowVerticalLength": 3,
     "visible": false,
     "itemThumbnailBorderRadius": 5,
     "itemLabelTextDecoration": "none",
     "itemBackgroundOpacity": 0,
     "itemLabelFontFamily": "Arial",
     "scrollBarOpacity": 0.5
    }
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0,
   "right": 0,
   "scrollBarMargin": 2,
   "class": "Container",
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "overflow": "visible",
   "minHeight": 20,
   "scrollBarWidth": 10,
   "propagateClick": false,
   "verticalAlign": "bottom",
   "bottom": 0,
   "height": 200,
   "minWidth": 20,
   "layout": "horizontal",
   "paddingTop": 0,
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "Container472"
   },
   "shadow": false
  },
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": -48.18,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7EA5D071_5372_AD2F_41D3_2375DD00B9E2",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_4CEF30BC_51B2_ED14_41A6_9FF849578644_t.jpg",
 "id": "video_4CEF30BC_51B2_ED14_41A6_9FF849578644",
 "width": 720,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "intro",
 "class": "Video",
 "height": 1280,
 "video": {
  "width": 720,
  "mp4Url": "media/video_4CEF30BC_51B2_ED14_41A6_9FF849578644.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Summer beach",
 "hfovMin": "150%",
 "id": "panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E",
 "overlays": [
  "this.panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_tcap0",
  "this.overlay_7056F72E_50CD_B335_41CC_4B8C9D08494D",
  "this.overlay_73B56E54_50CE_B515_41D2_532C98A41BC9",
  "this.overlay_73F2FC04_50CE_D4F5_41C9_297FE8A6C314",
  "this.overlay_72C43A44_50CE_5D75_41B8_8623EA238674"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -5.18,
   "class": "AdjacentPanorama",
   "backwardYaw": 173.21,
   "panorama": "this.panorama_425B3233_5153_ED13_41CE_B3325E20F637",
   "distance": 1
  },
  {
   "yaw": -165.22,
   "class": "AdjacentPanorama",
   "backwardYaw": 8.52,
   "panorama": "this.panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS__4029",
 "hfovMin": "150%",
 "id": "panorama_425B9291_5152_EDEC_41C7_1D579BE9165A",
 "overlays": [
  "this.overlay_45D814CD_5177_B577_41C8_AE66AFA7DC59",
  "this.overlay_445D7304_5172_ECF4_41D0_69CE380C62D0",
  "this.overlay_444B0177_517E_EF13_41CC_CEF4F53FAA21",
  "this.overlay_4AC7AB4C_51D2_5375_41AF_4698321054D6",
  "this.overlay_4EBD7C8B_51DE_B5F3_41BF_3B6047D8A82D",
  "this.overlay_7260F082_51DF_EDEC_41C0_04F0942884BA",
  "this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 159.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 96.88,
   "panorama": "this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7",
   "distance": 1
  },
  {
   "yaw": 14.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 165.05,
   "panorama": "this.panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C",
   "distance": 1
  },
  {
   "yaw": 86.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 148.15,
   "panorama": "this.panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -176.73,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7E73DFFD_5372_B314_41D3_C015A1D77424",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS__4026",
 "hfovMin": "150%",
 "id": "panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C",
 "overlays": [
  "this.overlay_47AEA87B_5172_5D13_41C3_681D0E178706",
  "this.overlay_4D0BC075_51D2_6D17_41D3_1EB369955D57",
  "this.panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 165.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 14.35,
   "panorama": "this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 14.78,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F3840F5_5372_AD17_41C6_89473086EC0A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -165.65,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F0480D9_5372_AD1C_41BA_5315759243FC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -31.85,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7C2E71FC_5372_AF14_41BC_D99DF1323AD1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 166.7,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7E8A0054_5372_AD15_41C2_AFF58B887CD7",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_498651B3_51BE_EF13_41B9_4357E3C80C89_0_0.png",
   "width": 1983,
   "class": "ImageResourceLevel",
   "height": 793
  },
  {
   "url": "media/popup_498651B3_51BE_EF13_41B9_4357E3C80C89_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 409
  },
  {
   "url": "media/popup_498651B3_51BE_EF13_41B9_4357E3C80C89_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 204
  }
 ],
 "id": "ImageResource_4D3B1640_51B2_556D_41B7_C2F78910D174",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 16.24,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7FD80196_5372_AF15_41D0_27367D0260DB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -14.95,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7C3C91ED_5372_AF34_41C9_BFAD5C3545BE",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Courtyard fountain",
 "hfovMin": "150%",
 "id": "panorama_427CD2BC_5152_6D15_41C1_7219B9133C87",
 "overlays": [
  "this.panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_tcap0",
  "this.overlay_4DDC32E6_51B2_AD35_41CA_061D1C9C6029",
  "this.overlay_4F486A8D_51B5_BDF7_41CC_E63F379B5AC3",
  "this.overlay_4C420364_51B5_D334_41D3_707080903D63",
  "this.overlay_4FBFF958_51B2_DF1D_41C3_C23AC2645E64"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -178.04,
   "class": "AdjacentPanorama",
   "backwardYaw": -45.01,
   "panorama": "this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7",
   "distance": 1
  },
  {
   "yaw": -2.85,
   "class": "AdjacentPanorama",
   "backwardYaw": 174.96,
   "panorama": "this.panorama_425DDBA5_5153_B337_41D0_EBD15B597C32",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_425E9E52_5153_B56C_41D2_B287E509957B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -93.94,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F3700E8_5372_AD3C_41C9_69344BF6E2F4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -87.24,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F60713F_5372_AF13_41CE_62A8E624541E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -78.49,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7C1A81CF_5372_AF73_41D2_A6C7191A389A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 154.12,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7EDC4090_5372_ADED_41CA_FE4D9A83FF98",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_42407B3B_5152_531C_41D0_969AF45513E3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 174.82,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7FD60187_5372_AFF3_41D3_2FD6AE7E05A1",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -180,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_498651B3_51BE_EF13_41B9_4357E3C80C89",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "50%",
 "image": {
  "levels": [
   {
    "url": "media/popup_498651B3_51BE_EF13_41B9_4357E3C80C89_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 409
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 48.52,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 11.73
},
{
 "initialPosition": {
  "yaw": -171.48,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7E626018_5372_AD1D_41D1_11969A98BC2C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -83.12,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7C0CB1DE_5372_AF15_41BB_1961BF746605",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -179.89,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7FEA51C1_5372_AF6C_41BB_28538705ED1C",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "rooftop sea view",
 "hfovMin": "150%",
 "id": "panorama_425E9E52_5153_B56C_41D2_B287E509957B",
 "overlays": [
  "this.panorama_425E9E52_5153_B56C_41D2_B287E509957B_tcap0",
  "this.overlay_75C079D6_50CE_DF15_41CB_D60A7F80DE82",
  "this.overlay_74A06CE1_50CF_B52F_41C6_E7AD5E9A940B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -32,
   "class": "AdjacentPanorama",
   "backwardYaw": 101.51,
   "panorama": "this.panorama_42407B3B_5152_531C_41D0_969AF45513E3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -44.1,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7E84D044_5372_AD75_41A1_E7CE456F0E04",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -179.02,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F4CC121_5372_AF2F_41C6_F2024D22C26F",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Resort Gate",
 "hfovMin": "150%",
 "id": "panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5",
 "overlays": [
  "this.overlay_5F147983_50D2_7FEC_4197_F69C4D345823",
  "this.overlay_41220AD4_50FD_BD14_41C8_26B2361A89A0",
  "this.overlay_4D01B8D2_51CD_BD6D_41CC_1FD741808EA9",
  "this.panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_tcap0",
  "this.overlay_4F8444A6_5153_D535_41D3_360A5E96C4B2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 0.98,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.76,
   "panorama": "this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7",
   "distance": 1
  },
  {
   "yaw": 177.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.11,
   "panorama": "this.panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lobby",
 "hfovMin": "150%",
 "id": "panorama_45873C68_50F2_553C_41D1_42DA895C6A3D",
 "overlays": [
  "this.overlay_42615CD6_50D6_5514_41C9_D95B38DDC0FD",
  "this.overlay_4BA95C88_51D2_55FD_41CE_E64E8CF115F9",
  "this.overlay_4CA24755_51D2_5317_41B9_A5F325D54A21",
  "this.panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 92.76,
   "class": "AdjacentPanorama",
   "backwardYaw": -13.3,
   "panorama": "this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "pool ",
 "hfovMin": "150%",
 "id": "panorama_425DDBA5_5153_B337_41D0_EBD15B597C32",
 "overlays": [
  "this.panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_tcap0",
  "this.overlay_4F4C2928_514E_5F3C_41BC_B89AEE19CA1D",
  "this.overlay_710309C2_514F_FF6C_41C0_329311CE18A0",
  "this.overlay_71C5F5B3_50B2_5713_4196_8B3BDD3D9597",
  "this.overlay_4E5CB4CE_50B7_F575_41C3_802FEDBA4386"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 174.96,
   "class": "AdjacentPanorama",
   "backwardYaw": -2.85,
   "panorama": "this.panorama_427CD2BC_5152_6D15_41C1_7219B9133C87",
   "distance": 1
  },
  {
   "panorama": "this.panorama_425F1511_5153_D4EC_418D_9E2A034431AB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -179.6,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7FA5D178_5372_AF1D_41B7_D27CF608B804",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 101.36,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F2AF104_5372_ACF4_41B7_48A35CD13E06",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_camera",
 "class": "PanoramaCamera"
},
{
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 0.94,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 500,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 5000,
   "easing": "cubic_in_out",
   "targetHfov": 125,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0
  }
 ]
},
{
 "initialPosition": {
  "yaw": -86.07,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7EE130BC_5372_AD15_41D1_A956556B0127",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -33.02,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7EF060AE_5372_AD34_41D0_71801D53C20A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -118.43,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7EB12063_5372_AD33_41C1_E8F09C091D65",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_5B912AEE_50B2_DD34_41D0_7050A1977259",
   "camera": "this.panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4",
   "camera": "this.panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5",
   "camera": "this.panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7",
   "camera": "this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_45873C68_50F2_553C_41D1_42DA895C6A3D",
   "camera": "this.panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C",
   "camera": "this.panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A",
   "camera": "this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A",
   "camera": "this.panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_427CD2BC_5152_6D15_41C1_7219B9133C87",
   "camera": "this.panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425DDBA5_5153_B337_41D0_EBD15B597C32",
   "camera": "this.panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425F1511_5153_D4EC_418D_9E2A034431AB",
   "camera": "this.panorama_425F1511_5153_D4EC_418D_9E2A034431AB_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_42596E7F_5153_D514_41D1_53260001CB95",
   "camera": "this.panorama_42596E7F_5153_D514_41D1_53260001CB95_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E",
   "camera": "this.panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425B3233_5153_ED13_41CE_B3325E20F637",
   "camera": "this.panorama_425B3233_5153_ED13_41CE_B3325E20F637_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD",
   "camera": "this.panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425E9E52_5153_B56C_41D2_B287E509957B",
   "camera": "this.panorama_425E9E52_5153_B56C_41D2_B287E509957B_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_42407B3B_5152_531C_41D0_969AF45513E3",
   "camera": "this.panorama_42407B3B_5152_531C_41D0_969AF45513E3_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA",
   "camera": "this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1",
   "camera": "this.panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5",
   "camera": "this.panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A",
   "camera": "this.panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_camera",
   "begin": "this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.video_4CEF30BC_51B2_ED14_41A6_9FF849578644",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 21, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 21)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.playList_5DC233DB_50B5_B313_41B2_1D76EDF48890, 21, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_5DC233DB_50B5_B313_41B2_1D76EDF48890",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_425B3233_5153_ED13_41CE_B3325E20F637_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Rooms sea view",
 "hfovMin": "150%",
 "id": "panorama_42407B3B_5152_531C_41D0_969AF45513E3",
 "overlays": [
  "this.panorama_42407B3B_5152_531C_41D0_969AF45513E3_tcap0",
  "this.overlay_752572FA_50DE_AD1D_41C3_0C711B0B471B",
  "this.overlay_7772704A_50DD_ED7C_419C_78880DE68609",
  "this.overlay_74153D62_50F3_D72D_41C0_E9DCAF77176F",
  "this.overlay_76ABE9CE_50F2_5F74_41D2_4A7E8DE0ADDB",
  "this.overlay_75922707_50CD_B4F3_41C5_20597E636799",
  "this.overlay_748494B6_50B2_D515_41C3_8CAC750875E0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 7.64,
   "class": "AdjacentPanorama",
   "backwardYaw": 84.6,
   "panorama": "this.panorama_42596E7F_5153_D514_41D1_53260001CB95",
   "distance": 1
  },
  {
   "yaw": 101.51,
   "class": "AdjacentPanorama",
   "backwardYaw": -32,
   "panorama": "this.panorama_425E9E52_5153_B56C_41D2_B287E509957B",
   "distance": 1
  },
  {
   "yaw": 143.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 3.27,
   "panorama": "this.panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_5B912AEE_50B2_DD34_41D0_7050A1977259",
   "camera": "this.panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4",
   "camera": "this.panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5",
   "camera": "this.panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7",
   "camera": "this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_45873C68_50F2_553C_41D1_42DA895C6A3D",
   "camera": "this.panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C",
   "camera": "this.panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A",
   "camera": "this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A",
   "camera": "this.panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_427CD2BC_5152_6D15_41C1_7219B9133C87",
   "camera": "this.panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425DDBA5_5153_B337_41D0_EBD15B597C32",
   "camera": "this.panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425F1511_5153_D4EC_418D_9E2A034431AB",
   "camera": "this.panorama_425F1511_5153_D4EC_418D_9E2A034431AB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_42596E7F_5153_D514_41D1_53260001CB95",
   "camera": "this.panorama_42596E7F_5153_D514_41D1_53260001CB95_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E",
   "camera": "this.panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425B3233_5153_ED13_41CE_B3325E20F637",
   "camera": "this.panorama_425B3233_5153_ED13_41CE_B3325E20F637_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD",
   "camera": "this.panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_425E9E52_5153_B56C_41D2_B287E509957B",
   "camera": "this.panorama_425E9E52_5153_B56C_41D2_B287E509957B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_42407B3B_5152_531C_41D0_969AF45513E3",
   "camera": "this.panorama_42407B3B_5152_531C_41D0_969AF45513E3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA",
   "camera": "this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1",
   "camera": "this.panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5",
   "camera": "this.panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A",
   "camera": "this.panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.video_4CEF30BC_51B2_ED14_41A6_9FF849578644",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 21, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 21)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -2.12,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7FB41169_5372_AF3F_41CC_649ACDCA9EEB",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Sandy beach",
 "hfovMin": "150%",
 "id": "panorama_425B3233_5153_ED13_41CE_B3325E20F637",
 "overlays": [
  "this.panorama_425B3233_5153_ED13_41CE_B3325E20F637_tcap0",
  "this.overlay_73727082_50D2_ADED_41CE_7678678A5610",
  "this.overlay_7278DBB3_50D5_D313_41D3_45510700B122"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 173.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -5.18,
   "panorama": "this.panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 134.99,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7E683026_5372_AD35_41C7_1864900FFAF7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Landscape",
 "hfovMin": "150%",
 "id": "panorama_425F1511_5153_D4EC_418D_9E2A034431AB",
 "overlays": [
  "this.panorama_425F1511_5153_D4EC_418D_9E2A034431AB_tcap0",
  "this.overlay_703BA1D4_50B5_AF15_4191_6B8C2EDF44C0",
  "this.overlay_72F2B64E_50B2_5575_41CF_656DE46A5839",
  "this.overlay_7166A947_50B2_BF73_41BC_063F51AE6087",
  "this.overlay_73E9263D_50BD_B517_41C9_6F959BDF8C8C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_427CD2BC_5152_6D15_41C1_7219B9133C87",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -25.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 135.9,
   "panorama": "this.panorama_42596E7F_5153_D514_41D1_53260001CB95",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 148,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7E4BAFEF_5372_B334_41C2_5810542F9D47",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -6.79,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7E7A500B_5372_ACFC_41BA_0EB0990A080F",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Terrace",
 "hfovMin": "150%",
 "id": "panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A",
 "overlays": [
  "this.panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_tcap0",
  "this.overlay_753C0BFA_50B2_B31D_41D1_D8DB2C437612",
  "this.overlay_77B91FA7_50B3_D333_41A8_E6F32CE366C9",
  "this.overlay_74DFD9A6_50B6_7F34_419D_4A7533093214",
  "this.overlay_77443CFC_50B6_D515_41D0_4AECBF4DF724",
  "this.overlay_789914BB_5376_D513_41D0_94EE1F011DAC",
  "this.overlay_78C8C2EC_5376_6D35_41D4_2A10F22433C9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -62.32,
   "class": "AdjacentPanorama",
   "backwardYaw": 93.93,
   "panorama": "this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA",
   "distance": 1
  },
  {
   "panorama": "this.panorama_5B912AEE_50B2_DD34_41D0_7050A1977259",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 3.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 143.48,
   "panorama": "this.panorama_42407B3B_5152_531C_41D0_969AF45513E3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_425F1511_5153_D4EC_418D_9E2A034431AB_camera",
 "class": "PanoramaCamera"
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS__4031",
 "hfovMin": "150%",
 "id": "panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A",
 "overlays": [
  "this.overlay_44FA801E_5172_ED14_41C8_723031523260",
  "this.panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_tcap0",
  "this.overlay_4F82CEA2_515F_D52D_41BE_9F942EDBF814"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 148.15,
   "class": "AdjacentPanorama",
   "backwardYaw": 86.06,
   "panorama": "this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0.24,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 4.83
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -1.79,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F83915B_5372_AF13_41C4_5D2E9DDD86DC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_42596E7F_5153_D514_41D1_53260001CB95_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside",
 "hfovMin": "150%",
 "id": "panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7",
 "overlays": [
  "this.overlay_42DB56FC_50F2_5514_41BD_192FE33498E0",
  "this.overlay_4262EA93_50D2_5DEC_41D2_CE11643084C7",
  "this.overlay_4444C7C2_5172_536D_4199_196D61D0B484",
  "this.overlay_73EA51D4_51F6_6F15_41D4_10F5FCE9C649",
  "this.overlay_719A5933_51F5_DF13_41D3_6E403A50DB3E",
  "this.overlay_4CF220CB_51F3_AD73_41C4_BEB7C3F89CE4",
  "this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_tcap0",
  "this.overlay_4DD10D87_51B2_B7F4_41C5_D0EAEF61A2DC",
  "this.overlay_4EF8FBAF_51B3_B333_41C4_0D4B9FD98FDE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 169.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.98,
   "panorama": "this.panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5",
   "distance": 1
  },
  {
   "yaw": -45.01,
   "class": "AdjacentPanorama",
   "backwardYaw": -178.04,
   "panorama": "this.panorama_427CD2BC_5152_6D15_41C1_7219B9133C87",
   "distance": 1
  },
  {
   "yaw": -13.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 92.76,
   "panorama": "this.panorama_45873C68_50F2_553C_41D1_42DA895C6A3D",
   "distance": 1
  },
  {
   "yaw": 96.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 159.51,
   "panorama": "this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 177.15,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F5BD113_5372_ACEC_41C9_BCC7076B98B6",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Landscape 2",
 "hfovMin": "150%",
 "id": "panorama_42596E7F_5153_D514_41D1_53260001CB95",
 "overlays": [
  "this.panorama_42596E7F_5153_D514_41D1_53260001CB95_tcap0",
  "this.overlay_70179785_50BE_53F7_41C9_7B5FFA92EC13",
  "this.overlay_710D6643_50BE_D56C_41BD_56B9871AB2E0",
  "this.overlay_73656BB8_50B2_D31D_41CB_62FB7C7CDBD0",
  "this.overlay_7140DDA2_50B3_B72D_41D1_97F1DE8FBE9A",
  "this.overlay_730B01D0_50D2_AF6D_41D0_A720FED14F84",
  "this.overlay_7237D21E_50D2_AD15_41CE_01D61B4E8BB3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 135.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -25.88,
   "panorama": "this.panorama_425F1511_5153_D4EC_418D_9E2A034431AB",
   "distance": 1
  },
  {
   "yaw": 84.6,
   "class": "AdjacentPanorama",
   "backwardYaw": 7.64,
   "panorama": "this.panorama_42407B3B_5152_531C_41D0_969AF45513E3",
   "distance": 1
  },
  {
   "yaw": -78.64,
   "class": "AdjacentPanorama",
   "backwardYaw": 146.98,
   "panorama": "this.panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "START",
 "hfovMin": "150%",
 "id": "panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4",
 "overlays": [
  "this.overlay_5EACD499_50B6_751C_41C5_0EFDF97574E1",
  "this.overlay_5F42CBE6_50D7_F335_41BC_2774BAFDC24E",
  "this.overlay_463B978B_5156_D3F3_41B4_76D5AD4038A1",
  "this.overlay_4941A5E9_5152_B73C_41B7_41B2B93209B0",
  "this.panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 0.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 177.88,
   "panorama": "this.panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5",
   "distance": 1
  },
  {
   "yaw": 178.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.4,
   "panorama": "this.panorama_5B912AEE_50B2_DD34_41D0_7050A1977259",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_t.jpg",
 "hfovMax": 130
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "label": "INTERFACE",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "START",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "Resort Gate",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "Outside",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "Lobby",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "GS__4026",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "GS__4029",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "GS__4031",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "Courtyard fountain",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "pool ",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  },
  {
   "label": "Landscape",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "MenuItem"
  },
  {
   "label": "Landscape 2",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "MenuItem"
  },
  {
   "label": "Summer beach",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "MenuItem"
  },
  {
   "label": "Sandy beach",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "MenuItem"
  },
  {
   "label": "beach bar",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "MenuItem"
  },
  {
   "label": "rooftop sea view",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "MenuItem"
  },
  {
   "label": "Rooms sea view",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "MenuItem"
  },
  {
   "label": "Livingroom",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "MenuItem"
  },
  {
   "label": "Bathroom",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "MenuItem"
  },
  {
   "label": "Room",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "MenuItem"
  },
  {
   "label": "Terrace",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "class": "Menu",
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "INTERFACE",
 "hfovMin": "150%",
 "id": "panorama_5B912AEE_50B2_DD34_41D0_7050A1977259",
 "overlays": [
  "this.overlay_5D98F950_50B6_BF6D_41B4_041BC7D519F0",
  "this.panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0",
  "this.overlay_49820F32_514E_F32D_41C9_ABEC5EECE1B1",
  "this.overlay_493DBB84_514E_53F5_41BA_2B039A14C6A1",
  "this.popup_498651B3_51BE_EF13_41B9_4357E3C80C89",
  "this.overlay_4A0ECF1E_51CF_D315_41B4_7EB21D8B15A8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 0.4,
   "class": "AdjacentPanorama",
   "backwardYaw": 178.21,
   "panorama": "this.panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -5.04,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7E9F9035_5372_AD17_417A_76A7067BAAF4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -20.49,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F92F14D_5372_AF77_41C8_70D24D4D14B5",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 117.68,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7EAB7080_5372_ADED_41D2_36BE5C7429A5",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 1.96,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F7F7131_5372_AF2C_41CF_51B6E4FBFC80",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -14.73,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 1.51
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Bathroom",
 "hfovMin": "150%",
 "id": "panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1",
 "overlays": [
  "this.panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_tcap0",
  "this.overlay_7A78E4C1_5357_D56F_4186_5DD10EAD019A",
  "this.overlay_7806E429_5356_D53F_4187_62E520B39037"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 131.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -148.02,
   "panorama": "this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_5ED15302_50D7_ACED_41C0_97FA41DEDB5E.ogg",
  "mp3Url": "media/audio_5ED15302_50D7_ACED_41C0_97FA41DEDB5E.mp3",
  "class": "AudioResource"
 },
 "id": "audio_5ED15302_50D7_ACED_41C0_97FA41DEDB5E",
 "data": {
  "label": "ANW3439_005_Reparto-Flores"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -10.24,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7FFA31B4_5372_AF14_41B5_3D3B287754B6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 31.98,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7FC801A5_5372_AF37_41D2_30089757FDB3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -172.36,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7ECED09F_5372_AD13_41CA_58B2AC68CCB5",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "beach bar",
 "hfovMin": "150%",
 "id": "panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD",
 "overlays": [
  "this.panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_tcap0",
  "this.overlay_703FD2CB_50B6_AD7C_41B3_BA8BBF1371F8",
  "this.overlay_72CE2811_50B6_5CEF_41D3_3D92AC54C7D9",
  "this.overlay_70CCAA7C_50B2_DD15_41B9_AFF663674FEE",
  "this.overlay_73D981BF_50B3_AF14_41D2_F92635BAC52B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 8.52,
   "class": "AdjacentPanorama",
   "backwardYaw": -165.22,
   "panorama": "this.panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E",
   "distance": 1
  },
  {
   "yaw": 146.98,
   "class": "AdjacentPanorama",
   "backwardYaw": -78.64,
   "panorama": "this.panorama_42596E7F_5153_D514_41D1_53260001CB95",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Room",
 "hfovMin": "150%",
 "id": "panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5",
 "overlays": [
  "this.panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_tcap0",
  "this.overlay_75BD47B3_534D_F32C_41C9_CCA964129237",
  "this.overlay_7B023FCA_5352_737D_41BA_69E0C248AB63"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 61.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -163.76,
   "panorama": "this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -36.52,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7F13A0CA_5372_AD7C_41C2_0B598AECBDEE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -95.4,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7E444FDF_5372_B313_41A2_1E897D623903",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Livingroom",
 "hfovMin": "150%",
 "id": "panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA",
 "overlays": [
  "this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_tcap0",
  "this.overlay_7401D2D4_50B5_AD15_41B0_40AB36E723DE",
  "this.overlay_76FC9C36_50B2_5515_41A1_2FAE44F88F80",
  "this.overlay_745B977C_534E_D315_41C3_02C50C3517EA",
  "this.overlay_7A122421_534E_752F_41BD_6D8E7C765DB9",
  "this.overlay_7B54D071_5352_AD2F_41BA_1E1244518A64",
  "this.overlay_744FE059_5355_AD1F_41BE_AACA93AC91E7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -163.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 61.57,
   "panorama": "this.panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5",
   "distance": 1
  },
  {
   "yaw": -148.02,
   "class": "AdjacentPanorama",
   "backwardYaw": 131.82,
   "panorama": "this.panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1",
   "distance": 1
  },
  {
   "yaw": 93.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -62.32,
   "panorama": "this.panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_7E55CFC7_5372_B374_41B6_B6BC96C2B82A",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_t.jpg",
 "hfovMax": 130
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "class": "UIComponent",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent82558"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "class": "ZoomImage",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage82559"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "class": "CloseButton",
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton82560"
 },
 "fontSize": "1.29vmin",
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "inertia": true,
 "id": "panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.24,
   "yaw": -165.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD, this.camera_7E626018_5372_AD1D_41D1_11969A98BC2C); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75311337_5352_5313_41CD_771F11828A02",
   "pitch": 3.3,
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -165.22
  }
 ],
 "id": "overlay_7056F72E_50CD_B335_41CC_4B8C9D08494D",
 "data": {
  "label": "Circle 360 2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.2,
   "yaw": -154.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0_HS_1_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.65,
   "hfov": 28.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -154.35
  }
 ],
 "id": "overlay_73B56E54_50CE_B515_41D2_532C98A41BC9",
 "data": {
  "label": "BACK"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.14,
   "yaw": -5.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_425B3233_5153_ED13_41CE_B3325E20F637, this.camera_7E7A500B_5372_ACFC_41BA_0EB0990A080F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75312337_5352_5313_414C_46EEC36932A4",
   "pitch": -10.86,
   "hfov": 6.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -5.18
  }
 ],
 "id": "overlay_73F2FC04_50CE_D4F5_41C9_297FE8A6C314",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.48,
   "yaw": -2.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0_HS_3_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0_HS_3_0.png",
      "width": 312,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.87,
   "hfov": 18.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -2.04
  }
 ],
 "id": "overlay_72C43A44_50CE_5D75_41B8_8623EA238674",
 "data": {
  "label": "Sandy beach"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.22,
   "yaw": 159.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 44
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7, this.camera_7C0CB1DE_5372_AF15_41BB_1961BF746605); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_0_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 276
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23,
   "yaw": 159.51
  }
 ],
 "id": "overlay_45D814CD_5177_B577_41C8_AE66AFA7DC59",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.24,
   "yaw": 14.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C, this.camera_7C3C91ED_5372_AF34_41C9_BFAD5C3545BE); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_1_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.5,
   "yaw": 14.35
  }
 ],
 "id": "overlay_445D7304_5172_ECF4_41D0_69CE380C62D0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.25,
   "yaw": 86.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A, this.camera_7C2E71FC_5372_AF14_41BC_D99DF1323AD1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A371FFC_5152_D315_416E_8C39BEF09471",
   "pitch": 0.57,
   "hfov": 6.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 86.06
  }
 ],
 "id": "overlay_444B0177_517E_EF13_41CC_CEF4F53FAA21",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.73,
   "yaw": 15.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_3_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_3_0.png",
      "width": 396,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.43,
   "hfov": 24.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 15.45
  }
 ],
 "id": "overlay_4AC7AB4C_51D2_5375_41AF_4698321054D6",
 "data": {
  "label": "Restaurant Outdoor"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.57,
   "yaw": 164.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_4_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_4_0.png",
      "width": 237,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.44,
   "hfov": 14.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 164.4
  }
 ],
 "id": "overlay_4EBD7C8B_51DE_B5F3_41BF_3B6047D8A82D",
 "data": {
  "label": "Exit"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.52,
   "yaw": 90.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_5_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_5_0.png",
      "width": 377,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.03,
   "hfov": 23.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 90.07
  }
 ],
 "id": "overlay_7260F082_51DF_EDEC_41C0_04F0942884BA",
 "data": {
  "label": "Food Section"
 }
},
{
 "inertia": true,
 "id": "panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.25,
   "yaw": 165.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A, this.camera_7F0480D9_5372_AD1C_41BA_5315759243FC); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0_HS_0_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 197
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.04,
   "yaw": 165.05
  }
 ],
 "id": "overlay_47AEA87B_5172_5D13_41C3_681D0E178706",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.3,
   "yaw": 169.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0_HS_1_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_0_HS_1_0.png",
      "width": 438,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.88,
   "hfov": 27.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 169.8
  }
 ],
 "id": "overlay_4D0BC075_51D2_6D17_41D3_1EB369955D57",
 "data": {
  "label": "Enter Restaurant"
 }
},
{
 "inertia": true,
 "id": "panorama_425DE939_5152_FF1F_41CC_6EE8BA6E6F7C_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "inertia": true,
 "id": "panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.16,
   "yaw": -178.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7, this.camera_7E683026_5372_AD35_41C7_1864900FFAF7); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A35AFFD_5152_D317_4192_F7F3188DB859",
   "pitch": -9.69,
   "hfov": 6.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -178.04
  }
 ],
 "id": "overlay_4DDC32E6_51B2_AD35_41CA_061D1C9C6029",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.06,
   "yaw": -174.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0_HS_1_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0_HS_1_0.png",
      "width": 233,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.23,
   "hfov": 14.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -174.17
  }
 ],
 "id": "overlay_4F486A8D_51B5_BDF7_41CC_E63F379B5AC3",
 "data": {
  "label": "BACK"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.22,
   "yaw": -2.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_425DDBA5_5153_B337_41D0_EBD15B597C32, this.camera_7E9F9035_5372_AD17_417A_76A7067BAAF4); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A352FFD_5152_D317_41C8_C45382EF796A",
   "pitch": 5.52,
   "hfov": 6.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -2.85
  }
 ],
 "id": "overlay_4C420364_51B5_D334_41D3_707080903D63",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.62,
   "yaw": 1.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0_HS_3_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0_HS_3_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.23,
   "hfov": 19.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 1.31
  }
 ],
 "id": "overlay_4FBFF958_51B2_DF1D_41C3_C23AC2645E64",
 "data": {
  "label": "Goto Pool"
 }
},
{
 "inertia": true,
 "id": "panorama_425E9E52_5153_B56C_41D2_B287E509957B_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.1,
   "yaw": -32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_42407B3B_5152_531C_41D0_969AF45513E3, this.camera_7C1A81CF_5372_AF73_41D2_A6C7191A389A); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7536C339_5352_531F_41BB_35488631C797",
   "pitch": -12.61,
   "hfov": 6.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -32
  }
 ],
 "id": "overlay_75C079D6_50CE_DF15_41CB_D60A7F80DE82",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.66,
   "yaw": -27.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0_HS_1_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0_HS_1_0.png",
      "width": 247,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.44,
   "hfov": 14.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -27.98
  }
 ],
 "id": "overlay_74A06CE1_50CF_B52F_41C6_E7AD5E9A940B",
 "data": {
  "label": "BACK"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.22,
   "yaw": 177.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4, this.camera_7FEA51C1_5372_AF6C_41BB_28538705ED1C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A3D4FF6_5152_D315_41C0_B51B44B2D453",
   "pitch": -5.45,
   "hfov": 6.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 177.88
  }
 ],
 "id": "overlay_5F147983_50D2_7FEC_4197_F69C4D345823",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.49,
   "yaw": 0.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7, this.camera_7FFA31B4_5372_AF14_41B5_3D3B287754B6); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A3C9FF6_5152_D315_41B2_F8E5676EA1A7",
   "pitch": -3.26,
   "hfov": 7.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.98
  }
 ],
 "id": "overlay_41220AD4_50FD_BD14_41C8_26B2361A89A0",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.95,
   "yaw": 3.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0_HS_2_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0_HS_2_0.png",
      "width": 242,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.4,
   "hfov": 14.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 3.35
  }
 ],
 "id": "overlay_4D01B8D2_51CD_BD6D_41CC_1FD741808EA9",
 "data": {
  "label": "Entrance"
 }
},
{
 "inertia": true,
 "id": "panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.19,
   "yaw": 179.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0_HS_3_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0_HS_3_0.png",
      "width": 181,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.28,
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 179.85
  }
 ],
 "id": "overlay_4F8444A6_5153_D535_41D3_360A5E96C4B2",
 "data": {
  "label": "BACK"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.19,
   "yaw": 92.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7, this.camera_7E8A0054_5372_AD15_41C2_AFF58B887CD7); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A320FF7_5152_D313_41CA_73E6DC62ED74",
   "pitch": 7.96,
   "hfov": 6.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 92.76
  }
 ],
 "id": "overlay_42615CD6_50D6_5514_41C9_D95B38DDC0FD",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.48,
   "yaw": 100.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0_HS_1_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0_HS_1_0.png",
      "width": 391,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.09,
   "hfov": 24.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 100.42
  }
 ],
 "id": "overlay_4BA95C88_51D2_55FD_41CE_E64E8CF115F9",
 "data": {
  "label": "Exit Gate"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.39,
   "yaw": 24.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0_HS_2_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0_HS_2_0.png",
      "width": 550,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.38,
   "hfov": 34.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 24.05
  }
 ],
 "id": "overlay_4CA24755_51D2_5317_41B9_A5F325D54A21",
 "data": {
  "label": "Booking FrontOffice"
 }
},
{
 "inertia": true,
 "id": "panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "inertia": true,
 "id": "panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.25,
   "yaw": 174.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_427CD2BC_5152_6D15_41C1_7219B9133C87, this.camera_7F5BD113_5372_ACEC_41C9_BCC7076B98B6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A34DFFE_5152_D315_41B6_3292FB93DC1F",
   "pitch": 2.03,
   "hfov": 6.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 174.96
  }
 ],
 "id": "overlay_4F4C2928_514E_5F3C_41BC_B89AEE19CA1D",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.23,
   "yaw": 178.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0_HS_1_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0_HS_1_0.png",
      "width": 228,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.03,
   "hfov": 14.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 178.4
  }
 ],
 "id": "overlay_710309C2_514F_FF6C_41C0_329311CE18A0",
 "data": {
  "label": "BACK"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.25,
   "yaw": -129.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75317334_5352_5315_41D0_13E5B85AE19A",
   "pitch": -1.18,
   "hfov": 6.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -129.94
  }
 ],
 "id": "overlay_71C5F5B3_50B2_5713_4196_8B3BDD3D9597",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.65,
   "yaw": -122.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0_HS_3_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.44,
   "hfov": 27.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -122.28
  }
 ],
 "id": "overlay_4E5CB4CE_50B7_F575_41C3_802FEDBA4386",
 "data": {
  "label": "Landscape"
 }
},
{
 "inertia": true,
 "id": "panorama_42407B3B_5152_531C_41D0_969AF45513E3_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.13,
   "yaw": 7.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_42596E7F_5153_D514_41D1_53260001CB95, this.camera_7E444FDF_5372_B313_41A2_1E897D623903); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7536B339_5352_531F_41D0_A383AF479D59",
   "pitch": -11.44,
   "hfov": 6.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 7.64
  }
 ],
 "id": "overlay_752572FA_50DE_AD1D_41C3_0C711B0B471B",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.37,
   "yaw": 13.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_1_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.98,
   "hfov": 25.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 13.99
  }
 ],
 "id": "overlay_7772704A_50DD_ED7C_419C_78880DE68609",
 "data": {
  "label": "Go to Beach"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.18,
   "yaw": 101.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_425E9E52_5153_B56C_41D2_B287E509957B, this.camera_7E4BAFEF_5372_B334_41C2_5810542F9D47); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7537733A_5352_531D_41D1_3D4B9A1D9B08",
   "pitch": 8.44,
   "hfov": 6.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 101.51
  }
 ],
 "id": "overlay_74153D62_50F3_D72D_41C0_E9DCAF77176F",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.94,
   "yaw": 106.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_3_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_3_0.png",
      "width": 303,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.95,
   "hfov": 18.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 106.11
  }
 ],
 "id": "overlay_76ABE9CE_50F2_5F74_41D2_4A7E8DE0ADDB",
 "data": {
  "label": "Rooftop"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.25,
   "yaw": 143.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A, this.camera_7E73DFFD_5372_B314_41D3_C015A1D77424); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7537033A_5352_531D_41CD_8BAF204AEDD0",
   "pitch": 0.57,
   "hfov": 6.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 143.48
  }
 ],
 "id": "overlay_75922707_50CD_B4F3_41C5_20597E636799",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.65,
   "yaw": 144.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_5_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_5_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.07,
   "hfov": 17.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 144.87
  }
 ],
 "id": "overlay_748494B6_50B2_D515_41C3_8CAC750875E0",
 "data": {
  "label": "Room Teracce"
 }
},
{
 "inertia": true,
 "id": "panorama_425B3233_5153_ED13_41CE_B3325E20F637_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.22,
   "yaw": 173.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E, this.camera_7FD60187_5372_AFF3_41D3_2FD6AE7E05A1); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75319338_5352_531D_41A1_601BD4EBFE44",
   "pitch": -5.32,
   "hfov": 6.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 173.21
  }
 ],
 "id": "overlay_73727082_50D2_ADED_41CE_7678678A5610",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.75,
   "yaw": 176.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0_HS_1_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0_HS_1_0.png",
      "width": 209,
      "class": "ImageResourceLevel",
      "height": 153
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.63,
   "hfov": 12.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 176.36
  }
 ],
 "id": "overlay_7278DBB3_50D5_D313_41D3_45510700B122",
 "data": {
  "label": "BACK"
 }
},
{
 "inertia": true,
 "id": "panorama_425F1511_5153_D4EC_418D_9E2A034431AB_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.24,
   "yaw": 147.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75312335_5352_5317_41C7_CF9B16E7B057",
   "pitch": -3.8,
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 147.56
  }
 ],
 "id": "overlay_703BA1D4_50B5_AF15_4191_6B8C2EDF44C0",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.26,
   "yaw": 158.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0_HS_1_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.77,
   "hfov": 27.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 158.72
  }
 ],
 "id": "overlay_72F2B64E_50B2_5575_41CF_656DE46A5839",
 "data": {
  "label": "Pool"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.25,
   "yaw": -25.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_42596E7F_5153_D514_41D1_53260001CB95, this.camera_7E84D044_5372_AD75_41A1_E7CE456F0E04); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7531E335_5352_5317_41CA_99BAFE06E2AD",
   "pitch": 0.28,
   "hfov": 6.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -25.88
  }
 ],
 "id": "overlay_7166A947_50B2_BF73_41BC_063F51AE6087",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.79,
   "yaw": -17.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0_HS_3_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.56,
   "hfov": 27.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -17.93
  }
 ],
 "id": "overlay_73E9263D_50BD_B517_41C9_6F959BDF8C8C",
 "data": {
  "label": "way to beach"
 }
},
{
 "inertia": true,
 "id": "panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.2,
   "yaw": 3.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_42407B3B_5152_531C_41D0_969AF45513E3, this.camera_7F13A0CA_5372_AD7C_41C2_0B598AECBDEE); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7535433D_5352_5317_4184_66C5B5275200",
   "pitch": 7.27,
   "hfov": 6.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 3.27
  }
 ],
 "id": "overlay_753C0BFA_50B2_B31D_41D1_D8DB2C437612",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.28,
   "yaw": 6.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_1_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_1_0.png",
      "width": 228,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.68,
   "hfov": 14.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 6.12
  }
 ],
 "id": "overlay_77B91FA7_50B3_D333_41A8_E6F32CE366C9",
 "data": {
  "label": "BACK"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.18,
   "yaw": -62.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA, this.camera_7EE130BC_5372_AD15_41D1_A956556B0127); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7535033D_5352_5317_41D0_4F7105267F63",
   "pitch": 8.84,
   "hfov": 6.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -62.32
  }
 ],
 "id": "overlay_74DFD9A6_50B6_7F34_419D_4A7533093214",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.52,
   "yaw": -58.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_3_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_3_0.png",
      "width": 312,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.38,
   "hfov": 19.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -58.88
  }
 ],
 "id": "overlay_77443CFC_50B6_D515_41D0_4AECBF4DF724",
 "data": {
  "label": "Enter Room"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.03,
   "yaw": 114.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.09,
   "yaw": 114.91
  }
 ],
 "id": "overlay_789914BB_5376_D513_41D0_94EE1F011DAC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.12,
   "yaw": 125.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_5_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.4,
   "hfov": 29.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 125.49
  }
 ],
 "id": "overlay_78C8C2EC_5376_6D35_41D4_2A10F22433C9",
 "data": {
  "label": "HOME"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.13,
   "yaw": 148.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A, this.camera_7F3700E8_5372_AD3C_41C9_69344BF6E2F4); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A361FFD_5152_D317_41B7_E0EC99E9D572",
   "pitch": -11.44,
   "hfov": 6.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 148.15
  }
 ],
 "id": "overlay_44FA801E_5172_ED14_41C8_723031523260",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "inertia": true,
 "id": "panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.55,
   "yaw": 149.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0_HS_1_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0_HS_1_0.png",
      "width": 177,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.71,
   "hfov": 10.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 149.98
  }
 ],
 "id": "overlay_4F82CEA2_515F_D52D_41BE_9F942EDBF814",
 "data": {
  "label": "BACK"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.49,
   "yaw": 169.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5, this.camera_7F4CC121_5372_AF2F_41C6_F2024D22C26F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EDAA3A8_51D2_533D_41CF_9A618C9409A1",
   "pitch": 3.59,
   "hfov": 7.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 169.76
  }
 ],
 "id": "overlay_42DB56FC_50F2_5514_41BD_192FE33498E0",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.45,
   "yaw": -13.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_45873C68_50F2_553C_41D1_42DA895C6A3D, this.camera_7F60713F_5372_AF13_41CE_62A8E624541E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EDA63A9_51D2_533F_41C3_56F0AF5E1121",
   "pitch": 6.5,
   "hfov": 7.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -13.3
  }
 ],
 "id": "overlay_4262EA93_50D2_5DEC_41D2_CE11643084C7",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.47,
   "yaw": 96.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_425B9291_5152_EDEC_41C7_1D579BE9165A, this.camera_7F92F14D_5372_AF77_41C8_70D24D4D14B5); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4ED9C3A9_51D2_533F_41B0_2CC815269345",
   "pitch": 5.34,
   "hfov": 7.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 96.88
  }
 ],
 "id": "overlay_4444C7C2_5172_536D_4199_196D61D0B484",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.49,
   "yaw": -10.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_3_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_3_0.png",
      "width": 391,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.36,
   "hfov": 24.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -10.06
  }
 ],
 "id": "overlay_73EA51D4_51F6_6F15_41D4_10F5FCE9C649",
 "data": {
  "label": "Looby Entrance"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.4,
   "yaw": 101.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_4_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_4_0.png",
      "width": 326,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.24,
   "hfov": 20.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 101.3
  }
 ],
 "id": "overlay_719A5933_51F5_DF13_41D3_6E403A50DB3E",
 "data": {
  "label": "Restaurant"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.54,
   "yaw": 175.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_5_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_5_0.png",
      "width": 345,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.28,
   "hfov": 21.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 175.63
  }
 ],
 "id": "overlay_4CF220CB_51F3_AD73_41C4_BEB7C3F89CE4",
 "data": {
  "label": "Exit Gate"
 }
},
{
 "inertia": true,
 "id": "panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.36,
   "yaw": -45.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_6_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_427CD2BC_5152_6D15_41C1_7219B9133C87, this.camera_7F7F7131_5372_AF2C_41CF_51B6E4FBFC80); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A328FF7_5152_D313_41D2_D50740798C04",
   "pitch": -2.7,
   "hfov": 9.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -45.01
  }
 ],
 "id": "overlay_4DD10D87_51B2_B7F4_41C5_D0EAEF61A2DC",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.41,
   "yaw": -39.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_7_0.png",
      "width": 265,
      "class": "ImageResourceLevel",
      "height": 312
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.11,
   "hfov": 16.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -39.94
  }
 ],
 "id": "overlay_4EF8FBAF_51B3_B333_41C4_0D4B9FD98FDE",
 "data": {
  "label": "Landscape\u000dPool\u000dRooms\u000dBeach\u000dRooftop"
 }
},
{
 "inertia": true,
 "id": "panorama_42596E7F_5153_D514_41D1_53260001CB95_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.24,
   "yaw": 135.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_425F1511_5153_D4EC_418D_9E2A034431AB, this.camera_7EDC4090_5372_ADED_41CA_FE4D9A83FF98); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75365336_5352_5315_41A3_8979FF4C9555",
   "pitch": -3.22,
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 135.9
  }
 ],
 "id": "overlay_70179785_50BE_53F7_41C9_7B5FFA92EC13",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.26,
   "yaw": 144.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_1_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.77,
   "hfov": 27.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 144.44
  }
 ],
 "id": "overlay_710D6643_50BE_D56C_41BD_56B9871AB2E0",
 "data": {
  "label": "Landscape"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.24,
   "yaw": -78.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD, this.camera_7EF060AE_5372_AD34_41D0_71801D53C20A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75366336_5352_5315_41D0_E3A1953B02D5",
   "pitch": -3.51,
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -78.64
  }
 ],
 "id": "overlay_73656BB8_50B2_D31D_41CB_62FB7C7CDBD0",
 "data": {
  "label": "Circle Point 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.36,
   "yaw": -70.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_3_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.19,
   "hfov": 27.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -70.11
  }
 ],
 "id": "overlay_7140DDA2_50B3_B72D_41D1_97F1DE8FBE9A",
 "data": {
  "label": "Beach Bar"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.17,
   "yaw": 84.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_42407B3B_5152_531C_41D0_969AF45513E3, this.camera_7ECED09F_5372_AD13_41CA_58B2AC68CCB5); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75362336_5352_5315_41D1_47793448F476",
   "pitch": -9.11,
   "hfov": 6.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 84.6
  }
 ],
 "id": "overlay_730B01D0_50D2_AF6D_41D0_A720FED14F84",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.78,
   "yaw": 87.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_5_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_5_0.png",
      "width": 345,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.52,
   "hfov": 20.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 87.89
  }
 ],
 "id": "overlay_7237D21E_50D2_AD15_41CE_01D61B4E8BB3",
 "data": {
  "label": "Go to Rooms\u000dRooftop"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.43,
   "yaw": 178.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5B912AEE_50B2_DD34_41D0_7050A1977259, this.camera_7FA5D178_5372_AF1D_41B7_D27CF608B804); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5DCD83E2_50B5_B32D_41CB_17F04BBAA146",
   "pitch": -7.79,
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 178.21
  }
 ],
 "id": "overlay_5EACD499_50B6_751C_41C5_0EFDF97574E1",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.46,
   "yaw": 0.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5, this.camera_7FB41169_5372_AF3F_41CC_649ACDCA9EEB); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A3D8FF5_5152_D317_41D0_232008E7DD87",
   "pitch": -5.9,
   "hfov": 7.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.11
  }
 ],
 "id": "overlay_5F42CBE6_50D7_F335_41BC_2774BAFDC24E",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.74,
   "yaw": 179.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0_HS_2_0_map.gif",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0_HS_2_0.png",
      "width": 340,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.9,
   "hfov": 20.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 179.85
  }
 ],
 "id": "overlay_463B978B_5156_D3F3_41B4_76D5AD4038A1",
 "data": {
  "label": "GOODBYE"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.69,
   "yaw": 4.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0_HS_3_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0_HS_3_0.png",
      "width": 191,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.02,
   "hfov": 11.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 4.96
  }
 ],
 "id": "overlay_4941A5E9_5152_B73C_41B7_41B2B93209B0",
 "data": {
  "label": "GO"
 }
},
{
 "inertia": true,
 "id": "panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.44,
   "yaw": 0.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4, this.camera_7F83915B_5372_AF13_41C4_5D2E9DDD86DC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70BC17B3_5172_B32C_41BF_9F4695B50B76",
   "pitch": -7.36,
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.4
  }
 ],
 "id": "overlay_5D98F950_50B6_BF6D_41B4_041BC7D519F0",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "inertia": true,
 "id": "panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.76,
   "yaw": 3.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0_HS_1_0_map.gif",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0_HS_1_0.png",
      "width": 405,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.46,
   "hfov": 24.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 3.5
  }
 ],
 "id": "overlay_49820F32_514E_F32D_41C9_ABEC5EECE1B1",
 "data": {
  "label": "welcome to Safir"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 48.52,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0_HS_2_0_map.gif",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_498651B3_51BE_EF13_41B9_4357E3C80C89, {'pressedBackgroundOpacity':0.5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.5,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4D3B1640_51B2_556D_41B7_C2F78910D174, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0_HS_2_0.png",
      "width": 792,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.73,
   "hfov": 48.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -180
  }
 ],
 "id": "overlay_493DBB84_514E_53F5_41BA_2B039A14C6A1",
 "data": {
  "label": "THANKS FOR WATCHING"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.1,
   "yaw": 119.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0_HS_3_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0_HS_3_0.png",
      "width": 321,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.4,
   "hfov": 20.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 119.51
  }
 ],
 "id": "overlay_4A0ECF1E_51CF_D315_41B4_7EB21D8B15A8",
 "data": {
  "label": "Car Parking"
 }
},
{
 "inertia": true,
 "id": "panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.19,
   "yaw": 131.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA, this.camera_7FC801A5_5372_AF37_41D2_30089757FDB3); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7534233C_5352_5315_41C8_DA77EA2E17AC",
   "pitch": 8.25,
   "hfov": 6.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 131.82
  }
 ],
 "id": "overlay_7A78E4C1_5357_D56F_4186_5DD10EAD019A",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.78,
   "yaw": 143.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0_HS_1_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.11,
   "hfov": 28.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 143.56
  }
 ],
 "id": "overlay_7806E429_5356_D53F_4187_62E520B39037",
 "data": {
  "label": "EXIT"
 }
},
{
 "inertia": true,
 "id": "panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.23,
   "yaw": 146.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_42596E7F_5153_D514_41D1_53260001CB95, this.camera_7F2AF104_5372_ACF4_41B7_48A35CD13E06); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75364338_5352_531D_41C9_2C5B7A6F3134",
   "pitch": 4.75,
   "hfov": 6.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 146.98
  }
 ],
 "id": "overlay_703FD2CB_50B6_AD7C_41B3_BA8BBF1371F8",
 "data": {
  "label": "Circle 360 2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.48,
   "yaw": 155.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0_HS_1_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.32,
   "hfov": 28.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 155.51
  }
 ],
 "id": "overlay_72CE2811_50B6_5CEF_41D3_3D92AC54C7D9",
 "data": {
  "label": "Landscape"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.14,
   "yaw": 8.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E, this.camera_7F3840F5_5372_AD17_41C6_89473086EC0A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75360338_5352_531D_41CB_9AA3DEFE3E87",
   "pitch": -10.86,
   "hfov": 6.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 8.52
  }
 ],
 "id": "overlay_70CCAA7C_50B2_DD15_41B9_AFF663674FEE",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26,
   "yaw": 18.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0_HS_3_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.89,
   "hfov": 26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 18.51
  }
 ],
 "id": "overlay_73D981BF_50B3_AF14_41D2_F92635BAC52B",
 "data": {
  "label": "BEACH"
 }
},
{
 "inertia": true,
 "id": "panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.24,
   "yaw": 61.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA, this.camera_7FD80196_5372_AF15_41D0_27367D0260DB); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7534933C_5352_5315_41C4_13691347DDE3",
   "pitch": 2.71,
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 61.57
  }
 ],
 "id": "overlay_75BD47B3_534D_F32C_41C9_CCA964129237",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.67,
   "yaw": 67.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0_HS_1_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0_HS_1_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.34,
   "hfov": 17.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 67.63
  }
 ],
 "id": "overlay_7B023FCA_5352_737D_41BA_69E0C248AB63",
 "data": {
  "label": "EXIT"
 }
},
{
 "inertia": true,
 "id": "panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 18,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.08,
   "yaw": 93.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A, this.camera_7EAB7080_5372_ADED_41D2_36BE5C7429A5); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7537F33A_5352_531D_41D1_60623A2D6C91",
   "pitch": 13.21,
   "hfov": 6.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 93.93
  }
 ],
 "id": "overlay_7401D2D4_50B5_AD15_41B0_40AB36E723DE",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.48,
   "yaw": 96.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_1_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_1_0.png",
      "width": 233,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.63,
   "hfov": 14.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 96.63
  }
 ],
 "id": "overlay_76FC9C36_50B2_5515_41A1_2FAE44F88F80",
 "data": {
  "label": "Terrace"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.25,
   "yaw": -163.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5, this.camera_7EB12063_5372_AD33_41C1_E8F09C091D65); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7537B33B_5352_5313_41B2_DD10F43861D7",
   "pitch": -2.16,
   "hfov": 6.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -163.76
  }
 ],
 "id": "overlay_745B977C_534E_D315_41C3_02C50C3517EA",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.08,
   "yaw": -160.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_3_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_3_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.78,
   "hfov": 17.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -160.91
  }
 ],
 "id": "overlay_7A122421_534E_752F_41BD_6D8E7C765DB9",
 "data": {
  "label": "Bedroom"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.24,
   "yaw": -148.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1, this.camera_7EA5D071_5372_AD2F_41D3_2375DD00B9E2); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7534733B_5352_5313_41D0_581EEF5FE75B",
   "pitch": -2.53,
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -148.02
  }
 ],
 "id": "overlay_7B54D071_5352_AD2F_41BA_1E1244518A64",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.36,
   "yaw": -138.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_5_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.19,
   "hfov": 27.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -138.9
  }
 ],
 "id": "overlay_744FE059_5355_AD1F_41BE_AACA93AC91E7",
 "data": {
  "label": "Bathroom"
 }
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_75311337_5352_5313_41CD_771F11828A02",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4257E845_5153_FD74_41C0_6052EB7F4F5E_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_75312337_5352_5313_414C_46EEC36932A4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_425B9291_5152_EDEC_41C7_1D579BE9165A_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_7A371FFC_5152_D315_416E_8C39BEF09471",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_7A35AFFD_5152_D317_4192_F7F3188DB859",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_427CD2BC_5152_6D15_41C1_7219B9133C87_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_7A352FFD_5152_D317_41C8_C45382EF796A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_425E9E52_5153_B56C_41D2_B287E509957B_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_7536C339_5352_531F_41BB_35488631C797",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_7A3D4FF6_5152_D315_41C0_B51B44B2D453",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FB87D75_50DE_5714_41A2_19DC73A1E9A5_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7A3C9FF6_5152_D315_41B2_F8E5676EA1A7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_45873C68_50F2_553C_41D1_42DA895C6A3D_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7A320FF7_5152_D313_41CA_73E6DC62ED74",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_7A34DFFE_5152_D315_41B6_3292FB93DC1F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_425DDBA5_5153_B337_41D0_EBD15B597C32_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_75317334_5352_5315_41D0_13E5B85AE19A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_7536B339_5352_531F_41D0_A383AF479D59",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_7537733A_5352_531D_41D1_3D4B9A1D9B08",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_42407B3B_5152_531C_41D0_969AF45513E3_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_7537033A_5352_531D_41CD_8BAF204AEDD0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_425B3233_5153_ED13_41CE_B3325E20F637_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_75319338_5352_531D_41A1_601BD4EBFE44",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_75312335_5352_5317_41C7_CF9B16E7B057",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_425F1511_5153_D4EC_418D_9E2A034431AB_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_7531E335_5352_5317_41CA_99BAFE06E2AD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_7535433D_5352_5317_4184_66C5B5275200",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B0AF058_51D3_AD1D_41C1_B084B42D751A_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7535033D_5352_5317_41D0_4F7105267F63",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_42414BE2_5152_D32D_41D3_06C75D0E4D3A_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_7A361FFD_5152_D317_41B7_E0EC99E9D572",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4EDAA3A8_51D2_533D_41CF_9A618C9409A1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4EDA63A9_51D2_533F_41C3_56F0AF5E1121",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4ED9C3A9_51D2_533F_41B0_2CC815269345",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_413FB04F_50FD_ED73_41B8_8185BFED95B7_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_7A328FF7_5152_D313_41D2_D50740798C04",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_75365336_5352_5315_41A3_8979FF4C9555",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_75366336_5352_5315_41D0_E3A1953B02D5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_42596E7F_5153_D514_41D1_53260001CB95_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_75362336_5352_5315_41D1_47793448F476",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_5DCD83E2_50B5_B32D_41CB_17F04BBAA146",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5AF4EDEB_50B2_B733_41B4_613451C483F4_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_7A3D8FF5_5152_D317_41D0_232008E7DD87",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5B912AEE_50B2_DD34_41D0_7050A1977259_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_70BC17B3_5172_B32C_41BF_9F4695B50B76",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B0AC493_51D3_F5EC_41CF_C6358032A3B1_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7534233C_5352_5315_41C8_DA77EA2E17AC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_75364338_5352_531D_41C9_2C5B7A6F3134",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_425A44F2_5153_B52D_41D1_ADB06EA440DD_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_75360338_5352_531D_41CB_9AA3DEFE3E87",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B0BF70B_51D3_D4F3_41D2_C187723A32B5_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7534933C_5352_5315_41C4_13691347DDE3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7537F33A_5352_531D_41D1_60623A2D6C91",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_7537B33B_5352_5313_41B2_DD10F43861D7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4B29A9C3_51D3_BF73_41BF_50D97C57E5FA_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7534733B_5352_5313_41D0_581EEF5FE75B",
 "rowCount": 6,
 "colCount": 4
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getKey": function(key){  return window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "unregisterKey": function(key){  delete window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player470"
 },
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
