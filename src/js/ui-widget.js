// Default Data - Used to populate in the form
var qewd = $.parseJSON("{\n\t\"personalnotes\": {\n\t\t\"author\": \"Dr Tony Shannon\",\n\t\t\"dateCreated\": 1456287062000,\n\t\t\"noteType\": \"Generic Plugin\",\n\t\t\"source\": \"ethercis\",\n\t\t\"sourceId\": \"23dbda9d-7688-426c-8cb8-312a4f351071\"\n\t},\n\t\"orders\": {\n\t\t\"name\": \"Cardiac-ECG\",\n\t\t\"orderDate\": 1458738936944,\n\t\t\"source\": \"ethercis\",\n\t\t\"sourceId\": \"23dbda9d-7688-426c-8cb8-312a4f351071\"\n\t},\n\t\"events\": {\n\t\t\"dateCreated\": 1494586220000,\n\t\t\"dateTime\": 1494496220958,\n\t\t\"description\": \"Needs nursing and supervisory care\",\n\t\t\"name\": \"Discharge to care home\",\n\t\t\"source\": \"ethercis\",\n\t\t\"sourceId\": \"93ac376d-3ff4-4e0b-b080-47eb3fe81750\",\n\t\t\"type\": \"Admission\",\n\t\t\"typeMultiple\": \"Admission\"\n\t},\n\t\"testresults\": {\n\t\t\"dateCreated\":1427004662000,\n\t\t\"sampleTaken\":1426889462518,\n\t\t\"source\":\"ethercis\",\n\t\t\"sourceId\":\"810272ac-28e8-4928-b61b-79dcef4b4170\",\n\t\t\"testName\":\"Example Name\"\n\t},\n\t\"procedures\": {\n\t\t\"date\":1436969493829,\n\t\t\"name\":\"total replacement of hip\",\n\t\t\"source\":\"ethercis\",\n\t\t\"sourceId\":\"fa7408c3-7d69-4f50-84ac-cbf735a0ab18\",\n\t\t\"time\":54693829\n\t},\n\t\"vaccinations\": {\n\t\t\"dateCreated\":1356149462000,\n\t\t\"source\":\"ethercis\",\n\t\t\"sourceId\":\"3e13f196-2334-41b6-b788-660464e7436a\",\n\t\t\"vaccinationName\":\"Influenza\"\n\t},\n\t\"referrals\": {\n\t\t\"dateOfReferral\":1458792662000,\n\t\t\"referralFrom\":\"Tony Shannon\",\n\t\t\"referralTo\":\"Ripplefields Optometry service\",\n\t\t\"source\":\"ethercis\",\n\t\t\"sourceId\":\"94133578-f505-4e76-b4ed-762462508801\"\n\t},\n\t\"mdt\": {\n\t\t\"dateOfMeeting\":1455062400000,\n\t\t\"dateOfRequest\":1458739933006,\n\t\t\"serviceTeam\":\"\",\n\t\t\"source\":\"marand\",\n\t\t\"sourceId\":\"5836b208-160f-4925-b2b1-a26626432940\"\n\t}\n\n}");
var schemas = $.parseJSON("{\n\t\"personalnotes\": {\n\t\t\"title\": \"Personal Notes\",\n\t\t\"fields\": [\n\t\t\t{\n\t\t\t\t\"name\": \"author\",\n\t\t\t\t\"type\": \"textBox\",\n\t\t\t\t\"label\": \"Author\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"dateCreated\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Date Created\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"noteType\",\n\t\t\t\t\"type\": \"textArea\",\n\t\t\t\t\"label\": \"Note Type\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"source\",\n\t\t\t\t\"type\": \"readOnly\",\n\t\t\t\t\"label\": \"Source\"\n\t\t\t}\n\t\t]\n\t},\n\t\"orders\": {\n\t\t\"title\": \"Orders\",\n\t\t\"fields\": [\n\t\t\t{\n\t\t\t\t\"name\": \"name\",\n\t\t\t\t\"type\": \"textBox\",\n\t\t\t\t\"label\": \"Name\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"orderDate\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Order Created\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"source\",\n\t\t\t\t\"type\": \"readOnly\",\n\t\t\t\t\"label\": \"Source\"\n\t\t\t}\n\t\t]\n\t},\n\t\"events\": {\n\t\t\"title\": \"Events\",\n\t\t\"fields\": [\n\t\t\t{\n\t\t\t\t\"name\": \"dateCreated\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Date Created\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"dateTime\",\n\t\t\t\t\"type\": \"textBox\",\n\t\t\t\t\"label\": \"Time\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"description\",\n\t\t\t\t\"type\": \"textArea\",\n\t\t\t\t\"label\": \"Description\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"name\",\n\t\t\t\t\"type\": \"textBox\",\n\t\t\t\t\"label\": \"Name\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"source\",\n\t\t\t\t\"type\": \"readOnly\",\n\t\t\t\t\"label\": \"Source\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"type\",\n\t\t\t\t\"type\": \"selectBox\",\n\t\t\t\t\"label\": \"Type (Singular Select)\",\n\t\t\t\t\"options\": {\n\t\t\t\t\t\"Appointment\": \"Appointment\",\n\t\t\t\t\t\"Admission\": \"Admission\",\n\t\t\t\t\t\"Transfer\": \"Transfer\",\n\t\t\t\t\t\"Discharge\": \"Discharge\"\n\t\t\t\t},\n\t\t\t\t\"chosen\": \"true\",\n\t\t\t\t\"multiple\": \"false\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"typeMultiple\",\n\t\t\t\t\"type\": \"selectBox\",\n\t\t\t\t\"label\": \"Type (Multiple Select)\",\n\t\t\t\t\"options\": {\n\t\t\t\t\t\"Appointment\": \"Appointment\",\n\t\t\t\t\t\"Admission\": \"Admission\",\n\t\t\t\t\t\"Transfer\": \"Transfer\",\n\t\t\t\t\t\"Discharge\": \"Discharge\"\n\t\t\t\t},\n\t\t\t\t\"chosen\": \"true\",\n\t\t\t\t\"multiple\": \"true\"\n\t\t\t}\n\t\t]\n\t},\n\t\"testresults\": {\n\t\t\"title\": \"Test Results\",\n\t\t\"fields\": [\n\t\t\t{\n\t\t\t\t\"name\": \"dateCreated\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Date Created\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"sampleTaken\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Sample Taken\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"testName\",\n\t\t\t\t\"type\": \"textBox\",\n\t\t\t\t\"label\": \"Test Name\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"source\",\n\t\t\t\t\"type\": \"readOnly\",\n\t\t\t\t\"label\": \"Source\"\n\t\t\t}\n\t\t]\n\t},\n\t\"procedures\": {\n\t\t\"title\": \"Procedures\",\n\t\t\"fields\": [\n\t\t\t{\n\t\t\t\t\"name\": \"date\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Date Created\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"name\",\n\t\t\t\t\"type\": \"textBox\",\n\t\t\t\t\"label\": \"Sample Taken\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"time\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Test Name\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"source\",\n\t\t\t\t\"type\": \"readOnly\",\n\t\t\t\t\"label\": \"Source\"\n\t\t\t}\n\t\t]\n\t},\n\t\"vaccinations\": {\n\t\t\"title\": \"Vaccinations\",\n\t\t\"fields\": [\n\t\t\t{\n\t\t\t\t\"name\": \"dateCreated\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Date Created\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"vaccinationName\",\n\t\t\t\t\"type\": \"textBox\",\n\t\t\t\t\"label\": \"Vaccination Name\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"source\",\n\t\t\t\t\"type\": \"readOnly\",\n\t\t\t\t\"label\": \"Source\"\n\t\t\t}\n\t\t]\n\t},\n\t\"referrals\": {\n\t\t\"title\": \"Refarrals\",\n\t\t\"fields\": [\n\t\t\t{\n\t\t\t\t\"name\": \"dateOfReferral\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Date of Referral\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"referralFrom\",\n\t\t\t\t\"type\": \"textBox\",\n\t\t\t\t\"label\": \"Referral From\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"referralTo\",\n\t\t\t\t\"type\": \"textBox\",\n\t\t\t\t\"label\": \"Referral To\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"source\",\n\t\t\t\t\"type\": \"readOnly\",\n\t\t\t\t\"label\": \"Source\"\n\t\t\t}\n\t\t]\n\t},\n\t\"mdt\": {\n\t\t\"title\": \"MDT\",\n\t\t\"fields\": [\n\t\t\t{\n\t\t\t\t\"name\": \"dateOfMeeting\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Date of Meeting\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"dateOfRequest\",\n\t\t\t\t\"type\": \"calendarBox\",\n\t\t\t\t\"label\": \"Date of Request\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"serviceTeam\",\n\t\t\t\t\"type\": \"textBox\",\n\t\t\t\t\"label\": \"Service Team\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"source\",\n\t\t\t\t\"type\": \"readOnly\",\n\t\t\t\t\"label\": \"Source\"\n\t\t\t}\n\t\t]\n\t}\n}");
var templates = {
  read: {
    textArea: "\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"schema\">{{label}}</label>\n\t\t\t<pre>{{value}}</pre>\n\t\t</div>\n\t\t",
    textBox: "\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"schema\">{{label}}</label>\n\t\t\t<p>{{value}}</p>\n\t\t</div>\n\t\t",
    calendarBox: "\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"schema\">{{label}}</label>\n\t\t\t<p>{{value}}</p>\n\t\t</div>\n\t\t",
    readOnly: "\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"schema\">{{label}}</label>\n\t\t\t<p>{{value}}</p>\n\t\t</div>\n\t\t",
    selectBox: "\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"schema\">{{label}}</label>\n\t\t\t<p>{{value}}</p>\n\t\t</div>\n\t\t"
  },
  edit: {
    textArea: "\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"schema\">{{label}}</label>\n\t\t\t<textarea class=\"form-control\" id=\"{{name}}\" rows=\"3\">{{value}}</textarea>\n\t\t</div>\n\t\t",
    textBox: "\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"schema\">{{label}}</label>\n\t\t\t<input class=\"form-control\" id=\"{{name}}\" name=\"{{name}}\" value=\"{{value}}\" />\n\t\t</div>\n\t\t",
    calendarBox: "\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"basic-url\">{{label}}</label>\n\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t<span class=\"input-group-text\" id=\"{{name}}-addon\"><i class=\"fa fa-calendar\"></i></span>\n\t\t\t\t</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"{{name}}\" aria-describedby=\"{{name}}-addon\" value=\"{{value}}\">\n\t\t\t</div>\n\t\t</div>\n\t\t",
    readOnly: "\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"schema\">{{label}}</label>\n\t\t\t<input class=\"form-control\" id=\"{{name}}\" name=\"{{name}}\" value=\"{{value}}\" readonly=\"readonly\" />\n\t\t</div>\n\t\t",
    selectBox: "\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"schema\">{{label}}</label>\n\t\t\t<select id=\"{{name}}\" name=\"{{name}}\" data-value=\"{{value}}\" class=\"form-control chosen-select\" {{multiple}}>\n\t\t\t\t{{options}}\n\t\t\t</select>\n\t\t</div>\n\t\t"
  }
};
$(document).ready(function () {
  if (qewd && schemas) {
    // Init
    setSchema();
    $('#page').hide(); // Change Module / Schema

    $('#module').change(function (e) {
      setSchema();
    }); // Build Views

    $('#build-edit').click(function (e) {
      e.preventDefault();
      renderView('edit');
    });
    $('#build-read').click(function (e) {
      e.preventDefault();
      renderView('read');
    });
  } else {
    alert('Global JSON Error');
  }
});

function setSchema() {
  var module = $('#module option:selected').val(); // Populate

  $('#qewd').val(JSON.stringify(qewd[module], null, 2));
  $('#schema').val(JSON.stringify(schemas[module], null, 2));
  $('#page').hide();
  $('#htmlOutput').html($('#view-' + module).html());
}

function renderView(method) {
  var qewdJson = $.parseJSON($('#qewd').val());
  var schemaJson = $.parseJSON($('#schema').val());

  if (qewdJson && schemaJson) {
    var module = $('#module option:selected').val(); // Pull the correct view template

    var viewHtml = $('#view-' + module).html();
    var callChosen = false; // Gets set if schema contains a select with chosen: true
    // View-Level Render

    viewHtml = viewHtml.replace("{{module.title}}", schemaJson.title); // Field-Level Render

    for (var i = 0; i < schemaJson.fields.length; i++) {
      var template;
      var thisField = schemaJson.fields[i]; // Get Template

      template = templates[method][thisField.type]; //Type-Specific Elements

      switch (thisField.type) {
        case 'calendarBox':
          template = template.replace('{{value}}', formatDateTime(qewdJson[thisField.name]));
          break;

        case 'selectBox':
          template = template.replace('{{options}}', selectOptions(thisField.options, qewdJson[thisField.name])); // Chosen

          if (thisField.chosen == 'true') {
            callChosen = true;
          } // Multiple


          if (thisField.multiple == 'true') {
            template = template.replace('{{multiple}}', 'multiple');
          } else {
            template = template.replace('{{multiple}}', '');
          }

          break;
      } // Render Template - Common Elements


      if (template) {
        template = template.replace('{{name}}', thisField.name);
        template = template.replace('{{label}}', thisField.label);
        template = template.replace('{{value}}', qewdJson[thisField.name]);
      } //dynamic.append(template);


      viewHtml = viewHtml.replace('{{schema.' + thisField.name + '}}', template);
    }

    $('#htmlOutput').html(viewHtml);
    $('#view').html(viewHtml);
    $('#page').show(); // Add / Refresh Chosen

    if (callChosen) {
      $(".chosen-select").chosen();
    }
  } else {
    alert('JSON Error');
  }
}

function formatDateTime(datetime) {
  var m_names = new Array("Jan", "Feb", "Mar", "Apt", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
  var d = new Date();
  d.setTime(datetime);
  var curr_date = d.getDate();
  var curr_month = d.getMonth();
  var curr_year = d.getFullYear();
  return curr_date + "-" + m_names[curr_month] + "-" + curr_year;
}

function selectOptions(options, selectedValue) {
  var keys = Object.keys(options);
  var output = '';
  console.log(selectedValue);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = options[key];

    if (selectedValue == key) {
      output += '<option value="' + key + '" selected="selected">' + value + '</option>';
    } else {
      output += '<option value="' + key + '">' + value + '</option>';
    }
  }

  return output;
}
//# sourceMappingURL=ui-widget.js.map