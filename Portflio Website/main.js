// Firebase configuration
	  var config = {
	    apiKey: "AIzaSyAvAsk9t3bvNAKpJ4karihsfrxxzYaQPf8",
        authDomain: "project-christmas-38c3d.firebaseapp.com",
        databaseURL: "https://project-christmas-38c3d.firebaseio.com",
        projectId: "project-christmas-38c3d",
        storageBucket: "project-christmas-38c3d.appspot.com",
        messagingSenderId: "154318474634",
        appId: "1:154318474634:web:141f3f548b3b764cb4cc73"
	  };
 // Initialize Firebase
  		firebase.initializeApp(config);

//Reference messages collection
		var messagesRef = firebase.database().ref("messages")

 
// Listen for form submit 
		document.getElementById('contactForm').addEventListener('submit', submitForm);


// submit form 
		function submitForm(e){
			e.preventDefault();
			
	
//Get values

	 	var fname = getInputVal('fname');
	 	var lname = getInputVal('lname');
         var email = getInputVal('email');
         var country= getInputVal('country');
	 	var message = getInputVal('message');

// Save message 	
 		saveMessage(fname, lname, country, email, message)


 // Clear form
  document.getElementById('contactForm').reset();

 }



//Function to get form values
		function getInputVal(id){
			return document.getElementById(id).value;

	}



// Save message to firebase
		function saveMessage(fname, lname, email, country, message){
			var newMessageRef = messagesRef.push();
			newMessageRef.set({
				fname: fname,
                lname: lname,
                country:country,
				email: email,
				message:message

			});
		 }
