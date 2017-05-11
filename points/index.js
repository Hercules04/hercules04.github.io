// JavaScript Document


subject = ['English ', 'Maths (NUMBERS N STUFF) ' , 'French ', 'German ', 'Irish ', 'History ', 'Religion ', 'Physics ', 'Chemistry (POTIONS) ','Italian (I MAKE A A PIZZA) ','Spanish (I-I-I) ','Business Studies ','Economics (FAKE NEWS) ','Accounting ','Design and Communications Graphics (DRAW) ','Classical Studies (STORYTIME) ','Latin ','Art ','Music ','Agricultural Science (FARMING) ','Biology ','Applied Maths (NERD!) ','Geography (YEAH THE GROUND IS COOL) ','Chinese ','Japanese '];
ns = subject.length;

function showSubjects(){
		subjectList = '';
		for (c = 0; c< ns; ++c){
		
			subjectList +=  '<span class="subject"><input type="checkbox" id="checkbox'  + c +  '"></span>' + subject[c] +'<br>';
	}
			
		document.getElementById("subjects").innerHTML = subjectList;
		
}

function showGrades(){
	gradeList = '';
	for (c = 0; c< ns; ++c){
		if (document.getElementById("checkbox"+c).checked){
			gradeList += "<div>" + subject[c];
			gradeList += '<label><input type="radio" name="points' +  c  + '" value="100">H1 </label>';
			gradeList += '<label><input type="radio" name="points' +  c  + '" value="88">H2 </label>';
			gradeList += '<label><input type="radio" name="points' +  c  + '" value="77">H3 </label>';
			gradeList += '<label><input type="radio" name="points' +  c  + '" value="66">H4 </label>';
			gradeList += '<label><input type="radio" name="points' +  c  + '" value="56">H5 </label>';
			gradeList += '<label><input type="radio" name="points' +  c  + '" value="46">H6 </label>';
			gradeList += '<label><input type="radio" name="points' +  c  + '" value="37">H7 </label>';
			gradeList += '<label><input type="radio" name="points' +  c  + ' " value="0">H8 </label>';
	  		gradeList += "</div>";
		}
	}
	document.getElementById("grades").innerHTML = gradeList;
}


function calcPoints(){
	total=0;
	for (c = 0; c< ns; ++c){
		if (document.getElementById("checkbox"+c).checked){
		radios = document.getElementsByName('points' + c);
			for (d = 0; d < radios.length; ++d){
				if (radios[d].checked){
					total += +radios[d].value;
				}
			}
		}
	}
	document.getElementById('got').value = total;
//	alert(total);
	
}