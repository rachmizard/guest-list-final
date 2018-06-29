var ref = firebase.database().ref("ratings/");
var makanan1 = 0.0;
var makanan2 = 0.0;
var makanan3 = 0.0;
var makanan4 = 0.0;
var makanan5 = 0.0;
var music1 = 0.0;
var music2 = 0.0;
var music3 = 0.0;
var music4 = 0.0;
var music5 = 0.0;
var pelayanan1 = 0.0;
var pelayanan2 = 0.0;
var pelayanan3 = 0.0;
var pelayanan4 = 0.0;
var pelayanan5 = 0.0;
var dekorasi1 = 0.0;
var dekorasi2 = 0.0;
var dekorasi3 = 0.0;
var dekorasi4 = 0.0;
var dekorasi5 = 0.0;

  var query = firebase.database().ref("ratings/").orderByChild("makanan");
   query.once('value', function(snapshotEuy){
        if (snapshotEuy.val().makanan) {
                console.log("There are "+snapshotEuy.numC()+" ratingers");
        }
    });
ref.once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot){
          var key = childSnapshot.key;
            if (childSnapshot.val().makanan == '1') {
                makanan1++;
            }else if (childSnapshot.val().makanan == '2') {
                makanan2++;
            }else if (childSnapshot.val().makanan == '3') {
                makanan3++;
            }else if (childSnapshot.val().makanan == '4') {
                makanan4++;
            }else if (childSnapshot.val().makanan == '5') {
                makanan5++;
            }

            if (childSnapshot.val().music == '1') {
                music1++;
            }else if (childSnapshot.val().music == '2') {
                music2++;
            }else if (childSnapshot.val().music == '3') {
                music3++;
            }else if (childSnapshot.val().music == '4') {
                music4++;
            }else if (childSnapshot.val().music == '5') {
                music5++;
            }

            if (childSnapshot.val().pelayanan == '1') {
                pelayanan1++;
            }else if (childSnapshot.val().pelayanan == '2') {
                pelayanan2++;
            }else if (childSnapshot.val().pelayanan == '3') {
                pelayanan3++;
            }else if (childSnapshot.val().pelayanan == '4') {
                pelayanan4++;
            }else if (childSnapshot.val().pelayanan == '5') {
                pelayanan5++;
            }

            if (childSnapshot.val().dekorasi == '1') {
                dekorasi1++;
            }else if (childSnapshot.val().dekorasi == '2') {
                dekorasi2++;
            }else if (childSnapshot.val().dekorasi == '3') {
                dekorasi3++;
            }else if (childSnapshot.val().dekorasi == '4') {
                dekorasi4++;
            }else if (childSnapshot.val().dekorasi == '5') {
                dekorasi5++;
            }
    });
          
            // makanan = nummakanan += parseInt(childSnapshot.val().makanan);
            
            // makanan = nummakanan += parseInt(childSnapshot.val().makanan);
            // music = nummusic += parseInt(childSnapshot.val().music);
            // pelayanan = numpelayanan += parseInt(childSnapshot.val().pelayanan);
            // dekorasi = numdekorasi += parseInt(childSnapshot.val().dekorasi);
            // console.log(makanan1);


$('.chart').segbar([
    /*MAKANAN*/
    {
        data: [
            {  title: 'Sangat Kurang', value: makanan1, color: '#e60000'  },
            {  title: 'Kurang', value: makanan2 },
            {  title: 'Cukup', value: makanan3 },
            {  title: 'Baik', value: makanan4 },
            {  title: 'Sangat Baik', value: makanan5 }
        ]
    }
]).addClass('mb-5');

$('.chart2').segbar([
    /*MUSIC*/
    {
        data: [
            {  title: 'Sangat Kurang', value: music1, color: '#e60000'  },
            {  title: 'Kurang', value: music2 },
            {  title: 'Cukup', value: music3 },
            {  title: 'Baik', value: music4 },
            {  title: 'Sangat Baik', value: music5 }
        ]
    }
]).addClass('mb-5');


$('.chart3').segbar([
    /*DEKORASI*/
    {
        data: [
            {  title: 'Sangat Kurang', value: dekorasi1,  color: '#e60000'  },
            {  title: 'Kurang', value: dekorasi2 },
            {  title: 'Cukup', value: dekorasi3 },
            {  title: 'Baik', value: dekorasi4 },
            {  title: 'Sangat Baik', value: dekorasi5 }
        ]
    }
]).addClass('mb-5');


$('.chart4').segbar([
    /*DEKORASI*/
    {
        data: [
            {  title: 'Sangat Kurang', value: pelayanan1,  color: '#e60000'  },
            {  title: 'Kurang', value: pelayanan2 },
            {  title: 'Cukup', value: pelayanan3 },
            {  title: 'Baik', value: pelayanan4 },
            {  title: 'Sangat Baik', value: pelayanan5 }
        ]
    }
]).addClass('mb-5');

});

