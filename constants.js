const liney = 710;
const linemin = 173;

const obstacles = [
         
    {
        x: +200,
        y: liney +10,
        width: 60,
        height: 60,
        type: "arrowUp"
    },
    {
        x: +800,
        y: linemin +10,
        width: 3000,
        height: 80,
        type: "jumperNeonBlue"
    },
    // {
    //     x: +900,
    //     y: linemin +10,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonBlue"
    // },
    // {
    //     x: +1000,
    //     y: linemin +10,
    //     width: 50,
    //     height: 50,
    //     type: "killerSpikesIceTecho"
    // },
    // {
    //     x: +1050,
    //     y: linemin +10,
    //     width: 50,
    //     height: 50,
    //     type: "killerSpikesIceTecho"
    // },
    // {
    //     x: +1100,
    //     y: linemin +10,
    //     width: 50,
    //     height: 50,
    //     type: "killerSpikesIceTecho"
    // },
    // {
    //     x: +1150,
    //     y: linemin +10,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonViolet"
    // },
    // {
    //     x: +1230,
    //     y: linemin +10,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonViolet"
    // },
    // {
    //     x: +1800,
    //     y: linemin +10,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonViolet"
    // },
    // {
    //     x: +1880,
    //     y: linemin +10,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonViolet"
    // },
    // {
    //     x: +2100,
    //     y: linemin +90,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonViolet"
    // },
    // {
    //     x: +2180,
    //     y: linemin +90,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonViolet"
    // },
    // {
    //     x: +2400,
    //     y: linemin +170,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonViolet"
    // },
    // {
    //     x: +2480,
    //     y: linemin +170,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonViolet"
    // },
    // {
    //     x: +2700,
    //     y: linemin +90,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonViolet"
    // },
    // {
    //     x: +2780,
    //     y: linemin +90,
    //     width: 80,
    //     height: 80,
    //     type: "jumperNeonViolet"
    // },
    {
        x: +800,
        y: liney -10,
        width: 3000,
        height: 80,
        type: "jumperNeonViolet"
    },

    {
        x: +44500,
        y: linemin +10,
        width: 60,
        height: 60,
        type: "arrowDown"
    },


  

//////----------------------------------------------------------------------------------------------------------
//     {
//         x: -80,
//         y: liney +10,
//         width: 60,
//         height: 60,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +1100,
//         y: liney +10,
//         width: 60,
//         height: 60,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +2400,
//         y: liney +10,
//         width: 60,
//         height: 60,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +3600,
//         y: liney +10,
//         width: 60,
//         height: 60,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +4400,
//         y: liney -35,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +4450,
//         y: liney -35,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +4500,
//         y: liney -35,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +4600,
//         y: liney +15,
//         width: 650,
//         height: 50,
//         type: "killerFire"
//     },
    
//     {
//         x: +4750,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +4800,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +4850,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +4900,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +5100,
//         y: liney -115,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +5150,
//         y: liney -115,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +5200,
//         y: liney -115,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +5950,
//         y: liney -35,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +6000,
//         y: liney -35,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +6100,
//         y: liney +40,
//         width: 300,
//         height: 50,
//         type: "pusher"
//     },
    
//     {
//         x: +6500,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +6550,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +6650,
//         y: liney +40,
//         width: 300,
//         height: 50,
//         type: "pusher"
//     },
//     {
//         x: +7050,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +7100,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +7600,
//         y: liney +10,
//         width: 60,
//         height: 60,
//         type: "killerSpikesIce"
//     },

//     ////--------------------------------------------
//     {
//         x: +8600,
//         y: liney +10,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +8650,
//         y: liney +10,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +8700,
//         y: liney +10,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +8750,
//         y: liney+10,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +8800,
//         y: liney+10,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +8750,
//         y: liney -20,
//         width: 150,
//         height: 50,
//         type: "pusher"
//     },
//     {
//         x: +9100,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +9150,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +9200,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +9250,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +9300,
//         y: liney -85,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +9250,
//         y: liney -115,
//         width: 150,
//         height: 50,
//         type: "pusher"
//     },
//     {
//         x: +9600,
//         y: liney -180,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +9650,
//         y: liney -180,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +9700,
//         y: liney -180,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +9750,
//         y: liney -180,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +9800,
//         y: liney -180,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +10300,
//         y: liney +10,
//         width: 60,
//         height: 60,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +10950,
//         y: liney -35,
//         width: 3550,
//         height: 100,
//         type: "jumper"
//     },
//     {
//         x: +11800,
//         y: liney -135,
//         width: 2700,
//         height: 100,
//         type: "jumper"
//     },
//     {
//         x: +12800,
//         y: liney -235,
//         width: 1700,
//         height: 100,
//         type: "jumper"
//     },
//     {
//         x: +10950,
//         y: linemin,
//         width: 3550,
//         height: 100,
//         type: "jumper"
//     },
//     {
//         x: +13950,
//         y: liney -480,
//         width: 600,
//         height: 300,
//         type: "portal"
//     },

//     ///NAVE VOLANDO
//     {
//         x: +16000,
//         y: liney -127,
//         width: 50,
//         height: 200,
//         type: "jumper"
//     },
//     {
//         x: +16000,
//         y: liney -175,
//         width: 50,
//         height: 50,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +16600,
//         y: linemin +12,
//         width: 300,
//         height: 200,
//         type: "jumper"
//     },
//     {
//         x: +16600,
//         y: linemin + 212,
//         width: 300,
//         height: 50,
//         type: "killerSpikesTecho1"
//     },

//     {
//         x: +17200,
//         y: linemin +270,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +17250,
//         y: linemin +220,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +17250,
//         y: linemin +170,
//         width: 50,
//         height: 50,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +17250,
//         y: linemin +320,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +17250,
//         y: linemin +370,
//         width: 50,
//         height: 50,
//         type: "killerSpikesTecho1"
//     },
//     {
//         x: +17800,
//         y: linemin +12,
//         width: 300,
//         height: 100,
//         type: "jumper"
//     },
//     {
//         x: +17800,
//         y: linemin +112,
//         width: 300,
//         height: 100,
//         type: "killerSpikesTecho1"
//     },
//     {
//         x: +17800,
//         y: liney -27,
//         width: 300,
//         height: 100,
//         type: "jumper"
//     },
//     {
//         x: +17800,
//         y: liney -77,//
//         width: 300,
//         height: 50,
//         type: "killerFire"
//     },
//     {
//         x: +18600,
//         y: linemin +320,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +18650,
//         y: linemin +370,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +18700,
//         y: linemin +420,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +18750,
//         y: linemin +470,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +18800,
//         y: linemin +520,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +18100,
//         y: liney +15,
//         width: 700,
//         height: 50,
//         type: "killerFire"
//     },
//     {
//         x: +19300,
//         y: linemin +270,
//         width: 50,
//         height: 50,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +19300,
//         y: linemin +320,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +19300,
//         y: linemin +370,
//         width: 50,
//         height: 50,
//         type: "killerSpikesTecho1"
//     },
//     {
//         x: +19500,
//         y: linemin +10,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +19550,
//         y: linemin +60,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +19600,
//         y: linemin +110,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +19650,
//         y: linemin +160,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +19700,
//         y: linemin +210,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +19750,
//         y: linemin +260,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +20000,
//         y: liney +10,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +20050,
//         y: liney -40,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +20100,
//         y: liney -90,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +20150,
//         y: liney -140,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +21500,
//         y: linemin +12,
//         width: 100,
//         height: 300,
//         type: "jumper"
//     },
//     {
//         x: +21500,
//         y: linemin +312,
//         width: 100,
//         height: 100,
//         type: "killerSpikesTecho1"
//     },
//     {
//         x: +23000,
//         y: liney -127,
//         width: 50,
//         height: 200,
//         type: "jumper"
//     },
//     {
//         x: +23000,
//         y: liney -175,
//         width: 50,
//         height: 50,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +23050,
//         y: liney -227,
//         width: 400,
//         height: 300,
//         type: "jumper"
//     },
//     {
//         x: +23050,
//         y: liney -277,
//         width: 400,
//         height: 50,
//         type: "killerFire"
//     },
//     {
//         x: +23450,
//         y: liney -277,
//         width: 350,
//         height: 350,
//         type: "jumper"
//     },
//     {
//         x: +23450,
//         y: liney -327,
//         width: 50,
//         height: 50,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +23550,
//         y: liney -327,
//         width: 50,
//         height: 50,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +23650,
//         y: liney -327,
//         width: 50,
//         height: 50,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +23750,
//         y: liney -327,
//         width: 50,
//         height: 50,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +24600,
//         y: liney +10,
//         width: 60,
//         height: 60,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +25000,
//         y: liney +10,
//         width: 60,
//         height: 60,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +25400,
//         y: liney +10,
//         width: 60,
//         height: 60,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +25800,
//         y: liney +10,
//         width: 60,
//         height: 60,
//         type: "killerSpikesIce"
//     },
//     {
//         x: +25900,
//         y: liney +40,
//         width: 300,
//         height: 50,
//         type: "pusher"
//     },
//     {
//         x: +26300,
//         y: liney -50,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +26400,
//         y: liney -10,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +26800,
//         y: liney +40,
//         width: 300,
//         height: 50,
//         type: "pusher"
//     },
//     {
//         x: +27000,
//         y: liney -100,
//         width: 300,
//         height: 50,
//         type: "pusher"
//     },
//     {
//         x: +27300,
//         y: liney -300,
//         width: 300,
//         height: 50,
//         type: "pusher"
//     },
//     {
//         x: +27800,
//         y: liney -300,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +27850,
//         y: liney -300,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +27900,
//         y: liney -300,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +27950,
//         y: liney -300,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +28200,
//         y: liney -400,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +28250,
//         y: liney -400,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +28300,
//         y: liney -400,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +28350,
//         y: liney -400,
//         width: 50,
//         height: 50,
//         type: "jumperNeonViolet"
//     },
//     {
//         x: +28200,
//         y: linemin,
//         width: 200,
//         height: 100,
//         type: "killerSpikesTecho1"
//     },
//     {
//         x: +28150,
//         y: liney -200,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28200,
//         y: liney -200,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28250,
//         y: liney -200,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28300,
//         y: liney -200,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28350,
//         y: liney -200,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28400,
//         y: liney -200,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28450,
//         y: liney -150,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28500,
//         y: liney -150,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28550,
//         y: liney -150,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28600,
//         y: liney -150,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28480,
//         y: liney -200,
//         width: 100,
//         height: 50,
//         type: "killerFire"
//     },
//     {
//         x: +28650,
//         y: liney -200,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28700,
//         y: liney -200,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },
//     {
//         x: +28750,
//         y: liney -200,
//         width: 50,
//         height: 50,
//         type: "jumperNeonBlue"
//     },

 

// //     //PARTE CHECK--------------------------------------------------------------------------------------------------------------------

// {
//     x: +29400,
//        y: liney +10,
//        width: 60,
//        height: 60,
//        type: "killerSpikesIce"
//    },
//    {
//        x: +29800,
//        y: liney +10,
//        width: 60,
//        height: 60,
//        type: "killerSpikesIce"
//    },
//    {
//        x: +30200,
//        y: liney +10,
//        width: 60,
//        height: 60,
//        type: "killerSpikesIce"
//    },
//    {
//        x: +30700,
//        y: liney -35,
//        width: 50,
//        height: 50,
//        type: "jumperNeonBlue"
//    },
//    {
//        x: +30750,
//        y: liney -35,
//        width: 50,
//        height: 50,
//        type: "jumperNeonBlue"
//    },
//    {
//        x: +30800,
//        y: liney -35,
//        width: 50,
//        height: 50,
//        type: "jumperNeonBlue"
//    },
//    {
//        x: +30750,
//        y: liney -60,
//        width: 100,
//        height: 50,
//        type: "pusher"
//    },
//    {
//        x: +31000,
//        y: linemin,
//        width: 1000,
//        height: 100,
//        type: "jumper"
//    },
//    {
//        x: +31200,
//        y: linemin +100,
//        width: 800,
//        height: 100,
//        type: "killerSpikesTecho1"
//    },
//    {
//        x: +31000,
//        y: liney -235,
//        width: 1000,
//        height: 300,
//        type: "jumper"
//    },
//    {
//        x: +32100,
//        y: liney -100,
//        width: 50,
//        height: 50,
//        type: "jumperNeonViolet"
//    },
//    {
//        x: +32100,
//        y: liney -125,
//        width: 50,
//        height: 50,
//        type: "pusher"
//    },
//    {
//        x: +32000,
//        y: liney +15,
//        width: 600,
//        height: 50,
//        type: "killerFire"
//    },
//    {
//        x: +32400,
//        y: liney -300,
//        width: 50,
//        height: 50,
//        type: "jumperNeonViolet"
//    },
//    {
//        x: +32450,
//        y: liney -300,
//        width: 50,
//        height: 50,
//        type: "jumperNeonViolet"
//    },
//    {
//        x: +32500,
//        y: liney -300,
//        width: 50,
//        height: 50,
//        type: "jumperNeonViolet"
//    },
//    {
//        x: +32600,
//        y: linemin +10,
//        width: 800,
//        height: 100,
//        type: "killerSpikesTecho1"
//    },
//    {
//        x: +32600,
//        y: liney -135,
//        width: 1200,
//        height: 200,
//        type: "jumper"
//    },
   
//    {
//        x: +32900,
//        y: liney -190,
//        width: 100,
//        height: 100,
//        type: "pusher"
//    },
//    {
//        x: +33300,
//        y: liney -190,
//        width: 60,
//        height: 60,
//        type: "killerSpikesIce"
//    },
//    {
//        x: +33700,
//        y: liney -190,
//        width: 100,
//        height: 100,
//        type: "pusher"
//    },








//// NON GRAVITY
    {
        x: +34200,
        y: liney +10,
        width: 60,
        height: 60,
        type: "arrowUp"
    },



    {
        x: +44500,
        y: linemin +10,
        width: 60,
        height: 60,
        type: "arrowDown"
    },


];

