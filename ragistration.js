		 enroll=1011
		 student_data=JSON.parse(window.localStorage.getItem('Data'))||[];
		  keys=['enroll','name','college','year','email','pass','cpass','today','phone','pay','course',
		  'degree'];
		   Users={};
		 (
		 	function(){
		 		updateEnrollNo();
		 		tableshow();
		 	}
		 )();
		function register(){
		 
		  inputs=['#enroll','#name','#college','#year','#email','#pass','#cpass','#today','#phone','#pay',
		  '#course','#degree'];

		  inputs.forEach((data,index)=>{
		  		if(index==0)
		  		{
		  			Users[keys[index]]=gernarageRollNo(student_data);
		  		}
		  		else
		  		{
		  			Users[keys[index]]=$(data).value
		  		}
		  })
		  student_data.push(Users)
		  window.localStorage.setItem('Data',JSON.stringify(student_data))

		  inputs.forEach((data)=>{
		  		$(data).value="";
		  })
		  updateEnrollNo();
		  tableshow();

		}
         
		function tableshow()
		{
			res="";
			student_data.forEach((data,index)=>{
                res+=`<tr>
                	<td>${index+1}</td>
                	<td>${data.enroll}</td>
                	<td>${data.name}</td>
                	<td>${data.email}</td>
                	<td>${data.college}</td>
                	<td>${data.phone}</td>
                	<td>${(data.course=='sT')?"Summer Traning":"Industrial Traning"}</td>
                	<td>${data.degree}</td>
                	<td>${data.year}</td>
                	<td>${data.today}</td>
                	<td>${data.pay}</td>
                	<td><img src='${data.pic}' height='30px' width='30px'/></td>
                	<td><a href='javascript:handleEdit(${index})' class="btn btn-warning btn-sm" style='text-decoration:none;'>Edit</a>
                	<a href='javascript:handleDelete(${index})' class="btn btn-danger btn-sm" style='text-decoration:none;'>Delete</a></td>
                </tr>`;
			})
			//console.log(res);
			document.querySelector("#table_data").innerHTML=res;

		}

		function gernarageRollNo(student_data)
		{
				if(student_data.length>0)
				{
					MaxIndex=student_data.length-1
					return Number(student_data[MaxIndex].enroll)+1
				}
				return enroll;
		}
	function updateEnrollNo(){
		if(student_data.length>0)
				{
					MaxIndex=student_data.length-1
				 $('#enroll').value=Number(student_data[MaxIndex].enroll)+1
				}else{
					$('#enroll').value=enroll;
				}
	}

	function handleDelete(index){
		if(window.confirm("do you want to delete")){
             student_data.splice(index,1);
             	window.localStorage.setItem('Data',JSON.stringify(student_data));
             	tableshow()
		}
	}
	function handleEdit(index){
		keys.forEach((data,ind)=>{
				var inputs="#"+data;
				$(inputs).value=student_data[index][data];
		})
		$("#submit").style.display="none";
		$("#update").style.display="block";
		$("#index").value=index;
	}
	function updatedata(){
	    index=$("#index").value;
	    student_data[index].name=$("#name").value
	    student_data[index].email=$("#email").value
	    student_data[index].pass=$("#pass").value
	    student_data[index].cpass=$("#cpass").value
	    student_data[index].pay=$("#pay").value
	    student_data[index].degree=$("#degree").value
	    student_data[index].course=$("#course").value
	    student_data[index].phone=$("#phone").value
	    student_data[index].college=$("#college").value
	    student_data[index].year=$("#year").value
	    student_data[index].today=$("#today").value
	    window.localStorage.setItem('Data',JSON.stringify(student_data));
	    window.location.reload();
	    tableshow()
	}

	function searchdata(x)
	{
		res="";
			student_data.forEach((data,index)=>{
                if(data.name.includes(x.value)==true){
                	res+=`<tr>
                	<td>${index+1}</td>
                	<td>${data.enroll}</td>
                	<td>${data.name}</td>
                	<td>${data.email}</td>
                	<td>${data.college}</td>
                	<td>${data.phone}</td>
                	<td>${(data.course=='sT')?"Summer Traning":"Industrial Traning"}</td>
                	<td>${data.degree}</td>
                	<td>${data.year}</td>
                	<td>${data.today}</td>
                	<td>${data.pay}</td>
                	<td><img src='${data.pic}' height='30px' width='30px'/></td>
                	<td><a href='javascript:handleEdit(${index})' class="btn btn-warning btn-sm" style='text-decoration:none;'>Edit</a>
                	<a href='javascript:handleDelete(${index})' class="btn btn-danger btn-sm" style='text-decoration:none;'>Delete</a></td>
                </tr>`;
                }
		})
			document.querySelector("#table_data").innerHTML=res;
	}

	function uploadpic(x)
	{
		//console.log(x.files[0])
	 var reader=new FileReader();
        reader.addEventListener('load',function(){
             Users.pic=reader.result;
        })
        reader.readAsDataURL(x.files[0]);
	}


		var v=new Date();
		res=`${v.getDate()} / ${v.getMonth()+1} / ${v.getFullYear()}`;
		document.getElementById('today').value=res;
	let demo1=(x)=>
	{
		var p=document.querySelector("#pay");
		if(x.value=="WT")
			p.value=2000;
		else if(x.value=="ST")
			p.value=3000;
		else if(x.value=="VT")
			p.value=4000;
		else if(x.value=="sT")
			p.value=5000;
		else if(x.value=="App")
			p.value=6000;
		else if(x.value=="wT")
			p.value=7000;
		else if(x.value=="O")
			alert("please select another filed");
        else if(x.value=="JS")
			p.value=5000;
	}
	let demo3=()=>
	{
		var pass=document.querySelector("#pass");
		var cpass=document.querySelector("#cpass");
		if(pass.value==cpass.value)
		{
			pass.style.border="2px solid green";
			cpass.style.border="2px solid green";
			pass.style.color="green";
			cpass.style.color="green";

		}
		else
		{
			pass.style.border="2px solid red";
			cpass.style.border="2px solid red";
			pass.style.color="red";
			cpass.style.color="red";
		}
	}



	function handleData()
	{
			event.preventDefault();
	}



	function $(element){
		return document.querySelector(element);
	}