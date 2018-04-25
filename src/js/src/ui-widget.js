// Default Data - Used to populate in the form
var qewd = $.parseJSON(`{
	"personalnotes": {
		"author": "Dr Tony Shannon",
		"dateCreated": 1456287062000,
		"noteType": "Generic Plugin",
		"source": "ethercis",
		"sourceId": "23dbda9d-7688-426c-8cb8-312a4f351071"
	},
	"orders": {
		"name": "Cardiac-ECG",
		"orderDate": 1458738936944,
		"source": "ethercis",
		"sourceId": "23dbda9d-7688-426c-8cb8-312a4f351071"
	},
	"events": {
		"dateCreated": 1494586220000,
		"dateTime": 1494496220958,
		"description": "Needs nursing and supervisory care",
		"name": "Discharge to care home",
		"source": "ethercis",
		"sourceId": "93ac376d-3ff4-4e0b-b080-47eb3fe81750",
		"type": "Admission",
		"typeMultiple": "Admission"
	},
	"testresults": {
		"dateCreated":1427004662000,
		"sampleTaken":1426889462518,
		"source":"ethercis",
		"sourceId":"810272ac-28e8-4928-b61b-79dcef4b4170",
		"testName":"Example Name"
	},
	"procedures": {
		"date":1436969493829,
		"name":"total replacement of hip",
		"source":"ethercis",
		"sourceId":"fa7408c3-7d69-4f50-84ac-cbf735a0ab18",
		"time":54693829
	},
	"vaccinations": {
		"dateCreated":1356149462000,
		"source":"ethercis",
		"sourceId":"3e13f196-2334-41b6-b788-660464e7436a",
		"vaccinationName":"Influenza"
	},
	"referrals": {
		"dateOfReferral":1458792662000,
		"referralFrom":"Tony Shannon",
		"referralTo":"Ripplefields Optometry service",
		"source":"ethercis",
		"sourceId":"94133578-f505-4e76-b4ed-762462508801"
	},
	"mdt": {
		"dateOfMeeting":1455062400000,
		"dateOfRequest":1458739933006,
		"serviceTeam":"",
		"source":"marand",
		"sourceId":"5836b208-160f-4925-b2b1-a26626432940"
	}

}`);

var schemas = $.parseJSON(`{
	"personalnotes": {
		"title": "Personal Notes",
		"fields": [
			{
				"name": "author",
				"type": "textBox",
				"label": "Author"
			},
			{
				"name": "dateCreated",
				"type": "calendarBox",
				"label": "Date Created"
			},
			{
				"name": "noteType",
				"type": "textArea",
				"label": "Note Type"
			},
			{
				"name": "source",
				"type": "readOnly",
				"label": "Source"
			}
		]
	},
	"orders": {
		"title": "Orders",
		"fields": [
			{
				"name": "name",
				"type": "textBox",
				"label": "Name"
			},
			{
				"name": "orderDate",
				"type": "calendarBox",
				"label": "Order Created"
			},
			{
				"name": "source",
				"type": "readOnly",
				"label": "Source"
			}
		]
	},
	"events": {
		"title": "Events",
		"fields": [
			{
				"name": "dateCreated",
				"type": "calendarBox",
				"label": "Date Created"
			},
			{
				"name": "dateTime",
				"type": "textBox",
				"label": "Time"
			},
			{
				"name": "description",
				"type": "textArea",
				"label": "Description"
			},
			{
				"name": "name",
				"type": "textBox",
				"label": "Name"
			},
			{
				"name": "source",
				"type": "readOnly",
				"label": "Source"
			},
			{
				"name": "type",
				"type": "selectBox",
				"label": "Type (Singular Select)",
				"options": {
					"Appointment": "Appointment",
					"Admission": "Admission",
					"Transfer": "Transfer",
					"Discharge": "Discharge"
				},
				"chosen": "true",
				"multiple": "false"
			},
			{
				"name": "typeMultiple",
				"type": "selectBox",
				"label": "Type (Multiple Select)",
				"options": {
					"Appointment": "Appointment",
					"Admission": "Admission",
					"Transfer": "Transfer",
					"Discharge": "Discharge"
				},
				"chosen": "true",
				"multiple": "true"
			}
		]
	},
	"testresults": {
		"title": "Test Results",
		"fields": [
			{
				"name": "dateCreated",
				"type": "calendarBox",
				"label": "Date Created"
			},
			{
				"name": "sampleTaken",
				"type": "calendarBox",
				"label": "Sample Taken"
			},
			{
				"name": "testName",
				"type": "textBox",
				"label": "Test Name"
			},
			{
				"name": "source",
				"type": "readOnly",
				"label": "Source"
			}
		]
	},
	"procedures": {
		"title": "Procedures",
		"fields": [
			{
				"name": "date",
				"type": "calendarBox",
				"label": "Date Created"
			},
			{
				"name": "name",
				"type": "textBox",
				"label": "Sample Taken"
			},
			{
				"name": "time",
				"type": "calendarBox",
				"label": "Test Name"
			},
			{
				"name": "source",
				"type": "readOnly",
				"label": "Source"
			}
		]
	},
	"vaccinations": {
		"title": "Vaccinations",
		"fields": [
			{
				"name": "dateCreated",
				"type": "calendarBox",
				"label": "Date Created"
			},
			{
				"name": "vaccinationName",
				"type": "textBox",
				"label": "Vaccination Name"
			},
			{
				"name": "source",
				"type": "readOnly",
				"label": "Source"
			}
		]
	},
	"referrals": {
		"title": "Refarrals",
		"fields": [
			{
				"name": "dateOfReferral",
				"type": "calendarBox",
				"label": "Date of Referral"
			},
			{
				"name": "referralFrom",
				"type": "textBox",
				"label": "Referral From"
			},
			{
				"name": "referralTo",
				"type": "textBox",
				"label": "Referral To"
			},
			{
				"name": "source",
				"type": "readOnly",
				"label": "Source"
			}
		]
	},
	"mdt": {
		"title": "MDT",
		"fields": [
			{
				"name": "dateOfMeeting",
				"type": "calendarBox",
				"label": "Date of Meeting"
			},
			{
				"name": "dateOfRequest",
				"type": "calendarBox",
				"label": "Date of Request"
			},
			{
				"name": "serviceTeam",
				"type": "textBox",
				"label": "Service Team"
			},
			{
				"name": "source",
				"type": "readOnly",
				"label": "Source"
			}
		]
	}
}`);

var templates = {
	
	read: {
		textArea: `
		<div class="form-group">
			<label for="schema">{{label}}</label>
			<pre>{{value}}</pre>
		</div>
		`,
		
		textBox: `
		<div class="form-group">
			<label for="schema">{{label}}</label>
			<p>{{value}}</p>
		</div>
		`,
		
		calendarBox: `
		<div class="form-group">
			<label for="schema">{{label}}</label>
			<p>{{value}}</p>
		</div>
		`,
		
		readOnly: `
		<div class="form-group">
			<label for="schema">{{label}}</label>
			<p>{{value}}</p>
		</div>
		`,
		
		selectBox: `
		<div class="form-group">
			<label for="schema">{{label}}</label>
			<p>{{value}}</p>
		</div>
		`
	},
	
	edit: {
		textArea: `
		<div class="form-group">
			<label for="schema">{{label}}</label>
			<textarea class="form-control" id="{{name}}" rows="3">{{value}}</textarea>
		</div>
		`,
		
		textBox: `
		<div class="form-group">
			<label for="schema">{{label}}</label>
			<input class="form-control" id="{{name}}" name="{{name}}" value="{{value}}" />
		</div>
		`,
		
		calendarBox: `
		<div class="form-group">
			<label for="basic-url">{{label}}</label>
			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text" id="{{name}}-addon"><i class="fa fa-calendar"></i></span>
				</div>
				<input type="text" class="form-control" id="{{name}}" aria-describedby="{{name}}-addon" value="{{value}}">
			</div>
		</div>
		`,
		
		readOnly: `
		<div class="form-group">
			<label for="schema">{{label}}</label>
			<input class="form-control" id="{{name}}" name="{{name}}" value="{{value}}" readonly="readonly" />
		</div>
		`,
		
		selectBox: `
		<div class="form-group">
			<label for="schema">{{label}}</label>
			<select id="{{name}}" name="{{name}}" data-value="{{value}}" class="form-control chosen-select" {{multiple}}>
				{{options}}
			</select>
		</div>
		`
	}
	
	
}

$(document).ready(function(){
	
	if( qewd && schemas ){
		
		// Init
		setSchema();
		$('#page').hide();
		
		// Change Module / Schema
		$('#module').change(function(e){
			setSchema();
		});
		
		// Build Views
		$('#build-edit').click(function(e){
			e.preventDefault();
			renderView('edit');
		});
		
		$('#build-read').click(function(e){
			e.preventDefault();
			renderView('read');
		});
		
	} else {
		alert('Global JSON Error');
	}
	
});


function setSchema(){
	var module = $('#module option:selected').val();
	
	// Populate
	$('#qewd').val( JSON.stringify(qewd[module], null, 2) );
	$('#schema').val( JSON.stringify(schemas[module], null, 2) );
	
	$('#page').hide();
	$('#htmlOutput').html($('#view-' + module).html() );
}


function renderView(method){
	
	var qewdJson = $.parseJSON($('#qewd').val());
	var schemaJson = $.parseJSON($('#schema').val());
	
	if( qewdJson && schemaJson ){
		
		var module = $('#module option:selected').val();
		
		// Pull the correct view template
		var viewHtml = $('#view-' + module).html();
		var callChosen = false; // Gets set if schema contains a select with chosen: true
		
		// View-Level Render
		viewHtml = viewHtml.replace("{{module.title}}", schemaJson.title);
		
		// Field-Level Render
		for( var i = 0; i < schemaJson.fields.length; i++ ){
			
			var template;
			var thisField = schemaJson.fields[i];
			
			// Get Template
			template = templates[method][thisField.type];
			
			//Type-Specific Elements
			switch( thisField.type ){
				case 'calendarBox':
					template = template.replace('{{value}}', formatDateTime(qewdJson[thisField.name]) );
					break;
					
				case 'selectBox':
					template = template.replace('{{options}}', selectOptions(thisField.options, qewdJson[thisField.name]) );
					
					// Chosen
					if( thisField.chosen == 'true' ){
						callChosen = true;
					}
					
					// Multiple
					if( thisField.multiple == 'true' ){
						template = template.replace('{{multiple}}', 'multiple' );
					} else {
						template = template.replace('{{multiple}}', '' );
					}
					break;
			}
			
			// Render Template - Common Elements
			if( template ){
				template = template.replace('{{name}}', thisField.name);
				template = template.replace('{{label}}', thisField.label);
				template = template.replace('{{value}}', qewdJson[thisField.name]);
			}
			
			//dynamic.append(template);
			viewHtml = viewHtml.replace('{{schema.'+thisField.name+'}}', template);
			
		}
		
		$('#htmlOutput').html( viewHtml );
		$('#view').html( viewHtml );
		$('#page').show();
		
		// Add / Refresh Chosen
		if( callChosen ){
			$(".chosen-select").chosen();
		}

	} else {
		alert('JSON Error');
	}
	
}

function formatDateTime(datetime){
	var m_names = new Array("Jan", "Feb", "Mar", "Apt", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
	
	var d = new Date();
	d.setTime(datetime);
	
	var curr_date = d.getDate();
	var curr_month = d.getMonth();
	var curr_year = d.getFullYear();
	
	return curr_date + "-" + m_names[curr_month] + "-" + curr_year;
}


function selectOptions(options, selectedValue){
	
	var keys = Object.keys(options);
	var output = '';
	
	console.log( selectedValue );
	
	for(var i=0;i<keys.length;i++){
	    var key = keys[i];
	    var value = options[key];
	    
	    if( selectedValue == key ){
		    output+='<option value="' + key + '" selected="selected">' + value + '</option>';
		} else {
		    output+='<option value="' + key + '">' + value + '</option>';
		}
	}
	
	return output;
	
}