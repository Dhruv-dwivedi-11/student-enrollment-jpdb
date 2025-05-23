    const connToken = "90934639|-31949206416335368|90956377";
    const dbName = "SCHOOL-DB";
    const relName = "STUDENT-TABLE";
    const baseURL = "http://api.login2explore.com:5577";

    function disableAll() {
      $("#fullname, #cls, #birth, #address, #enroll").prop("disabled", true);
      $("#saveBtn, #updateBtn").prop("disabled", true);
    }

    function enableAll() {
      $("#fullname, #cls, #birth, #address, #enroll").prop("disabled", false);
    }

    function resetForm() {
      $("#rollno, #fullname, #cls, #birth, #address, #enroll, #rec_no").val("");
      $("#rollno").prop("disabled", false).focus();
      disableAll();
      $("#saveBtn").prop("disabled", true);
      $("#updateBtn").prop("disabled", true);
    }

    function getStudent() {
      let rollno = $("#rollno").val().trim();
      if (!rollno) {
        // Do not alert to prevent annoyance
        return;
      }

      let req = createGET_BY_KEYRequest(connToken, dbName, relName, JSON.stringify({ "Roll-No": rollno }));
      jQuery.ajaxSetup({ async: false });
      let res = executeCommandAtGivenBaseUrl(req, baseURL, "/api/irl");
      jQuery.ajaxSetup({ async: true });

      if (res.status === 400) {
        // No record found, enable fields for new data entry
        enableAll();
        $("#saveBtn").prop("disabled", false);
        $("#updateBtn").prop("disabled", true);
        $("#rollno").prop("disabled", false);
        $("#fullname").focus();
      } else if (res.status === 200) {
        // Record found, display data and enable update
        let data = JSON.parse(res.data).record;
        $("#rec_no").val(JSON.parse(res.data).rec_no);
        $("#fullname").val(data["Full-Name"]);
        $("#cls").val(data["Class"]);
        $("#birth").val(data["Birth-Date"]);
        $("#address").val(data["Address"]);
        $("#enroll").val(data["Enrollment-Date"]);

        $("#rollno").prop("disabled", true);
        enableAll();
        $("#saveBtn").prop("disabled", true);
        $("#updateBtn").prop("disabled", false);
        $("#fullname").focus();
      }
    }

    function validateForm() {
      let fields = ["rollno", "fullname", "cls", "birth", "address", "enroll"];
      for (let id of fields) {
        if ($("#" + id).val().trim() === "") {
          alert("All fields are required!");
          $("#" + id).focus();
          return false;
        }
      }
      return true;
    }

    function saveStudent() {
      if (!validateForm()) return;

      let data = {
        "Roll-No": $("#rollno").val(),
        "Full-Name": $("#fullname").val(),
        "Class": $("#cls").val(),
        "Birth-Date": $("#birth").val(),
        "Address": $("#address").val(),
        "Enrollment-Date": $("#enroll").val()
      };

      let req = createPUTRequest(connToken, JSON.stringify(data), dbName, relName);
      jQuery.ajaxSetup({ async: false });
      let res = executeCommandAtGivenBaseUrl(req, baseURL, "/api/iml");
      jQuery.ajaxSetup({ async: true });

      if (res.status === 200) {
        alert("Student data saved successfully!");
        resetForm();
      } else {
        alert("Error saving data: " + res.message);
      }
    }

    function updateStudent() {
      if (!validateForm()) return;

      let data = {
        "Full-Name": $("#fullname").val(),
        "Class": $("#cls").val(),
        "Birth-Date": $("#birth").val(),
        "Address": $("#address").val(),
        "Enrollment-Date": $("#enroll").val()
      };

      let rec_no = $("#rec_no").val();
      let req = createUPDATERecordRequest(connToken, JSON.stringify(data), dbName, relName, rec_no);
      jQuery.ajaxSetup({ async: false });
      let res = executeCommandAtGivenBaseUrl(req, baseURL, "/api/iml");
      jQuery.ajaxSetup({ async: true });

      if (res.status === 200) {
        alert("Student data updated successfully!");
        resetForm();
      } else {
        alert("Error updating data: " + res.message);
      }
    }