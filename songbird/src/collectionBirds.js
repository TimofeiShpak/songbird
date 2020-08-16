const collectionBirds = [
    [
        {
            id: 1,
            name: 'Африканский страус',
            species: 'Struthio camelus',
            image: 'https://live.staticflickr.com//65535//50221207221_200bb7eca6.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC516153-Struthio_camelus_australis-FL%20quiet%20calls%20imm%20Polokwane%20GameRes%2030Oct19%208.05am%20LS115271a.mp3'   
        },
        {
            id: 2,
            name: 'Горный гусь',
            species: 'Anser indicus',
            image: 'https://live.staticflickr.com//65535//50211992526_7fcee5cd30.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/NRUIFMFTXY/XC526923-Bar-headed%20Goose%20Bayan%20Nuur%20170529_3140.mp3'   
        },
        {
            id: 3,
            name: 'Древесная утка',
            species: 'Dendrocygna autumnalis',
            image: 'https://live.staticflickr.com//65535//50226418923_014272e003.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/KTLCZCRCQX/XC173683-20140310-0744-PR131-US-PR-Laguna%20Cartagena-West%20Indian%20Whistling-Duck.mp3'   
        },
        {
            id: 4,
            name: 'Огарь',
            species: 'Tadorna ferruginea',
            image: 'https://live.staticflickr.com//65535//50187769527_811fed4c5f.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/NRUIFMFTXY/XC526945-Ruddy%20Shelduck%20kk%20mountain%20170529_3131.mp3'   
        },
        {
            id: 5,
            name: 'Кряква',
            species: 'Anas platyrhynchos',
            image: 'https://live.staticflickr.com//65535//50227916296_3112f2d474.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/INCBVJJLBJ/XC573932-Default%20Project.mp3'   
        },
        {
            id: 6,
            name: 'Морская чернеть',
            species: 'Aythya marila',
            image: 'https://live.staticflickr.com//65535//50198904448_1fa352f86d.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487288-2018-07-13%20juillet%20Reykjavik%20Fuligule%20milouinan%20femelle%20cri%20pour%20appeler%20son%20petit%20%283%29.mp3'   
        },
    ],
    [
        {   
            id:1,
            name:'Лебедь-кликун',
            species:'Cygnus cygnus',
            image: 'https://live.staticflickr.com//65535//50180764783_938f3192b9.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/JXZFXAZWHY/XC537040-ZOOM0012.mp3',
        },
        {
            id: 2,
            name: 'Мускусная утка',
            species: 'Cairina moschata',
            image: 'https://live.staticflickr.com//65535//50214417477_ef014c03fe.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/AHYWLCEJLP/XC163752-Casteina%20criolla%20dia%202.mp3'
        }, 
        {
            id: 3,
            name: 'Серый гусь',
            species: 'Anser anser',
            image: 'https://live.staticflickr.com//65535//50227673018_270ac0d29c.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/MHVQXRLBKS/XC554040-Grauwe%20Gans%202020-05-04%200655a.mp3'
        },
        {
            id: 4,
            name: 'Белошейная гагара',
            species: 'Gavia pacifica',
            image: 'https://live.staticflickr.com//65535//50167203466_aae239e4da.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC276965-Gavia_pacifica-FL%20song%20Barrow%2013Jun15%202.56pm%20LS117115a.mp3'
        },
        {
            id: 5,
            name: 'Каролинская поганка',
            species: 'Podilymbus podiceps',
            image: 'https://live.staticflickr.com//65535//50228114022_40315baf40.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/MDZVOPUOXU/XC542620-200321_02.pied.billed.grebe.san.dimas.canyon.reservoir.lance.benner.mp3'
        },
        {
            id: 6,
            name: 'Кудрявый пеликан',
            species: 'Pelecanus crispus',
            image: 'https://live.staticflickr.com//65535//50159952721_61b753b9ef.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/FWAVTDTPIQ/XC137864-Pelecanus%20crispus-1-20000514.mp3'
        }
    ],
    [
        {   
            id:1,
            name:'Белоглазый нырок',
            species:'Aythya nyroca',
            image: 'https://live.staticflickr.com//65535//50189903527_58e3b13302.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC471908-2019-04-14%20Barcaggio%20Fuligule%20nyroca%20cris%20de%20vol%202%20%2B.mp3',
        },
        {
            id: 2,
            name: 'Мандаринка',
            species: 'Aix galericulata',
            image: 'https://live.staticflickr.com//65535//50226107248_b939b568f2.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YDQKMZXDRL/XC534776-DM673134_bereinigt_MaE-bei%204min-Noise.mp3'
        }, 
        {
            id: 3,
            name: 'Мраморный чирок',
            species: 'Marmaronetta angustirostris',
            image: 'https://live.staticflickr.com//65535//50107678016_e6c35d3dd2.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YSSHZCSQHE/XC209043-marang.mp3'
        },
        {
            id: 4,
            name: 'Чёрная казарка',
            species: 'Branta bernicla',
            image: 'https://live.staticflickr.com//65535//50224843662_32aa620bcf.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC531381-Bernache%20cravant%20envol.mp3'
        },
        {
            id: 5,
            name: 'Сухонос',
            species: 'Anser cygnoides',
            image: 'https://live.staticflickr.com//65535//50121811772_f37816c508.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC575590-2020.07.13_10.36_01.MP3'
        },
        {
            id: 6,
            name: 'Священный ибис',
            species: 'Threskiornis aethiopicus',
            image: 'https://live.staticflickr.com//65535//50218281918_c36639c8ec.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SGLTZLDXYI/XC309388-sacred%20ibis%20chick.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Чернозобая гагара',
            species: 'Gavia arctica',
            image: 'https://live.staticflickr.com//65535//50215294728_826926e4b8.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/MNQLBOLQFS/XC562634-StorlomS_Bornsj%C3%B6n_Maj2020_200527-085318.mp3'
        },
        {
            id: 2,
            name: 'Смеющийся сокол',
            species: 'Herpetotheres cachinnans',
            image: 'https://live.staticflickr.com//65535//50146886366_4226bc1982.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/JQSYKZHEMB/XC562566-HerpMicraTape27PY.mp3'   
        },
        {
            id: 3,
            name: 'Обыкновенная овсянка',
            species: 'Emberiza citrinella',
            image: 'https://live.staticflickr.com//65535//50225994472_bf623879e0.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/AGCYXCXXSH/XC575926-emb%20cit%2012%208.mp3'   
        },
        {
            id: 4,
            name: 'Дроздовидная кукушка',
            species: 'Morococcyx erythropygus',
            image: 'https://live.staticflickr.com//65535//49257798193_500d82c699.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ODAYZINCOA/XC349938-HON%20Lesser%20Ground-Cuckoo%20songs%200900%20161229%20orig%20NK.mp3'   
        },
        {
            id: 5,
            name: 'Африканский гриф',
            species: 'Gyps africanus',
            image: 'https://live.staticflickr.com//65535//50171988758_58759b8c63.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC300328-LS_59840%20White-backed%20Vulture%20call%20A.mp3'   
        },
        {
            id: 6,
            name: 'Чёрная база',
            species: 'Aviceda leuphotes',
            image: 'https://live.staticflickr.com//65535//49951425757_d1087922a4.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/KDTMIWOGNC/XC565307-a24a.mp3'   
        },
    ],
    [
        {
            id: 1,
            name: 'Глухарь',
            species: 'Tetrao urogallus',
            image: 'https://live.staticflickr.com//65535//50070123313_59a5b981d4.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BPSDQEOJWG/XC554017-%282020-05-02%2004-27%29-LS143782%20-%20kopia.mp3'   
        },
        {
            id: 2,
            name: 'Вальдшнеп',
            species: 'Scolopax rusticola',
            image: 'https://live.staticflickr.com//65535//49988318058_417af7c890.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC575715-Becasse%20des%20bois%20interactions%20en%20vol.mp3'   
        },
        {
            id: 3,
            name: 'Ястребиная сова',
            species: 'Surnia ulula',
            image: 'https://live.staticflickr.com//65535//50105909548_0c5af19924.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/FYLAMAAOPI/XC523753-hokuggla.mp3'   
        },
        {
            id: 4,
            name: 'Удод',
            species: 'Upupa epops',
            image: 'https://live.staticflickr.com//65535//50227490928_4237b78121.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/PZMKYQNLVP/XC577029-U.%20epops%2031.05.2020.mp3'   
        },
        {
            id: 5,
            name: 'Тетерев',
            species: 'Lyrurus tetrix',
            image: 'https://live.staticflickr.com//65535//50070685536_f39997c0c1.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/INCBVJJLBJ/XC549690-Default%20Project.mp3'   
        },
        {
            id: 6,
            name: 'Филин',
            species: 'Bubo bubo',
            image: 'https://live.staticflickr.com//65535//50227026887_8bccc49ffc.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/LLZMVKACMC/XC560239-200509-003_Oehoe6%20Hamert%2009052020_01.mp3'   
        },
    ],
    [
        {
            id: 1,
            name: 'Африканская циккаба',
            species: 'Strix woodfordii',
            image: 'https://live.staticflickr.com//65535//48380215697_aee5209b27.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/IIJAXHKSCC/XC581119-African%20Wood%20Owl%20%28call%29%2020200703%2CNyachisalaForest%2CKakoma%2CNorthwestern%2CZAMBIA_%5B%2Bfieryneckednightjar%5D.mp3'   
        },
        {
            id: 2,
            name: 'Уздечковый трогон',
            species: 'Apaloderma narina',
            image: 'https://live.staticflickr.com//65535//48970170682_25d3aabb2f.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BPJWLCKGXS/XC552559-UFC%20Trogon%20type%20NOV%2020%201990.mp3'   
        },
        {
            id: 3,
            name: 'Африканский широкорот',
            species: 'Eurystomus glaucurus',
            image: 'https://live.staticflickr.com//65535//49904728257_9156a25883.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/XC461565-181230-151110BROAD-BILLED-ROLLER-RUAHA.mp3'   
        },
        {
            id: 4,
            name: 'Карликовый зимородок',
            species: 'Ispidina lecontei',
            image: 'https://live.staticflickr.com//1524//26483774585_850652af43.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BPSDQEOJWG/XC400428-Dwarf%20Kingfisher-lockl%C3%A4te-Ankasa%20NP-%282017-11-08%2014.12%29-LS142613A.mp3'   
        },
        {
            id: 5,
            name: 'Африканский серый ток',
            species: 'Lophoceros nasutus',
            image: 'https://live.staticflickr.com//65535//50184476172_e4b135fd63.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/DNKBTPCMSQ/XC546617-Grey%20Hornbill%20RV%20200414-061553.mp3'   
        },
        {
            id: 6,
            name: 'Белохохлый калао',
            species: 'Horizocerus albocristatus',
            image: 'https://live.staticflickr.com//4895//46147809701_0c8334ffb9.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/DTOKMUUTDG/XC531739-18white_crested_hornbill_A.mp3'   
        },
    ]
]

export default collectionBirds;