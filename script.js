// Firebase Initialization
     const firebaseConfig = {
       apiKey: "AIzaSyAmF1OHvCf7e1kXFPQUIiUM59UwUxVobBc",
       authDomain: "royalemailtemplate.firebaseapp.com",
       projectId: "royalemailtemplate",
       storageBucket: "royalemailtemplate.firebasestorage.app",
       messagingSenderId: "119850672162",
       appId: "1:119850672162:web:95c9f7a4cca3e8f20cea7b"
     };

     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     const db = firebase.firestore();

     let isAdmin = false;
     let currentTemplate = null;
     let currentFields = [];

     async function fetchTemplates() {
         const snapshot = await db.collection('templates').get();
         return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
     }

     async function saveTemplateToFirestore(template) {
         if (template.id) {
             await db.collection('templates').doc(template.id).update({
                 name: template.name,
                 body: template.body,
                 fields: template.fields
             });
         } else {
             await db.collection('templates').add({
                 name: template.name,
                 body: template.body,
                 fields: template.fields
             });
         }
     }

     async function editTemplate(templateId) {
         const doc = await db.collection('templates').doc(templateId).get();
         if (doc.exists) {
             currentTemplate = { id: doc.id, ...doc.data() };
             currentFields = [...currentTemplate.fields];
             document.getElementById('templateName').value = currentTemplate.name;
             document.getElementById('messageBody').value = currentTemplate.body;
             renderFields();
             document.getElementById('templateForm').style.display = 'block';
         }
     }

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

     async function renderTemplates() {
         const templates = await fetchTemplates();
         const publicList = document.getElementById('publicTemplateList');
         const adminList = document.getElementById('adminTemplateList');
         publicList.innerHTML = '';
         adminList.innerHTML = '';

         templates.forEach((template) => {
             const publicCard = document.createElement('div');
             publicCard.className = 'template-card';
             publicCard.innerHTML = `<h3>${template.name}</h3><button onclick="openTemplateFieldsModal('${template.id}')">Use Template</button>`;
             publicList.appendChild(publicCard);

             if (isAdmin) {
                 const adminCard = document.createElement('div');
                 adminCard.className = 'template-card';
                 adminCard.innerHTML = `<h3>${template.name}</h3><button onclick="editTemplate('${template.id}')">Edit</button>`;
                 adminList.appendChild(adminCard);
             }
         });
     }

     async function openTemplateFieldsModal(templateId) {
         const doc = await db.collection('templates').doc(templateId).get();
         if (doc.exists) {
             currentTemplate = { id: doc.id, ...doc.data() };
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
         const rawEmailBody = emailBody;
         emailBody = emailBody.replace(/\n/g, '<br>');
         const generatedEmailContent = document.getElementById('generatedEmailContent');
         generatedEmailContent.innerHTML = emailBody;
         generatedEmailContent.dataset.raw = rawEmailBody;
         document.getElementById('templateFieldsModal').style.display = 'none';
         document.getElementById('generatedEmailModal').style.display = 'flex';
     }

     function copyEmailContent() {
         const rawContent = document.getElementById('generatedEmailContent').dataset.raw;
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
         const plainText = rawContent.replace(/<[^>]+>/g, '').replace(/\n\n+/g, '\n\n');
         
         const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
         const textBlob = new Blob([plainText], { type: 'text/plain' });
         const clipboardItem = new ClipboardItem({
             'text/html': htmlBlob,
             'text/plain': textBlob
         });
         
         navigator.clipboard.write([clipboardItem]).then(() => {
             alert('Email content copied to clipboard! Paste directly into Gmail.');
         }).catch(err => {
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

     function addField() {
         const fieldInput = document.getElementById('fieldInput').value.trim();
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

         const template = {
             id: currentTemplate ? currentTemplate.id : null,
             name,
             body,
             fields: [...currentFields]
         };

         saveTemplateToFirestore(template).then(() => {
             currentTemplate = null;
             currentFields = [];
             document.getElementById('templateForm').style.display = 'none';
             document.getElementById('templateName').value = '';
             document.getElementById('messageBody').value = '';
             document.getElementById('fieldList').innerHTML = '';
             renderTemplates();
         }).catch(err => {
             alert('Failed to save template: ' + err);
         });
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
