const liney = 710;
const linemin = 173;

const obstacles = [
  


  //   //////----------------------------------------------------------------------------------------------------------
        {
            x: -80,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +1100,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +2400,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +3600,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +4400,
            y: liney -35,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +4450,
            y: liney -35,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +4500,
            y: liney -35,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +4600,
            y: liney +15,
            width: 650,
            height: 50,
            type: "killerFire"
        },

        {
            x: +4750,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +4800,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +4850,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +4900,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +5100,
            y: liney -115,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +5150,
            y: liney -115,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +5200,
            y: liney -115,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +5950,
            y: liney -35,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +6000,
            y: liney -35,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +6100,
            y: liney +5,
            width: 300,
            height: 100,
            type: "pusher"
        },
        {
            x: +6400,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },

        {
            x: +6500,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +6550,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +6650,
            y: liney +5,
            width: 300,
            height: 100,
            type: "pusher"
        },
        {
            x: +7000,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +7050,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +7100,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +7600,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +8600,
            y: liney +10,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +8650,
            y: liney +10,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +8700,
            y: liney +10,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +8750,
            y: liney+10,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +8800,
            y: liney+10,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +8750,
            y: liney -20,
            width: 150,
            height: 50,
            type: "pusher"
        },
        {
            x: +8850,
            y: liney + 15,
            width: 1000,
            height: 50,
            type: "killerFire",
          },
        {
            x: +9100,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +9150,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +9200,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +9250,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +9300,
            y: liney -85,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +9250,
            y: liney -115,
            width: 150,
            height: 50,
            type: "pusher"
        },
        {
            x: +9600,
            y: liney -180,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +9650,
            y: liney -180,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +9700,
            y: liney -180,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +9750,
            y: liney -180,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +9800,
            y: liney -180,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +10300,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +10950,
            y: liney -35,
            width: 3550,
            height: 100,
            type: "jumper"
        },
        {
            x: +11800,
            y: liney -135,
            width: 2700,
            height: 100,
            type: "jumper"
        },
        {
            x: +12800,
            y: liney -235,
            width: 1700,
            height: 100,
            type: "jumper"
        },
        {
            x: +10950,
            y: linemin,
            width: 3550,
            height: 100,
            type: "jumper"
        },
        {
            x: +13950,
            y: liney -480,
            width: 600,
            height: 300,
            type: "portal"
        },

        ///NAVE VOLANDO
        {
            x: +16000,
            y: liney -127,
            width: 50,
            height: 200,
            type: "jumper"
        },
        {
            x: +16000,
            y: liney -175,
            width: 50,
            height: 50,
            type: "killerSpikesIce"
        },
        {
            x: +16600,
            y: linemin +12,
            width: 300,
            height: 200,
            type: "jumper"
        },
        {
            x: +16600,
            y: linemin + 212,
            width: 300,
            height: 50,
            type: "killerSpikesTecho1"
        },

        {
            x: +17200,
            y: linemin +270,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +17250,
            y: linemin +220,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +17250,
            y: linemin +170,
            width: 50,
            height: 50,
            type: "killerSpikesIce"
        },
        {
            x: +17250,
            y: linemin +320,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +17250,
            y: linemin +370,
            width: 50,
            height: 50,
            type: "killerSpikesTecho1"
        },
        {
            x: +17800,
            y: linemin +12,
            width: 300,
            height: 100,
            type: "jumper"
        },
        {
            x: +17800,
            y: linemin +112,
            width: 300,
            height: 100,
            type: "killerSpikesTecho1"
        },
        {
            x: +17800,
            y: liney -27,
            width: 300,
            height: 100,
            type: "jumper"
        },
        {
            x: +17800,
            y: liney -77,//
            width: 300,
            height: 50,
            type: "killerFire"
        },
        {
            x: +18600,
            y: linemin +320,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +18650,
            y: linemin +370,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +18700,
            y: linemin +420,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +18750,
            y: linemin +470,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +18800,
            y: linemin +520,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +18100,
            y: liney +15,
            width: 700,
            height: 50,
            type: "killerFire"
        },
        {
            x: +19300,
            y: linemin +270,
            width: 50,
            height: 50,
            type: "killerSpikesIce"
        },
        {
            x: +19300,
            y: linemin +320,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +19300,
            y: linemin +370,
            width: 50,
            height: 50,
            type: "killerSpikesTecho1"
        },
        {
            x: +19500,
            y: linemin +10,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +19550,
            y: linemin +60,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +19600,
            y: linemin +110,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +19650,
            y: linemin +160,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +19700,
            y: linemin +210,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +19750,
            y: linemin +260,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +20000,
            y: liney +10,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +20050,
            y: liney -40,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +20100,
            y: liney -90,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +20150,
            y: liney -140,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +20700,
            y: linemin +12,
            width: 300,
            height: 100,
            type: "jumper"
        },
        {
            x: +20700,
            y: linemin +112,
            width: 300,
            height: 100,
            type: "killerSpikesTecho1"
        },
        {
            x: +20700,
            y: liney -27,
            width: 300,
            height: 100,
            type: "jumper"
        },
        {
            x: +20700,
            y: liney -77,//
            width: 300,
            height: 50,
            type: "killerFire"
        },
        {
            x: +21500,
            y: linemin +12,
            width: 100,
            height: 300,
            type: "jumper"
        },
        {
            x: +21500,
            y: linemin +312,
            width: 100,
            height: 100,
            type: "killerSpikesTecho1"
        },
        {
            x: +23000,
            y: liney -127,
            width: 50,
            height: 200,
            type: "jumper"
        },
        {
            x: +23000,
            y: liney -175,
            width: 50,
            height: 50,
            type: "killerSpikesIce"
        },
        {
            x: +23050,
            y: liney -227,
            width: 400,
            height: 300,
            type: "jumper"
        },
        {
            x: +23050,
            y: liney -277,
            width: 400,
            height: 50,
            type: "killerFire"
        },
        {
            x: +23450,
            y: liney -277,
            width: 350,
            height: 350,
            type: "jumper"
        },
        {
            x: +23450,
            y: liney -327,
            width: 50,
            height: 50,
            type: "killerSpikesIce"
        },
        {
            x: +23550,
            y: liney -327,
            width: 50,
            height: 50,
            type: "killerSpikesIce"
        },
        {
            x: +23650,
            y: liney -327,
            width: 50,
            height: 50,
            type: "killerSpikesIce"
        },
        {
            x: +23750,
            y: liney -327,
            width: 50,
            height: 50,
            type: "killerSpikesIce"
        },
        {
            x: +24600,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +25000,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +25400,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +25800,
            y: liney +10,
            width: 60,
            height: 60,
            type: "killerSpikesIce"
        },
        {
            x: +25900,
            y: liney +5,
            width: 300,
            height: 100,
            type: "pusher"
        },
        {
            x: +26300,
            y: liney -50,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +26400,
            y: liney -10,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +26800,
            y: liney +5,
            width: 300,
            height: 100,
            type: "pusher"
        },
        {
            x: +27000,
            y: liney -100,
            width: 300,
            height: 50,
            type: "pusher"
        },
        {
            x: +27300,
            y: liney -300,
            width: 300,
            height: 50,
            type: "pusher"
        },
        {
            x: +27100,
            y: liney +15,
            width: 700,
            height: 50,
            type: "killerFire"
        },
        {
            x: +27800,
            y: liney -300,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +27850,
            y: liney -300,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +27900,
            y: liney -300,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +27950,
            y: liney -300,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +28200,
            y: liney -400,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +28250,
            y: liney -400,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +28300,
            y: liney -400,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +28350,
            y: liney -400,
            width: 50,
            height: 50,
            type: "jumperNeonViolet"
        },
        {
            x: +28200,
            y: linemin,
            width: 200,
            height: 100,
            type: "killerSpikesTecho1"
        },
        {
            x: +28150,
            y: liney -200,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28200,
            y: liney -200,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28250,
            y: liney -200,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28300,
            y: liney -200,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28350,
            y: liney -200,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28400,
            y: liney -200,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28450,
            y: liney -150,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28500,
            y: liney -150,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28550,
            y: liney -150,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28600,
            y: liney -150,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28480,
            y: liney -200,
            width: 100,
            height: 50,
            type: "killerFire"
        },
        {
            x: +28650,
            y: liney -200,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28700,
            y: liney -200,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +28750,
            y: liney -200,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },

    {
        x: +29400,
           y: liney +10,
           width: 60,
           height: 60,
           type: "killerSpikesIce"
       },
       {
           x: +29800,
           y: liney +10,
           width: 60,
           height: 60,
           type: "killerSpikesIce"
       },
       {
           x: +30200,
           y: liney +10,
           width: 60,
           height: 60,
           type: "killerSpikesIce"
       },
       {
           x: +30700,
           y: liney -35,
           width: 50,
           height: 50,
           type: "jumperNeonBlue"
       },
       {
           x: +30750,
           y: liney -35,
           width: 50,
           height: 50,
           type: "jumperNeonBlue"
       },
       {
           x: +30800,
           y: liney -35,
           width: 50,
           height: 50,
           type: "jumperNeonBlue"
       },
       {
           x: +30750,
           y: liney -60,
           width: 100,
           height: 50,
           type: "pusher"
       },
       {
           x: +31000,
           y: linemin,
           width: 1000,
           height: 100,
           type: "jumper"
       },
       {
           x: +31200,
           y: linemin +100,
           width: 800,
           height: 100,
           type: "killerSpikesTecho1"
       },
       {
           x: +31000,
           y: liney -235,
           width: 1000,
           height: 300,
           type: "jumper"
       },
       {
           x: +32100,
           y: liney -100,
           width: 50,
           height: 50,
           type: "jumperNeonViolet"
       },
       {
           x: +32100,
           y: liney -125,
           width: 50,
           height: 50,
           type: "pusher"
       },
       {
           x: +32000,
           y: liney +15,
           width: 600,
           height: 50,
           type: "killerFire"
       },
       {
           x: +32400,
           y: liney -300,
           width: 50,
           height: 50,
           type: "jumperNeonViolet"
       },
       {
           x: +32450,
           y: liney -300,
           width: 50,
           height: 50,
           type: "jumperNeonViolet"
       },
       {
           x: +32500,
           y: liney -300,
           width: 50,
           height: 50,
           type: "jumperNeonViolet"
       },
       {
           x: +32600,
           y: linemin +10,
           width: 800,
           height: 100,
           type: "killerSpikesTecho1"
       },
       {
           x: +32600,
           y: liney -135,
           width: 1200,
           height: 200,
           type: "jumper"
       },

       {
           x: +32900,
           y: liney -190,
           width: 100,
           height: 100,
           type: "pusher"
       },
       {
           x: +33300,
           y: liney -190,
           width: 60,
           height: 60,
           type: "killerSpikesIce"
       },
       {
           x: +33700,
           y: liney -190,
           width: 100,
           height: 100,
           type: "pusher"
       },

    //// NON GRAVITY
        {
            x: +34200,
            y: liney +10,
            width: 60,
            height: 60,
            type: "arrowUp"
        },
        {
            x: +34820,
            y: linemin +10,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +34900,
            y: linemin +10,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +35000,
            y: linemin +10,
            width: 50,
            height: 50,
            type: "killerSpikesIceTecho"
        },
        {
            x: +35050,
            y: linemin +10,
            width: 50,
            height: 50,
            type: "killerSpikesIceTecho"
        },
        {
            x: +35100,
            y: linemin +10,
            width: 50,
            height: 50,
            type: "killerSpikesIceTecho"
        },
        {
            x: +35150,
            y: linemin +10,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +35230,
            y: linemin +10,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +35750,
            y: linemin +10,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +35830,
            y: linemin +10,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +36100,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +36180,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +36400,
            y: linemin +170,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +36480,
            y: linemin +170,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +36700,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +36780,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +36000,
            y: linemin +10,
            width: 900,
            height: 80,
            type: "killerFireTecho"
        },

        {
            x: +37200,
            y: linemin +90,
            width: 50,
            height: 50,
            type: "jumperNeonBlue"
        },
        {
            x: +37200,
            y: linemin +140,
            width: 50,
            height: 50,
            type: "killerSpikesIceTecho"
        },
        {
            x: +37800,
            y: linemin -80,
            width: 200,
            height: 200,
            type: "pusher"
        },
        {
            x: +38000,
            y: linemin +90,
            width: 2000,
            height: 80,
            type: "jumper"
        },
        {
            x: +38400,
            y: linemin +170,
            width: 60,
            height: 60,
            type: "killerSpikesIceTecho"
        },
        {
            x: +39000,
            y: linemin +170,
            width: 60,
            height: 60,
            type: "killerSpikesIceTecho"
        },
        {
            x: +39600,
            y: linemin +170,
            width: 60,
            height: 60,
            type: "killerSpikesIceTecho"
        },
        {
            x: +40150,
            y: linemin +170,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +40230,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +40310,
            y: linemin +10,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +40100,
            y: linemin +10,
            width: 50,
            height: 50,
            type: "killerSpikesIceTecho"
        },
        {
            x: +40150,
            y: linemin +10,
            width: 50,
            height: 50,
            type: "killerSpikesIceTecho"
        },
        {
            x: +40650,
            y: linemin -80,
            width: 200,
            height: 200,
            type: "pusher"
        },
        {
            x: +40800,
            y: linemin +10,
            width: 1700,
            height: 80,
            type: "killerFireTecho"
        },
        {
            x: +40850,
            y: linemin +150,
            width: 200,
            height: 200,
            type: "pusher"
        },
        {
            x: +41150,
            y: linemin +100,
            width: 200,
            height: 200,
            type: "pusher"
        },
        {
            x: +41550,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +41630,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +41950,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +42030,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +42350,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
        {
            x: +42430,
            y: linemin +90,
            width: 80,
            height: 80,
            type: "jumperNeonViolet"
        },
    {
        x: +43000,
        y: linemin +10,
        width: 50,
        height: 50,
        type: "killerSpikesIceTecho"
    },

    {
        x: +43500,
        y: linemin +10,
        width: 50,
        height: 50,
        type: "killerSpikesIceTecho"
    },
    {
        x: +44000,
        y: linemin +10,
        width: 50,
        height: 50,
        type: "killerSpikesIceTecho"
    },

    {
         x: +44500,
        y: linemin +10,
        width: 150,
        height: 150,
        type: "arrowDown"
        },

    ///// GRAVEDAD NORMAL
    {
        x: +46000,
        y: liney +10,
        width: 60,
        height: 60,
        type: "killerSpikesIce"
    },
    {
        x: +47000,
        y: liney -35,
        width: 50,
        height: 50,
        type: "jumperNeonViolet"
    },
    {
        x: +47050,
        y: liney -35,
        width: 50,
        height: 50,
        type: "jumperNeonViolet"
    },
    {
        x: +47100,
        y: liney -35,
        width: 50,
        height: 50,
        type: "jumperNeonViolet"
    },
    {
        x: +47200,
        y: liney +15,
        width: 650,
        height: 50,
        type: "killerFire"
    },

    {
        x: +47450,
        y: liney -85,
        width: 50,
        height: 50,
        type: "jumperNeonBlue"
    },
    {
        x: +47500,
        y: liney -85,
        width: 50,
        height: 50,
        type: "jumperNeonBlue"
    },
    {
        x: +47550,
        y: liney -85,
        width: 50,
        height: 50,
        type: "jumperNeonBlue"
    },
    {
        x: +47600,
        y: liney -85,
        width: 50,
        height: 50,
        type: "jumperNeonBlue"
    },
    {
        x: +47800,
        y: liney -115,
        width: 50,
        height: 50,
        type: "jumperNeonViolet"
    },
    {
        x: +47850,
        y: liney -115,
        width: 50,
        height: 50,
        type: "jumperNeonViolet"
    },
    {
        x: +47900,
        y: liney -115,
        width: 50,
        height: 50,
        type: "jumperNeonViolet"
    },
    {
      x: +48600,
      y: liney + 5,
      width: 300,
      height: 100,
      type: "pusher",
    },
    {
      x: +49000,
      y: liney - 85,
      width: 80,
      height: 80,
      type: "jumperNeonBlue",
    },
    {
      x: +49080,
      y: liney - 85,
      width: 80,
      height: 80,
      type: "jumperNeonBlue",
    },
    {
      x: +49160,
      y: liney - 85,
      width: 80,
      height: 80,
      type: "jumperNeonBlue",
    },
    {
      x: +49050,
      y: liney - 140,
      width: 300,
      height: 100,
      type: "pusher",
    },
    {
      x: +49500,
      y: liney - 85,
      width: 80,
      height: 80,
      type: "jumperNeonBlue",
    },
    {
      x: +49580,
      y: liney - 85,
      width: 80,
      height: 80,
      type: "jumperNeonBlue",
    },
    {
      x: +49660,
      y: liney - 85,
      width: 80,
      height: 80,
      type: "jumperNeonBlue",
    },

    {
      x: +50000,
      y: liney - 85,
      width: 80,
      height: 80,
      type: "jumperNeonBlue",
    },
    {
      x: +50080,
      y: liney - 85,
      width: 80,
      height: 80,
      type: "jumperNeonBlue",
    },
    {
      x: +50160,
      y: liney - 85,
      width: 80,
      height: 80,
      type: "jumperNeonBlue",
    },
    {
      x: +49250,
      y: liney +15,
      width: 1000,
      height: 50,
      type: "killerFire"
    },
    {
        x: +50600,
        y: liney - 35,
        width: 50,
        height: 50,
        type: "jumperNeonBlue",
      },
      {
        x: +50650,
        y: liney - 35,
        width: 50,
        height: 50,
        type: "jumperNeonBlue",
      },
      {
        x: +50700,
        y: liney - 35,
        width: 50,
        height: 50,
        type: "jumperNeonBlue",
      },
      {
        x: +50750,
        y: liney - 35,
        width: 50,
        height: 50,
        type: "jumperNeonBlue",
      },
      {
        x: +50750,
        y: liney - 35,
        width: 50,
        height: 50,
        type: "jumperNeonBlue",
      },
      {
        x: +50850,
        y: liney + 10,
        width: 60,
        height: 60,
        type: "killerSpikesIce",
      },
      {
        x: +50920,
        y: liney + 10,
        width: 60,
        height: 60,
        type: "killerSpikesIce",
      },
      {
        x: +51020,
        y: liney - 85,
        width: 50,
        height: 50,
        type: "jumperNeonViolet",
      },
      {
        x: +51070,
        y: liney - 85,
        width: 50,
        height: 50,
        type: "jumperNeonViolet",
      },
      {
        x: +51120,
        y: liney - 85,
        width: 50,
        height: 50,
        type: "jumperNeonViolet",
      },
      {
        x: +51170,
        y: liney - 85,
        width: 50,
        height: 50,
        type: "jumperNeonViolet",
      },
      {
        x: +51230,
        y: liney - 35,
        width: 60,
        height: 60,
        type: "jumperNeonViolet",
      },
      {
        x: +51230,
        y: liney - 95,
        width: 60,
        height: 60,
        type: "killerSpikesIce",
      },
      {
        x: +51290,
        y: liney - 35,
        width: 60,
        height: 60,
        type: "jumperNeonViolet",
      },
      {
        x: +51290,
        y: liney - 95,
        width: 60,
        height: 60,
        type: "killerSpikesIce",
      },
      {
        x: +51350,
        y: liney - 95,
        width: 50,
        height: 50,
        type: "jumperNeonViolet",
      },
      {
        x: +51400,
        y: liney - 95,
        width: 50,
        height: 50,
        type: "jumperNeonViolet",
      },
      {
        x: +51450,
        y: liney - 95,
        width: 50,
        height: 50,
        type: "jumperNeonViolet",
      },
      {
        x: +51400,
        y: liney - 150,
        width: 100,
        height: 100,
        type: "pusher",
      },
      {
        x: +51800,
        y: liney -50,
        width: 100,
        height: 100,
        type: "pusher",
      },
      {
        x: +51500,
        y: liney + 15,
        width: 500,
        height: 50,
        type: "killerFire",
      },
      {
        x: +53600,
        y: liney -580,
        width: 700,
        height: 700,
        type: "portal"
    },

];
