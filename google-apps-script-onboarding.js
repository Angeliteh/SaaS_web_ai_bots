/**
 * Google Apps Script para recibir datos de CLIENTES (Pre-Pago + Post-Pago)
 * 
 * INSTRUCCIONES DE CONFIGURACIÓN:
 * 
 * 1. Ve a https://script.google.com/
 * 2. Crea un nuevo proyecto llamado "BotFlow AI - Clientes"
 * 3. Copia y pega este código
 * 4. Crea una nueva hoja de cálculo de Google Sheets llamada "Clientes BotFlow"
 * 5. En el código, reemplaza SPREADSHEET_ID con el ID de tu hoja
 * 6. Despliega como Web App:
 *    - Ejecutar como: Tu cuenta
 *    - Acceso: Cualquiera
 * 7. Copia la URL del Web App y reemplázala en templatemo-nexus-scripts.js
 * 
 * FLUJO:
 * 1. Cliente llena formulario → Datos guardados (sin subscription ID)
 * 2. Cliente paga → Actualiza fila con subscription ID
 * 
 * ESTRUCTURA DE LA HOJA:
 * La hoja "Clientes" tendrá las siguientes columnas:
 * A: Fecha/Hora | B: Nombre | C: Email | D: Teléfono | E: Empresa
 * F: Plataforma | G: Giro | H: Descripción | I: Plan | J: Precio
 * K: Subscription ID | L: Estado Pago | M: Fecha Pago | N: Estado Proyecto | O: Notas
 */

// ⚠️ REEMPLAZA ESTO CON EL ID DE TU GOOGLE SHEET
const SPREADSHEET_ID = '1SxGp_PyRuOpTple0pV50eGVVrez-oweoz4BDHMHgZU4';
const SHEET_NAME = 'Clientes';

// Email para notificaciones (tu email)
const NOTIFICATION_EMAIL = 'tu-email@gmail.com';

function doPost(e) {
  try {
    // Parsear datos recibidos
    const data = JSON.parse(e.postData.contents);
    
    // Obtener o crear la hoja
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // Si la hoja no existe, crearla con encabezados
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      const headers = [
        'Fecha/Hora',
        'Nombre',
        'Email',
        'Teléfono',
        'Empresa',
        'Plataforma',
        'Giro',
        'Descripción',
        'Plan',
        'Precio',
        'Subscription ID',
        'Estado Pago',
        'Fecha Pago',
        'Estado Proyecto',
        'Notas'
      ];
      sheet.appendRow(headers);
      
      // Formatear encabezados
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#667eea');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
      sheet.setFrozenRows(1);
    }
    
    // Verificar si ya existe un registro con este email
    const emailColumn = 3; // Columna C (Email)
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    let existingRow = -1;
    
    for (let i = 1; i < values.length; i++) {
      if (values[i][emailColumn - 1] === data.email) {
        existingRow = i + 1; // +1 porque las filas empiezan en 1
        break;
      }
    }
    
    const timestamp = new Date();
    
    // Si tiene subscription ID, es un pago completado
    if (data.subscriptionId && existingRow > 0) {
      // Actualizar fila existente con subscription ID
      sheet.getRange(existingRow, 11).setValue(data.subscriptionId); // Subscription ID
      sheet.getRange(existingRow, 12).setValue('Completado'); // Estado Pago
      sheet.getRange(existingRow, 13).setValue(timestamp); // Fecha Pago
      sheet.getRange(existingRow, 14).setValue('Pendiente'); // Estado Proyecto
      
      // Enviar notificación de pago completado
      sendPaymentConfirmedEmail(data);
      
    } else if (!data.subscriptionId) {
      // Es un formulario pre-pago, crear nueva fila
      const rowData = [
        timestamp,
        data.nombre || '',
        data.email || '',
        data.telefono || '',
        data.empresa || '',
        data.plataforma || '',
        data.giro || '',
        data.descripcion || '',
        data.plan || 'Estándar',
        data.precio || 'MXN $700/mes',
        '', // Subscription ID vacío
        'Pendiente', // Estado Pago
        '', // Fecha Pago vacía
        'En Espera de Pago', // Estado Proyecto
        '' // Notas vacías
      ];
      
      // Insertar datos en la hoja
      sheet.appendRow(rowData);
      
      // Aplicar formato a la nueva fila
      const lastRow = sheet.getLastRow();
      const newDataRange = sheet.getRange(lastRow, 1, 1, rowData.length);
      newDataRange.setBorder(true, true, true, true, false, false);
      
      // Alternar color de fila
      if (lastRow % 2 === 0) {
        newDataRange.setBackground('#f8f9fa');
      }
      
      // Enviar email de notificación (lead capturado)
      sendLeadCapturedEmail(data);
    }
    
    // Ajustar ancho de columnas automáticamente
    for (let i = 1; i <= 15; i++) {
      sheet.autoResizeColumn(i);
    }
    
    // Respuesta exitosa
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Datos recibidos correctamente',
      timestamp: timestamp.toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log del error
    Logger.log('Error: ' + error.toString());
    
    // Respuesta de error
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Enviar email cuando se captura un lead (formulario pre-pago)
 */
function sendLeadCapturedEmail(data) {
  const subject = `🎯 Nuevo Lead Capturado - ${data.empresa}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0;">🎯 Nuevo Lead Capturado</h1>
        <p style="color: white; margin: 10px 0 0 0;">Cliente completó formulario - Pendiente de pago</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <div style="background: #fff3cd; border: 2px solid #ffc107; border-radius: 10px; padding: 15px; margin-bottom: 20px;">
          <p style="color: #856404; margin: 0; font-weight: bold;">⚠️ PENDIENTE DE PAGO - El cliente aún no ha completado el pago en PayPal</p>
        </div>
        
        <h2 style="color: #667eea;">Información del Cliente</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: white;">
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Nombre:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.nombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.email}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Teléfono:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.telefono}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Empresa:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.empresa}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Giro:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.giro}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Plataforma:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.plataforma}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Plan:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.plan}</td>
          </tr>
        </table>
        
        <h3 style="color: #667eea; margin-top: 30px;">Descripción del Negocio</h3>
        <p style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
          ${data.descripcion}
        </p>
        
        <div style="margin-top: 30px; padding: 20px; background: #ffc107; border-radius: 5px; text-align: center;">
          <p style="color: #000; margin: 0; font-weight: bold;">
            ⏳ Esperando confirmación de pago de PayPal
          </p>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
          <a href="https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}" 
             style="display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            📊 Ver en Google Sheets
          </a>
        </div>
      </div>
    </div>
  `;
  
  try {
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });
  } catch (error) {
    Logger.log('Error enviando email de lead capturado: ' + error.toString());
  }
}

/**
 * Enviar email cuando se confirma el pago
 */
function sendPaymentConfirmedEmail(data) {
  const subject = `🎉 Nuevo Cliente Onboarding - ${data.empresa}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0;">🎉 Nuevo Cliente Registrado</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #667eea;">Información del Cliente</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: white;">
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Subscription ID:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.subscriptionId}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Nombre:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.nombre}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Teléfono:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.telefono}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Empresa:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.empresa}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Giro:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.giro}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Plataforma:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.plataforma}</td>
          </tr>
        </table>
        
        <h3 style="color: #667eea; margin-top: 30px;">Descripción del Negocio</h3>
        <p style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
          ${data.descripcion}
        </p>
        
        <h3 style="color: #667eea;">Objetivos del Bot</h3>
        <p style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
          ${data.objetivos}
        </p>
        
        ${data.faqs ? `
          <h3 style="color: #667eea;">FAQs del Cliente</h3>
          <p style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
            ${data.faqs}
          </p>
        ` : ''}
        
        <div style="margin-top: 30px; padding: 20px; background: #667eea; border-radius: 5px; text-align: center;">
          <p style="color: white; margin: 0; font-weight: bold;">
            ⏰ Tiempo de entrega: 2-4 días hábiles
          </p>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
          <a href="https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}" 
             style="display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            📊 Ver en Google Sheets
          </a>
        </div>
      </div>
    </div>
  `;
  
  try {
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });
  } catch (error) {
    Logger.log('Error enviando email de notificación: ' + error.toString());
  }
}

/**
 * Enviar email de confirmación al cliente
 */
function sendClientConfirmationEmail(data) {
  const subject = '✅ Confirmación de Registro - BotFlow AI';
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0;">¡Gracias por tu compra!</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <p style="font-size: 16px; color: #333;">Hola <strong>${data.nombre}</strong>,</p>
        
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hemos recibido correctamente tu información y tu suscripción está activa. 
          Comenzaremos a configurar tu bot personalizado de inmediato.
        </p>
        
        <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #667eea; margin: 20px 0;">
          <h3 style="color: #667eea; margin-top: 0;">📋 Resumen de tu Solicitud</h3>
          <p style="margin: 5px 0;"><strong>Empresa:</strong> ${data.empresa}</p>
          <p style="margin: 5px 0;"><strong>Plataforma:</strong> ${data.plataforma}</p>
          <p style="margin: 5px 0;"><strong>Subscription ID:</strong> ${data.subscriptionId}</p>
        </div>
        
        <h3 style="color: #667eea;">🚀 Próximos Pasos</h3>
        
        <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #667eea;">
          <strong style="color: #667eea;">Día 1:</strong> Revisión de tu información y configuración inicial
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #667eea;">
          <strong style="color: #667eea;">Día 2-3:</strong> Entrenamiento del bot con tu contenido
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #667eea;">
          <strong style="color: #667eea;">Día 4:</strong> Pruebas finales y entrega
        </div>
        
        <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
          <p style="margin: 0; color: #2e7d32; font-weight: bold;">
            ✅ Te contactaremos en menos de 24 horas para confirmar los detalles
          </p>
        </div>
        
        <p style="font-size: 14px; color: #666; margin-top: 30px;">
          Si tienes alguna pregunta, no dudes en responder a este email o contactarnos en:
        </p>
        
        <p style="text-align: center; margin: 20px 0;">
          <a href="mailto:contacto@botsaiservices.online" style="color: #667eea; text-decoration: none; font-weight: bold;">
            📧 contacto@botsaiservices.online
          </a>
        </p>
        
        <div style="border-top: 2px solid #e0e0e0; margin-top: 30px; padding-top: 20px; text-align: center;">
          <p style="color: #999; font-size: 12px; margin: 0;">
            BotFlow AI - Automatización Inteligente para tu Negocio
          </p>
          <p style="color: #999; font-size: 12px; margin: 5px 0;">
            <a href="https://botsaiservices.online" style="color: #667eea; text-decoration: none;">
              botsaiservices.online
            </a>
          </p>
        </div>
      </div>
    </div>
  `;
  
  try {
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      htmlBody: htmlBody,
      replyTo: NOTIFICATION_EMAIL
    });
  } catch (error) {
    Logger.log('Error enviando email de confirmación al cliente: ' + error.toString());
  }
}

/**
 * Función de prueba (ejecutar manualmente para probar)
 */
function testScript() {
  const testData = {
    subscriptionId: 'TEST-123456',
    nombre: 'Juan Pérez',
    email: 'juan@ejemplo.com',
    telefono: '+52 123 456 7890',
    empresa: 'Mi Empresa Test',
    giro: 'ecommerce',
    descripcion: 'Vendemos productos online',
    plataforma: 'web, messenger',
    sitioWeb: 'https://www.ejemplo.com',
    objetivos: 'Responder FAQs y capturar leads',
    faqs: '¿Cuál es el horario? ¿Hacen envíos?',
    tono: 'casual',
    horario: 'Lun-Vie 9am-6pm',
    idioma: 'es',
    comentarios: 'Necesito el bot lo antes posible'
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  Logger.log(result.getContent());
}
