/**
 * VERSIÓN DE DIAGNÓSTICO - Google Apps Script para FORMULARIO DE CONTACTO
 * Este script incluye logs detallados para identificar el problema
 */

// ⚠️ REEMPLAZA ESTO CON TU SPREADSHEET ID
const SPREADSHEET_ID = '1zgwHGU4ePGc_2iHCBy47-8jVy2K_Eq5H44lXLKis0Lw';
const SHEET_NAME = 'Contactos';
const NOTIFICATION_EMAIL = 'analisameme123@gmail.com'; // Tu email

function doPost(e) {
  try {
    Logger.log('=== INICIO DEL SCRIPT ===');
    
    // Parsear datos recibidos
    Logger.log('1. Parseando datos...');
    const data = JSON.parse(e.postData.contents);
    Logger.log('Datos recibidos: ' + JSON.stringify(data));
    
    // Abrir la hoja específica por ID
    Logger.log('2. Abriendo spreadsheet con ID: ' + SPREADSHEET_ID);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    Logger.log('Spreadsheet abierto: ' + ss.getName());
    
    // Listar todas las hojas disponibles
    const allSheets = ss.getSheets();
    Logger.log('Hojas disponibles en el spreadsheet:');
    allSheets.forEach(function(s) {
      Logger.log('  - ' + s.getName());
    });
    
    // Buscar la hoja
    Logger.log('3. Buscando hoja con nombre: "' + SHEET_NAME + '"');
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // Si la hoja no existe, crearla con encabezados
    if (!sheet) {
      Logger.log('⚠️ La hoja "' + SHEET_NAME + '" NO existe. Creándola...');
      sheet = ss.insertSheet(SHEET_NAME);
      Logger.log('✅ Hoja creada: ' + sheet.getName());
      
      const headers = ['Fecha/Hora', 'Nombre', 'Email', 'Mensaje', 'Estado'];
      sheet.appendRow(headers);
      Logger.log('✅ Encabezados agregados: ' + headers.join(', '));
      
      // Formatear encabezados
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#667eea');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
      sheet.setFrozenRows(1);
      Logger.log('✅ Formato aplicado a encabezados');
    } else {
      Logger.log('✅ Hoja encontrada: ' + sheet.getName());
      Logger.log('Última fila con datos: ' + sheet.getLastRow());
    }
    
    // Preparar datos para insertar
    Logger.log('4. Preparando datos para insertar...');
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.nombre || '',
      data.email || '',
      data.mensaje || '',
      'Nuevo'
    ];
    Logger.log('Datos a insertar: ' + JSON.stringify(rowData));
    
    // Insertar datos en la hoja
    Logger.log('5. Insertando datos en la hoja...');
    const lastRowBefore = sheet.getLastRow();
    Logger.log('Última fila antes de insertar: ' + lastRowBefore);
    
    sheet.appendRow(rowData);
    
    const lastRowAfter = sheet.getLastRow();
    Logger.log('Última fila después de insertar: ' + lastRowAfter);
    
    if (lastRowAfter > lastRowBefore) {
      Logger.log('✅ Datos insertados correctamente en la fila ' + lastRowAfter);
    } else {
      Logger.log('❌ ERROR: Los datos NO se insertaron');
    }
    
    // Aplicar formato a la nueva fila
    Logger.log('6. Aplicando formato...');
    const lastRow = sheet.getLastRow();
    const dataRange = sheet.getRange(lastRow, 1, 1, rowData.length);
    dataRange.setBorder(true, true, true, true, false, false);
    
    // Alternar color de fila
    if (lastRow % 2 === 0) {
      dataRange.setBackground('#f8f9fa');
    }
    Logger.log('✅ Formato aplicado');
    
    // Ajustar ancho de columnas
    Logger.log('7. Ajustando ancho de columnas...');
    for (let i = 1; i <= rowData.length; i++) {
      sheet.autoResizeColumn(i);
    }
    Logger.log('✅ Columnas ajustadas');
    
    // Enviar email de notificación (comentado por ahora)
    // Logger.log('8. Enviando email de notificación...');
    // sendNotificationEmail(data);
    // Logger.log('✅ Email enviado');
    
    Logger.log('=== SCRIPT COMPLETADO EXITOSAMENTE ===');
    
    // Respuesta exitosa
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Datos recibidos correctamente',
      timestamp: timestamp.toISOString(),
      insertedRow: lastRow,
      sheetName: sheet.getName()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log del error
    Logger.log('❌ ERROR CRÍTICO: ' + error.toString());
    Logger.log('Stack trace: ' + error.stack);
    
    // Respuesta de error
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString(),
      stack: error.stack
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Función de prueba mejorada
 */
function testScript() {
  Logger.log('=== EJECUTANDO FUNCIÓN DE PRUEBA ===');
  
  const testData = {
    postData: {
      contents: JSON.stringify({
        nombre: 'Test Usuario DEBUG',
        email: 'test@debug.com',
        mensaje: 'Este es un mensaje de prueba con logs detallados'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log('=== RESULTADO ===');
  Logger.log(result.getContent());
  
  Logger.log('=== AHORA VE A TU GOOGLE SHEET ===');
  Logger.log('URL: https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID);
}

/**
 * Función para verificar el spreadsheet
 */
function verifySpreadsheet() {
  Logger.log('=== VERIFICANDO SPREADSHEET ===');
  
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    Logger.log('✅ Spreadsheet encontrado: ' + ss.getName());
    Logger.log('URL: ' + ss.getUrl());
    
    const sheets = ss.getSheets();
    Logger.log('Número de hojas: ' + sheets.length);
    
    sheets.forEach(function(sheet, index) {
      Logger.log('Hoja ' + (index + 1) + ':');
      Logger.log('  Nombre: ' + sheet.getName());
      Logger.log('  Última fila: ' + sheet.getLastRow());
      Logger.log('  Última columna: ' + sheet.getLastColumn());
    });
    
    // Buscar hoja "Contactos"
    const contactSheet = ss.getSheetByName(SHEET_NAME);
    if (contactSheet) {
      Logger.log('✅ Hoja "' + SHEET_NAME + '" encontrada');
      Logger.log('Datos en la hoja:');
      const data = contactSheet.getDataRange().getValues();
      data.forEach(function(row, index) {
        Logger.log('Fila ' + (index + 1) + ': ' + JSON.stringify(row));
      });
    } else {
      Logger.log('❌ Hoja "' + SHEET_NAME + '" NO encontrada');
    }
    
  } catch (error) {
    Logger.log('❌ ERROR: ' + error.toString());
  }
}

/**
 * Enviar email de notificación
 */
function sendNotificationEmail(data) {
  const subject = `📧 Nuevo Mensaje de Contacto - ${data.nombre}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0;">📧 Nuevo Mensaje de Contacto</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #667eea;">Información del Contacto</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: white;">
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Nombre:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.nombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #e0e0e0;">${data.email}</td>
          </tr>
        </table>
        
        <h3 style="color: #667eea; margin-top: 30px;">Mensaje</h3>
        <p style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
          ${data.mensaje}
        </p>
        
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
    Logger.log('Error enviando email: ' + error.toString());
  }
}
