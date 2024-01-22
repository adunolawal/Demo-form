document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get the values from the input fields
  const applicantsName = document.getElementById("applicantsName").value;
  const applicantsAccountNumber = document.getElementById(
    "applicantsAccountNumber"
  ).value;
  const taxId = document.getElementById("taxId").value;
  const invoiceValue = document.getElementById("invoiceValue").value;
  const beneficiaryName = document.getElementById("beneficiaryName").value;
  const chargeOptions = document.getElementById("chargeOptions").value;

  // Display the values in the console
  console.log("Applicant's Name:", applicantsName);
  console.log("Applicant's Account Number:", applicantsAccountNumber);
  console.log("Tax Identification Number:", taxId);
  console.log("Invoice Value:", invoiceValue);
  console.log("Beneficiary Name:", beneficiaryName);
  console.log("Charge Type:", chargeOptions);

  const formData = {
    applicantsName,
    applicantsAccountNumber,
    taxId,
    invoiceValue,
    beneficiaryName,
    chargeOptions,
  };

  // Make a POST request using fetch
  fetch("http://localhost:8080/api/v1/forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data, "Form submitted successfully!");
      console.log("POST request successful:", data);
    })
    .catch((error) => {
      alert("Form submission failed. Please try again.");
      console.error("Error making POST request:", error);
    });
});
