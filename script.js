document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("jobApplicationForm");
  const tableData = []; // Array to store submitted application data

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      const formData = new FormData(form);
      const data = {};
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
      tableData.push(data); // Add submitted data to tableData array
      form.reset(); // Reset the form fields
      console.log("Submitted data:", data);
    }
  });

  function validateForm() {
    // Implement client-side form validation here
    return true; // For now, always return true
  }

  const viewTableButton = document.getElementById("viewTableButton");
  viewTableButton.addEventListener("click", function() {
    const table = document.createElement("table");
    const thead = table.createTHead();
    const tbody = table.createTBody();
    const headers = Object.keys(tableData[0]); // Get headers from the first entry in tableData

    // Create table headers
    const headerRow = thead.insertRow();
    headers.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });

    // Populate table rows with application data
    tableData.forEach(application => {
      const row = tbody.insertRow();
      headers.forEach(header => {
        const cell = row.insertCell();
        cell.textContent = application[header];
      });
    });

    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
  });
});
