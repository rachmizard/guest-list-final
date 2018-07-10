// CARA 1

// $(document).ready(function(){

// 	var rootRef = firebase.database().ref().child("guest");

// 	rootRef.on("child_added", snap => {
// 		var foto = snap.child("foto").val();
// 		var nama = snap.child("nama").val();

// 		$("#retrieve").append('<tr><td><img src='+ foto +' height="100" width="100" ></td><td>'+ nama +'</td></tr>');

// 	});

// 	rootRef.on('child_changed', snap => {
// 	  var updateRef = document.getElementById(snap.key);
// 	  updateRef.innerHTML = snap.val();
// 	});

// 	rootRef.on('child_removed', (snap) => {
// 	  var removeRef = document.getElementById(snap.key);
// 	  removeRef.remove();
// 	});

// });


// CARA 2

// // var info1 = document.getElementById('info1');
// // var info2 = document.getElementById('info2');
// // var hiddenId   = document.getElementById('hiddenId');

// // reviews.addEventListener('submit', (e) => {

// // 	e.preventDefault();

// // 	var id = hiddenId.value || Date.now()

// // 	  db.ref('berita/' + id).set({
// // 	    info1 : info1.value,
// // 	    info2 : info2.value,
// // 	  });

// // 	info1.value = '';
// // 	info2.value = '';

// // });

$('#modalInputan').modal();
$('#modalInputan').modal('open');
$('#modalInputan').addClass('animated tada');

function cobaInputan(){
	$('#modalInputan').modal();
	$('#modalInputan').modal('close');

	Materialize.toast('Memuat halaman...', 1200, 'rounded');
	// checking data if exist or not
	var ref = firebase.database().ref('/'+ document.getElementById('kode').value);
	ref.once("value")
	  .then(function(snapshot) {
	    if (!snapshot.exists()) {
	    	if (confirm('Data guest kosong pada kode ini, lanjut?')) {
	    		alert('Masukan kode '+ document.getElementById('kode').value +' di aplikasi guest list Android mu!');
	    	}else{
	    		alert('Kode di batalkan, silahkan masukan kode yang sudah tersedia.');
	    		location.reload();
	    	}
	    }
	  });
	// retrieving guest list
	var db = firebase.database();
	var retrieve = document.getElementById('retrieve');
	var retrieveRef = db.ref('/'+ document.getElementById('kode').value);
		retrieveRef.on('child_added', (data) => {
		//counting data
		firebase.database().ref('/'+ document.getElementById('kode').value).on("value", function(snapshot) {
		  console.log("There are "+snapshot.numChildren()+" guest");
		});
		  var tr = document.createElement('div');
		  tr.className = "background-primary";
		  tr.id = data.key;
		  tr.innerHTML = reviewTemplateProdi(data.val());
		  retrieve.append(tr);
		  setTimeout(function(){
       		window.scrollTo(0,document.body.scrollHeight);
		  	$(tr).addClass('animated fadeIn');
		  }, 1500)
		});

		retrieveRef.on('child_changed', (data) => {
		  var reviewNode = document.getElementById(data.key);
		  reviewNode.innerHTML = reviewTemplateProdi(data.val());
		});

		retrieveRef.on('child_removed', (data) => {
		  var reviewNode = document.getElementById(data.key);
		  reviewNode.parentNode.removeChild(reviewNode);
		});

	function reviewTemplateProdi({foto, nama, foto1, nama1, status}) {
	  		if (status == 'Single') {
	  			return `
					<header>
					    <div class="head-bg center">
					        <img src='asset/img/brush_screen.png' alt="">
					        <div class="head-text white-text">
					            <p awal>Thank you for coming</p>
					            <p akhir>to our party</p>
					        </div><!--/head text-->
					    </div><!--/.head bg-->
					</header>
					<main>
					    <div class="container-material">
					    <div class="row">
					        <div class="col-sm-12 col-xs-12 center">
					            <div class="con-user solo">
					                <div class="animationmuter"></div><!--/.animation muter-->
					                <div class="con-img">
					                    <img src="${foto}" alt="Augusta Albertus" class="img-con">
					                    <span class="name">${nama}</span><!--/.name-->
					                </div><!--/.conimg-->
					            </div><!--/.conuser-->
					        </div><!--col-->
					    </div><!--/.row-->
					    </div><!--/contanier-->
					</main>
					<footer>
					    <div class="container-material">
					    <div class="row">
					        <div class="col-xs-12 center">
					            <p x-mas>
					                <span class="niik">Jimmy</span>
					                <img src="asset/img/wedding.png" alt="">
					                <span class="niik">Wulan</span>
					            </p>
					        </div><!--/.col-->
					        <div class="col-xs-12 center">
					            <p>
					                <span class="copyright1">Original Concept by : </span>
					                <span class="copyright2">Jimmy Yogaswara | Birutekno inc.</span>
					            </p>
					        </div><!--/.col-->
					    </div><!--/.row-->
					    </div><!--/.container-->
					</footer>
					<!--/STOP REPEAT-->
		  		`
	  		}else if(status = 'Couple')
	  		{
	  			return `
	  				<header>
					    <div class="head-bg center">
					        <img src='asset/img/brush_screen.png' alt="">
					        <div class="head-text">
					            <p awal>Thank you for coming</p>
					            <p akhir>to our party</p>
					        </div><!--/head text-->
					    </div><!--/.head bg-->
					</header>
					<main>
					    <div class="container-material">
						    <div class="row">
						        <div class="col-sm-4 col-xs-4 center">
						            <div class="con-user">
						                <div class="animationmuter"></div><!--/.animation muter-->
						                <div class="con-img">
						                    <img src="${foto}" alt="${nama}" class="img-con">
						                    <span class="name">Mr. ${nama}</span><!--/.name-->
						                </div><!--/.conimg-->
						            </div><!--/.conuser-->
						        </div><!--col-->
						        <div class="col-sm-4 col-xs-4 center">
						            <h1 codename>&amp;</h1>
						        </div><!--col-->
						        <div class="col-sm-4 col-xs-4 center">
						            <div class="con-user">
						                <div class="animationmuter"></div><!--/.animation muter-->
						                <div class="con-img">
						                    <img src="${foto1}" alt="${nama1}" class="img-con">
						                     <span class="name">Mrs. ${nama1}</span><!--/.name-->
						                </div><!--/.conimg-->
						               
						            </div><!--/.conuser-->
						        </div><!--col-->
						    </div><!--/.row-->
					    </div><!--/.container-->
					
					<footer>
					    <div class="container-material">
					    <div class="row">
					        <div class="col-xs-12 center">
					            <p x-mas>
					                <span class="niik">Jimmy</span>
					                <img src="asset/img/wedding.png" alt="">
					                <span class="niik">Wulan</span>
					            </p>
					        </div><!--/.col-->
					        <div class="col-xs-12 center">
					            <p>
					                <span class="copyright1">Original Concept by : </span>
					                <span class="copyright2">Jimmy Yogaswara | Birutekno inc.</span>
					            </p>
					        </div><!--/.col-->
					    </div><!--/.row-->
					    </div><!--/.container-->
					</footer>
					<!--/STOP REPEAT-->
					<!--/STOP REPEAT-->
	  			`
	  		}
	};	
}
