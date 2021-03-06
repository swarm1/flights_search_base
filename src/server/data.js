module.exports = {
    people: getPeople(),
    cities: getCities(),
    flights: getFlights()
};

function getPeople() {
    return [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Papa",
            "age": 25,
            "location": "Florida"
        },
        {
            "id": 2,
            "firstName": "Ward",
            "lastName": "Bell",
            "age": 31,
            "location": "California"
        },
        {
            "id": 3,
            "firstName": "Colleen",
            "lastName": "Jones",
            "age": 21,
            "location": "New York"
        },
        {
            "id": 4,
            "firstName": "Madelyn",
            "lastName": "Green",
            "age": 18,
            "location": "North Dakota"
        },
        {
            "id": 5,
            "firstName": "Ella",
            "lastName": "Jobs",
            "age": 18,
            "location": "South Dakota"
        },
        {
            "id": 6,
            "firstName": "Landon",
            "lastName": "Gates",
            "age": 11,
            "location": "South Carolina"
        },
        {
            "id": 7,
            "firstName": "Haley",
            "lastName": "Guthrie",
            "age": 35,
            "location": "Wyoming"
        },
        {
            "id": 8,
            "firstName": "Aaron",
            "lastName": "Jinglehiemer",
            "age": 22,
            "location": "Utah"
        }
    ];
}
function getCities() {
    return [
        {
            "id": 1,
            "title": "Stuttgart"
        },
        {
            "id": 2,
            "title": "London"
        },
        {
            "id": 3,
            "title": "New York"
        },
        {
            "id": 4,
            "title": "Zambia"
        }
    ]
}
function getFlights() {
    return [
        {
            "_id": "5641d18a375021f8cb5d9182",
            "from_city_id": 4,
            "to_city_id": 2,
            "title": "Rayair",
            "time": "6:20 PM",
            "duration": "2h 7m",
            "price": 3361
        },
        {
            "_id": "5641d18ad2b78b88868d3654",
            "from_city_id": 2,
            "to_city_id": 4,
            "title": "BlueSky",
            "time": "9:54 PM",
            "duration": "3h 39m",
            "price": 4602
        },
        {
            "_id": "5641d18a828324b5f03521f7",
            "from_city_id": 2,
            "to_city_id": 1,
            "title": "Lufthansa",
            "time": "19:54 PM",
            "duration": "5h 49m",
            "price": 2802
        },
        {
            "_id": "5641d18a7a431aea5e76dce1",
            "from_city_id": 1,
            "to_city_id": 4,
            "title": "LOT",
            "time": "23:1 AM",
            "duration": "5h 0m",
            "price": 2244
        },
        {
            "_id": "5641d18a4a7a078fde6ab88c",
            "from_city_id": 3,
            "to_city_id": 1,
            "title": "Onet",
            "time": "10:27 AM",
            "duration": "3h 53m",
            "price": 5044
        },
        {
            "_id": "5641d18a3d3eed090d705d20",
            "from_city_id": 2,
            "to_city_id": 3,
            "title": "KingFisher",
            "time": "13:33 AM",
            "duration": "2h 9m",
            "price": 2196
        },
        {
            "_id": "5641d18af7be89948a7a8d64",
            "from_city_id": 4,
            "to_city_id": 1,
            "title": "Blue Sky",
            "time": "11:57 AM",
            "duration": "8h 18m",
            "price": 7339
        },
        {
            "_id": "5641d18a09f6035a5ca13133",
            "from_city_id": 2,
            "to_city_id": 3,
            "title": "SpiceJet",
            "time": "14:54 PM",
            "duration": "4h 47m",
            "price": 4408
        },
        {
            "_id": "5641d18ab7deceb4125b64d2",
            "from_city_id": 2,
            "to_city_id": 4,
            "title": "Blue Sky",
            "time": "16:23 AM",
            "duration": "6h 25m",
            "price": 7021
        },
        {
            "_id": "5641d18a73abe58dfe8b2f1f",
            "from_city_id": 2,
            "to_city_id": 1,
            "title": "Air",
            "time": "10:39 PM",
            "duration": "3h 41m",
            "price": 4958
        },
        {
            "_id": "5641d18ae2dbcab537307646",
            "from_city_id": 3,
            "to_city_id": 3,
            "title": "Sky Plane",
            "time": "0:19 AM",
            "duration": "5h 47m",
            "price": 2300
        },
        {
            "_id": "5641d18a2eb43a5317f76e18",
            "from_city_id": 3,
            "to_city_id": 1,
            "title": "Sky Plane",
            "time": "14:0 PM",
            "duration": "5h 50m",
            "price": 3524
        },
        {
            "_id": "5641d18ae272b88828a165ac",
            "from_city_id": 1,
            "to_city_id": 2,
            "title": "Air",
            "time": "10:24 PM",
            "duration": "8h 26m",
            "price": 5561
        },
        {
            "_id": "5641d18aa249f6b6f2b0c261",
            "from_city_id": 1,
            "to_city_id": 1,
            "title": "Echo",
            "time": "3:2 AM",
            "duration": "3h 49m",
            "price": 4048
        },
        {
            "_id": "5641d18aaa6a838a13ff44f8",
            "from_city_id": 1,
            "to_city_id": 4,
            "title": "FuftHansa",
            "time": "22:17 AM",
            "duration": "4h 17m",
            "price": 7365
        },
        {
            "_id": "5641d18a5ccfe93700efb6b9",
            "from_city_id": 3,
            "to_city_id": 3,
            "title": "Lot",
            "time": "19:35 PM",
            "duration": "8h 24m",
            "price": 3382
        },
        {
            "_id": "5641d18ad411d93a9a85a75d",
            "from_city_id": 4,
            "to_city_id": 3,
            "title": "Insola",
            "time": "19:19 AM",
            "duration": "4h 11m",
            "price": 3784
        },
        {
            "_id": "5641d18a988c649b2b400509",
            "from_city_id": 2,
            "to_city_id": 3,
            "title": "Insola",
            "time": "1:11 PM",
            "duration": "8h 19m",
            "price": 5785
        },
        {
            "_id": "5641d18aef3f529770354e05",
            "from_city_id": 2,
            "to_city_id": 2,
            "title": "Blue",
            "time": "15:59 AM",
            "duration": "4h 59m",
            "price": 5767
        },
        {
            "_id": "5641d18aabd560946d96b3a1",
            "from_city_id": 4,
            "to_city_id": 1,
            "title": "KingFisher",
            "time": "7:1 AM",
            "duration": "8h 16m",
            "price": 6483
        },
        {
            "_id": "5641d18ad7d3f45f23a93909",
            "from_city_id": 1,
            "to_city_id": 1,
            "title": "Blue",
            "time": "13:50 PM",
            "duration": "8h 10m",
            "price": 3244
        },
        {
            "_id": "5641d18a70d9c06ea2fd519a",
            "from_city_id": 1,
            "to_city_id": 4,
            "title": "Hansa",
            "time": "20:38 PM",
            "duration": "6h 19m",
            "price": 7645
        },
        {
            "_id": "5641d18a82d8b3705e55020b",
            "from_city_id": 4,
            "to_city_id": 3,
            "title": "Lufthansa",
            "time": "0:4 AM",
            "duration": "6h 1m",
            "price": 3534
        },
        {
            "_id": "5641d18a045522f560435ca8",
            "from_city_id": 3,
            "to_city_id": 4,
            "title": "Lot",
            "time": "7:42 AM",
            "duration": "4h 6m",
            "price": 6397
        },
        {
            "_id": "5641d18aab78191d0d7d0461",
            "from_city_id": 4,
            "to_city_id": 2,
            "title": "Lotto",
            "time": "6:57 PM",
            "duration": "6h 51m",
            "price": 6858
        },
        {
            "_id": "5641d18abb5229826a075ab8",
            "from_city_id": 1,
            "to_city_id": 2,
            "title": "KingFisher",
            "time": "13:18 PM",
            "duration": "5h 19m",
            "price": 2940
        },
        {
            "_id": "5641d18a6c042a1662089bac",
            "from_city_id": 1,
            "to_city_id": 1,
            "title": "Lotto",
            "time": "12:44 PM",
            "duration": "3h 14m",
            "price": 5844
        },
        {
            "_id": "5641d18af4c8d5a29e9eef1c",
            "from_city_id": 3,
            "to_city_id": 4,
            "title": "Lot",
            "time": "1:3 AM",
            "duration": "3h 41m",
            "price": 6783
        },
        {
            "_id": "5641d18a103be045616f316b",
            "from_city_id": 1,
            "to_city_id": 3,
            "title": "KingFisher",
            "time": "7:26 PM",
            "duration": "3h 37m",
            "price": 4438
        },
        {
            "_id": "5641d18af75c28faafb17432",
            "from_city_id": 2,
            "to_city_id": 2,
            "title": "Lot",
            "time": "23:5 PM",
            "duration": "5h 57m",
            "price": 5631
        },
        {
            "_id": "5641d18a8508b6598628e9d2",
            "from_city_id": 4,
            "to_city_id": 3,
            "title": "Lot",
            "time": "6:35 AM",
            "duration": "4h 29m",
            "price": 7367
        },
        {
            "_id": "5641d18aeb21d374e955a57d",
            "from_city_id": 2,
            "to_city_id": 4,
            "title": "Bla",
            "time": "19:33 AM",
            "duration": "3h 39m",
            "price": 2578
        },
        {
            "_id": "5641d18af2c400d272931d14",
            "from_city_id": 3,
            "to_city_id": 4,
            "title": "IndiGo",
            "time": "7:52 AM",
            "duration": "8h 50m",
            "price": 4686
        },
        {
            "_id": "5641d18a61ee17f5c6934110",
            "from_city_id": 2,
            "to_city_id": 2,
            "title": "Bla",
            "time": "7:11 AM",
            "duration": "7h 21m",
            "price": 4144
        },
        {
            "_id": "5641d18af0748c4ec8ebffcf",
            "from_city_id": 1,
            "to_city_id": 2,
            "title": "Hansa",
            "time": "15:0 PM",
            "duration": "7h 16m",
            "price": 3753
        },
        {
            "_id": "5641d18aa8b3e3e984d626ad",
            "from_city_id": 3,
            "to_city_id": 3,
            "title": "Hansa",
            "time": "10:33 AM",
            "duration": "5h 42m",
            "price": 2378
        },
        {
            "_id": "5641d18aba2cb65aedccf52e",
            "from_city_id": 1,
            "to_city_id": 1,
            "title": "Hansa",
            "time": "21:25 PM",
            "duration": "8h 23m",
            "price": 6725
        },
        {
            "_id": "5641d18ad917f02c16f31267",
            "from_city_id": 1,
            "to_city_id": 2,
            "title": "Hansa",
            "time": "14:38 AM",
            "duration": "4h 53m",
            "price": 6276
        },
        {
            "_id": "5641d18a63063875d48eeee3",
            "from_city_id": 3,
            "to_city_id": 1,
            "title": "Hansa",
            "time": "3:55 PM",
            "duration": "8h 21m",
            "price": 6856
        },
        {
            "_id": "5641d18a624ebeebacfa35f6",
            "from_city_id": 2,
            "to_city_id": 4,
            "title": "Hansa",
            "time": "0:50 PM",
            "duration": "3h 27m",
            "price": 7058
        },
        {
            "_id": "5641d18a78bea6003504d86c",
            "from_city_id": 2,
            "to_city_id": 4,
            "title": "Hansa",
            "time": "1:15 PM",
            "duration": "2h 34m",
            "price": 3902
        },
        {
            "_id": "5641d18a688f39cf9dfc11fb",
            "from_city_id": 1,
            "to_city_id": 4,
            "title": "Hansa",
            "time": "6:55 PM",
            "duration": "2h 15m",
            "price": 3793
        },
        {
            "_id": "5641d18a71b059d6789f9492",
            "from_city_id": 2,
            "to_city_id": 4,
            "title": "Lufthansa",
            "time": "3:23 AM",
            "duration": "5h 10m",
            "price": 5739
        }
    ]
}
