const templates = [
  {
      name: "HTML Comparison Test Started",
      body: `Dear {RecipientName},

The HTML Comparison Test has been initiated. Below are the details for your reference:

<h3>Project Details</h3>
<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>GitLab Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>KT Received?</td>
      <td>{KTReceived}</td>
  </tr>
</table>

<h3>Access Credentials</h3>
Test URL: {TestURL}
Username: {Username}
Password: {Password}

<h3>Tools Being Used</h3>
<ul>
  <li>Jam: Bug Recording</li>
  <li>GitLab: Bug Reporting</li>
</ul>

<h3>Test Environment</h3>
Operating Systems: macOS, Linux, Android, iOS

Browsers:
<table>
  <tr>
      <th>Browser</th>
      <th>Version</th>
  </tr>
  <tr>
      <td>Safari</td>
      <td>{SafariVersion}</td>
  </tr>
  <tr>
      <td>Firefox</td>
      <td>{FirefoxVersion}</td>
  </tr>
  <tr>
      <td>Brave</td>
      <td>{BraveVersion}</td>
  </tr>
  <tr>
      <td>Chrome</td>
      <td>{ChromeVersion}</td>
  </tr>
</table>

<h3>Test Devices</h3>
<ul>
  <li>MacBook Pro {MacOSVersion}, laptop Dell Windows 11</li>
  <li>Desktop: Windows 11</li>
  <li>iPhone {iPhoneModel} ({iOSVersion})
      <ul>
          <li>Chrome, Safari, Firefox</li>
      </ul>
  </li>
  <li>{AndroidDeviceModel} (Android {AndroidVersion})
      <ul>
          <li>Chrome</li>
      </ul>
  </li>
</ul>

<h3>Test Duration</h3>
{StartDate} to {EndDate} (Total: {DurationDays} days)

Please feel free to reach out if you have any questions or need further information.`,
      fields: [
          "{RecipientName}",
          "{RepositoryName}",
          "{KTReceived}",
          "{TestURL}",
          "{Username}",
          "{Password}",
          "{SafariVersion}",
          "{FirefoxVersion}",
          "{BraveVersion}",
          "{ChromeVersion}",
          "{MacOSVersion}",
          "{iPhoneModel}",
          "{iOSVersion}",
          "{AndroidDeviceModel}",
          "{AndroidVersion}",
          "{StartDate}",
          "{EndDate}",
          "{DurationDays}"
      ]
  },
  {
      name: "HTML Comparison Completed",
      body: `Dear {RecipientName},

The HTML Comparison Test has been successfully completed. Below are the details:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Project</td>
      <td>{ProjectName}</td>
  </tr>
  <tr>
      <td>GitLab Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Test Results</td>
      <td>{TestResults}</td>
  </tr>
  <tr>
      <td>Duration</td>
      <td>{StartDate} to {EndDate}</td>
  </tr>
</table>

Please review the results and let us know if further action is required.`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{TestResults}", "{StartDate}", "{EndDate}"]
  },
  {
      name: "Dev Testing Started",
      body: `Dear {RecipientName},

Dev Testing has started for the project. Details:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Project</td>
      <td>{ProjectName}</td>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Test Environment</td>
      <td>{Environment}</td>
  </tr>
  <tr>
      <td>Start Date</td>
      <td>{StartDate}</td>
  </tr>
  <tr>
      <td>Expected End Date</td>
      <td>{EndDate}</td>
  </tr>
</table>

Please monitor progress and provide feedback.`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{Environment}", "{StartDate}", "{EndDate}"]
  },
  {
      name: "Dev Testing Rejected",
      body: `Dear {RecipientName},

Dev Testing for {ProjectName} has been rejected due to {Reason}. Please address the issues and reschedule testing.

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Issues</td>
      <td>{IssuesList}</td>
  </tr>
  <tr>
      <td>Next Steps</td>
      <td>{NextSteps}</td>
  </tr>
</table>`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{Reason}", "{IssuesList}", "{NextSteps}"]
  },
  {
      name: "Dev Testing Completed",
      body: `Dear {RecipientName},

Dev Testing for {ProjectName} has been completed. Results:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Status</td>
      <td>{Status}</td>
  </tr>
  <tr>
      <td>Duration</td>
      <td>{StartDate} to {EndDate}</td>
  </tr>
  <tr>
      <td>Next Steps</td>
      <td>{NextSteps}</td>
  </tr>
</table>`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{Status}", "{StartDate}", "{EndDate}", "{NextSteps}"]
  },
  {
      name: "Dev Retesting Phase Started",
      body: `Dear {RecipientName},

The Dev Retesting Phase has started for {ProjectName}. Details:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Issues Addressed</td>
      <td>{IssuesAddressed}</td>
  </tr>
  <tr>
      <td>Start Date</td>
      <td>{StartDate}</td>
  </tr>
  <tr>
      <td>Expected End Date</td>
      <td>{EndDate}</td>
  </tr>
</table>

Please ensure timely feedback.`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{IssuesAddressed}", "{StartDate}", "{EndDate}"]
  },
  {
      name: "Dev Retesting Phase Rejected",
      body: `Dear {RecipientName},

The Dev Retesting Phase for {ProjectName} has been rejected. Reason: {Reason}

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Issues</td>
      <td>{IssuesList}</td>
  </tr>
  <tr>
      <td>Next Steps</td>
      <td>{NextSteps}</td>
  </tr>
</table>`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{Reason}", "{IssuesList}", "{NextSteps}"]
  },
  {
      name: "Dev Re-testing Completed with Reopened Bugs",
      body: `Dear {RecipientName},

Dev Re-testing for {ProjectName} is complete, but some bugs were reopened. Details:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Reopened Bugs</td>
      <td>{BugsList}</td>
  </tr>
  <tr>
      <td>Next Steps</td>
      <td>{NextSteps}</td>
  </tr>
  <tr>
      <td>Duration</td>
      <td>{StartDate} to {EndDate}</td>
  </tr>
</table>`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{BugsList}", "{NextSteps}", "{StartDate}", "{EndDate}"]
  },
  {
      name: "Dev Re-testing Completed with No Reopened Bugs",
      body: `Dear {RecipientName},

Dev Re-testing for {ProjectName} is complete with no reopened bugs. Details:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Status</td>
      <td>{Status}</td>
  </tr>
  <tr>
      <td>Duration</td>
      <td>{StartDate} to {EndDate}</td>
  </tr>
  <tr>
      <td>Next Steps</td>
      <td>{NextSteps}</td>
  </tr>
</table>`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{Status}", "{StartDate}", "{EndDate}", "{NextSteps}"]
  },
  {
      name: "Before Live Testing Started",
      body: `Dear {RecipientName},

Before Live Testing has started for {ProjectName}. Details:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Environment</td>
      <td>{Environment}</td>
  </tr>
  <tr>
      <td>Start Date</td>
      <td>{StartDate}</td>
  </tr>
  <tr>
      <td>Expected End Date</td>
      <td>{EndDate}</td>
  </tr>
</table>

Please provide necessary support.`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{Environment}", "{StartDate}", "{EndDate}"]
  },
  {
      name: "Before Live Testing Rejected",
      body: `Dear {RecipientName},

Before Live Testing for {ProjectName} has been rejected. Reason: {Reason}

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Issues</td>
      <td>{IssuesList}</td>
  </tr>
  <tr>
      <td>Next Steps</td>
      <td>{NextSteps}</td>
  </tr>
</table>`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{Reason}", "{IssuesList}", "{NextSteps}"]
  },
  {
      name: "Before Live Testing Completed: Approved with Bugs to Fix Before Live",
      body: `Dear {RecipientName},

Before Live Testing for {ProjectName} is complete and approved with bugs to fix. Details:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Bugs</td>
      <td>{BugsList}</td>
  </tr>
  <tr>
      <td>Next Steps</td>
      <td>{NextSteps}</td>
  </tr>
  <tr>
      <td>Duration</td>
      <td>{StartDate} to {EndDate}</td>
  </tr>
</table>`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{BugsList}", "{NextSteps}", "{StartDate}", "{EndDate}"]
  },
  {
      name: "Before Live Testing Completed",
      body: `Dear {RecipientName},

Before Live Testing for {ProjectName} is complete. Details:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Status</td>
      <td>{Status}</td>
  </tr>
  <tr>
      <td>Duration</td>
      <td>{StartDate} to {EndDate}</td>
  </tr>
  <tr>
      <td>Next Steps</td>
      <td>{NextSteps}</td>
  </tr>
</table>`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{Status}", "{StartDate}", "{EndDate}", "{NextSteps}"]
  },
  {
      name: "After Live Testing Started",
      body: `Dear {RecipientName},

After Live Testing has started for {ProjectName}. Details:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Environment</td>
      <td>{Environment}</td>
  </tr>
  <tr>
      <td>Start Date</td>
      <td>{StartDate}</td>
  </tr>
  <tr>
      <td>Expected End Date</td>
      <td>{EndDate}</td>
  </tr>
</table>

Please monitor closely.`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{Environment}", "{StartDate}", "{EndDate}"]
  },
  {
      name: "After Live Testing Completed",
      body: `Dear {RecipientName},

After Live Testing for {ProjectName} is complete. Details:

<table>
  <tr>
      <th>Item</th>
      <th>Details</th>
  </tr>
  <tr>
      <td>Repository</td>
      <td>{RepositoryName}</td>
  </tr>
  <tr>
      <td>Status</td>
      <td>{Status}</td>
  </tr>
  <tr>
      <td>Duration</td>
      <td>{StartDate} to {EndDate}</td>
  </tr>
  <tr>
      <td>Next Steps</td>
      <td>{NextSteps}</td>
  </tr>
</table>`,
      fields: ["{RecipientName}", "{ProjectName}", "{RepositoryName}", "{Status}", "{StartDate}", "{EndDate}", "{NextSteps}"]
  }
];

let isAdmin = false;
let currentTemplate = null;
let currentFields = [];

function showAdminLogin() {
  document.getElementById('adminLoginModal').style.display = 'flex';
}

function closeAdminLogin() {
  document.getElementById('adminLoginModal').style.display = 'none';
  document.getElementById('adminPassword').value = '';
}

function loginAdmin() {
  const password = document.getElementById('adminPassword').value;
  if (password === 'Abhihere') {
      isAdmin = true;
      document.getElementById('adminModeBtn').disabled = false;
      closeAdminLogin();
      switchMode('admin');
  } else {
      alert('Incorrect password');
  }
}

function switchMode(mode) {
  if (mode === 'admin' && !isAdmin) {
      showAdminLogin();
      return;
  }
  document.getElementById('publicSection').classList.toggle('active', mode === 'public');
  document.getElementById('adminSection').classList.toggle('active', mode === 'admin');
  document.getElementById('publicModeBtn').disabled = mode === 'public';
  document.getElementById('adminModeBtn').disabled = mode === 'admin';
  renderTemplates();
}

function renderTemplates() {
  const publicList = document.getElementById('publicTemplateList');
  const adminList = document.getElementById('adminTemplateList');
  publicList.innerHTML = '';
  adminList.innerHTML = '';

  templates.forEach((template, index) => {
      const publicCard = document.createElement('div');
      publicCard.className = 'template-card';
      publicCard.innerHTML = `<h3>${template.name}</h3><button onclick="openTemplateFieldsModal(${index})">Use Template</button>`;
      publicList.appendChild(publicCard);

      if (isAdmin) {
          const adminCard = document.createElement('div');
          adminCard.className = 'template-card';
          adminCard.innerHTML = `<h3>${template.name}</h3><button onclick="editTemplate(${index})">Edit</button>`;
          adminList.appendChild(adminCard);
      }
  });
}

function openTemplateFieldsModal(index) {
  currentTemplate = templates[index];
  const form = document.getElementById('templateFieldsForm');
  form.innerHTML = '';
  currentTemplate.fields.forEach(field => {
      if (field.trim()) {
          const label = document.createElement('label');
          label.textContent = field;
          const input = document.createElement('input');
          input.type = 'text';
          input.dataset.field = field;
          input.required = true;
          form.appendChild(label);
          form.appendChild(input);
      }
  });
  document.getElementById('templateFieldsModal').style.display = 'flex';
}

function closeTemplateFieldsModal() {
  document.getElementById('templateFieldsModal').style.display = 'none';
  document.getElementById('templateFieldsForm').innerHTML = '';
  currentTemplate = null;
}

function submitTemplateFields() {
  const inputs = document.querySelectorAll('#templateFieldsForm input');
  for (let input of inputs) {
      if (!input.value.trim()) {
          alert(`Please fill in all fields. Missing: ${input.dataset.field}`);
          return;
      }
  }
  let emailBody = currentTemplate.body;
  inputs.forEach(input => {
      emailBody = emailBody.replaceAll(input.dataset.field, input.value);
  });
  const rawEmailBody = emailBody; // Store raw body for copying
  // Convert newlines to <br> for HTML rendering in preview
  emailBody = emailBody.replace(/\n/g, '<br>');
  const generatedEmailContent = document.getElementById('generatedEmailContent');
  generatedEmailContent.innerHTML = emailBody;
  generatedEmailContent.dataset.raw = rawEmailBody; // Store raw body for copying
  document.getElementById('templateFieldsModal').style.display = 'none';
  document.getElementById('generatedEmailModal').style.display = 'flex';
}

function copyEmailContent() {
  const rawContent = document.getElementById('generatedEmailContent').dataset.raw;
  // Wrap content in a basic HTML structure with inline styles for Gmail
  const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
          <style>
              body { font-family: Arial, sans-serif; color: #333; }
              table { width: 100%; border-collapse: collapse; margin: 10px 0; }
              th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
              th { background: #f4f4f4; font-weight: bold; }
              td { background: #fff; }
              h3 { margin: 10px 0; }
              ul { margin: 10px 0; padding-left: 20px; list-style-type: disc; }
              li { margin-bottom: 5px; }
          </style>
      </head>
      <body>
          ${rawContent}
      </body>
      </html>
  `;
  // Create plain text fallback by stripping HTML tags
  const plainText = rawContent.replace(/<[^>]+>/g, '').replace(/\n\n+/g, '\n\n');
  
  // Use Clipboard API to copy both HTML and plain text
  const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
  const textBlob = new Blob([plainText], { type: 'text/plain' });
  const clipboardItem = new ClipboardItem({
      'text/html': htmlBlob,
      'text/plain': textBlob
  });
  
  navigator.clipboard.write([clipboardItem]).then(() => {
      alert('Email content copied to clipboard! Paste directly into Gmail.');
  }).catch(err => {
      // Fallback to plain text if Clipboard API fails
      navigator.clipboard.writeText(plainText).then(() => {
          alert('Copied as plain text due to an error. Paste into Gmail.');
      }).catch(fallbackErr => {
          alert('Failed to copy content: ' + fallbackErr);
      });
  });
}

function closeGeneratedEmailModal() {
  document.getElementById('generatedEmailModal').style.display = 'none';
  document.getElementById('generatedEmailContent').innerHTML = '';
  currentTemplate = null;
}

function startNewTemplate() {
  currentTemplate = null;
  currentFields = [];
  document.getElementById('templateName').value = '';
  document.getElementById('messageBody').value = '';
  document.getElementById('fieldList').innerHTML = '';
  document.getElementById('templateForm').style.display = 'block';
}

function editTemplate(index) {
  currentTemplate = templates[index];
  currentFields = [...currentTemplate.fields];
  document.getElementById('templateName').value = currentTemplate.name;
  document.getElementById('messageBody').value = currentTemplate.body;
  renderFields();
  document.getElementById('templateForm').style.display = 'block';
}

function addField() {
  const fieldInput = document.getElementById('fieldInput').value.trim();
  // Validate field format: must be in {field} format, letters only, any case
  if (fieldInput && fieldInput.match(/^{[a-zA-Z]+}$/)) {
      if (!currentFields.includes(fieldInput)) {
          currentFields.push(fieldInput);
          renderFields();
          document.getElementById('fieldInput').value = '';
      } else {
          alert('This field already exists.');
      }
  } else {
      alert('Please enter a valid field in the format {field}, e.g., {RecipientName}, using letters only in any case.');
  }
}

function removeField(index) {
  currentFields.splice(index, 1);
  renderFields();
}

function renderFields() {
  const fieldList = document.getElementById('fieldList');
  fieldList.innerHTML = '';
  currentFields.forEach((field, index) => {
      const fieldItem = document.createElement('div');
      fieldItem.className = 'field-item';
      fieldItem.innerHTML = `<span>${field}</span><button onclick="removeField(${index})">Remove</button>`;
      fieldList.appendChild(fieldItem);
  });
}

function saveTemplate() {
  const name = document.getElementById('templateName').value.trim();
  const body = document.getElementById('messageBody').value.trim();

  if (!name || !body) {
      alert('Template name and message body are required.');
      return;
  }

  const usedFields = body.match(/{[^}]+}/g) || [];
  const invalidFields = usedFields.filter(field => !currentFields.includes(field));
  if (invalidFields.length > 0) {
      alert(`The following fields in the message body are not listed in Fields to Replace: ${invalidFields.join(', ')}`);
      return;
  }

  if (currentTemplate) {
      currentTemplate.name = name;
      currentTemplate.body = body;
      currentTemplate.fields = [...currentFields];
  } else {
      templates.push({ name, body, fields: [...currentFields] });
  }

  currentTemplate = null;
  currentFields = [];
  document.getElementById('templateForm').style.display = 'none';
  document.getElementById('templateName').value = '';
  document.getElementById('messageBody').value = '';
  document.getElementById('fieldList').innerHTML = '';
  renderTemplates();
}

function cancelTemplate() {
  currentTemplate = null;
  currentFields = [];
  document.getElementById('templateForm').style.display = 'none';
  document.getElementById('templateName').value = '';
  document.getElementById('messageBody').value = '';
  document.getElementById('fieldList').innerHTML = '';
}

// Initial render
renderTemplates();