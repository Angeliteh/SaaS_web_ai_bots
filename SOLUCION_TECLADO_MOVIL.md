# 🔧 SOLUCIÓN COMPLETA: PROBLEMA DEL TECLADO MÓVIL

## ⚠️ PROBLEMAS IDENTIFICADOS:

### 1. **USO EXCESIVO DE `!important`** ❌

**Ubicación:** `chat-widget.css` líneas 97-99

```css
.angel-chat-window.keyboard-open {
    height: auto !important;
    max-height: calc(100vh - 60px) !important;
    bottom: 10px !important;
}
```

**Por qué es malo:**
- `!important` sobrescribe TODOS los estilos, incluso los inline del JavaScript
- El JavaScript intenta ajustar `height` y `bottom` dinámicamente pero es bloqueado
- Crea un conflicto CSS vs JavaScript
- Es una mala práctica y debe evitarse siempre que sea posible

**Solución:**
```css
/* ELIMINAR !important */
.angel-chat-window.keyboard-open {
    bottom: 10px; /* Sin !important */
    /* height se controla desde JS */
}
```

---

### 2. **ESTILOS DUPLICADOS** ❌

**Ubicación:** `chat-widget.css` líneas 64-80 y 127-135

```css
/* Primera definición */
.angel-chat-window {
  position: fixed;
  right: 20px;
  /* ... */
}

/* Segunda definición (DUPLICADO) */
.angel-chat-window {
  opacity: 0;
  transform: scale(0.7);
  /* ... */
}
```

**Por qué es malo:**
- Dos bloques del mismo selector causan confusión
- El navegador debe procesar ambos
- Puede causar comportamientos inesperados
- Dificulta el mantenimiento

**Solución:**
```css
/* UNIFICAR en un solo bloque */
.angel-chat-window {
  position: fixed;
  right: 20px;
  /* ... todos los estilos juntos ... */
  opacity: 0;
  transform: scale(0.7) translateY(60px);
  transition: opacity 0.35s, transform 0.35s;
}
```

---

### 3. **SCROLL AUTOMÁTICO AGRESIVO** ❌

**Ubicación:** `chat-widget.js` líneas 188-190, 236

```javascript
setTimeout(() => {
    messagesEl.scrollTop = messagesEl.scrollHeight;
}, 150);
```

**Por qué causa problemas:**
- Se ejecuta CADA VEZ que el teclado aparece
- Causa que el chat "salte" desproporcionadamente
- En Edge es más agresivo que en Chrome
- Mueve el viewport completo, no solo el área de mensajes

**Solución:**
```javascript
// Scroll suave y condicional
function scrollToBottom(smooth = true) {
    if (smooth) {
        messagesEl.scrollTo({
            top: messagesEl.scrollHeight,
            behavior: 'smooth'
        });
    } else {
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }
}

// Solo hacer scroll cuando se envía un mensaje, NO cuando aparece el teclado
```

---

### 4. **CLASE `.keyboard-open` NO SE USA** ❌

**Problema:**
- CSS define `.angel-chat-window.keyboard-open`
- JavaScript NUNCA agrega esta clase
- Solo modifica estilos inline

**Solución:**
```javascript
// Agregar/remover clase en lugar de estilos inline
if (heightDiff > 150) {
    win.classList.add('keyboard-open');
} else {
    win.classList.remove('keyboard-open');
}
```

---

### 5. **DIFERENCIAS ENTRE NAVEGADORES** ⚠️

**Chrome:**
- Maneja Visual Viewport API bien
- El scroll es más estable
- El chat queda "atrás" del teclado (comportamiento esperado)

**Edge:**
- Visual Viewport API menos estable
- El scroll es más agresivo
- El chat se mueve desproporcionadamente

**Solución:**
- Detectar navegador y ajustar comportamiento
- Usar diferentes estrategias según el navegador

---

## ✅ SOLUCIÓN COMPLETA:

### **PASO 1: Reemplazar CSS**

Reemplaza el contenido de `css/chat-widget.css` con `css/chat-widget-fixed.css`

**Cambios clave:**
- ❌ Eliminado `!important`
- ✅ Unificado estilos duplicados
- ✅ Agregado `flex-shrink: 0` a header e input
- ✅ Agregado `scroll-behavior: smooth`
- ✅ Mejorado responsive sin conflictos

---

### **PASO 2: Corregir JavaScript**

Modifica `js/chat-widget.js` líneas 167-249:

```javascript
// Ajustar alto del chat dinámicamente en móvil cuando aparece el teclado
if (isMobile()) {
    let keyboardOpen = false;
    const initialViewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    
    // Detectar navegador
    const isEdge = /Edg/.test(navigator.userAgent);
    const isChrome = /Chrome/.test(navigator.userAgent) && !isEdge;
    
    // Usar Visual Viewport API si está disponible
    if (window.visualViewport) {
        function handleViewportResize() {
            const viewportHeight = window.visualViewport.height;
            const windowHeight = window.innerHeight;
            const heightDiff = windowHeight - viewportHeight;
            
            // Si hay una diferencia significativa, el teclado está abierto
            if (heightDiff > 150) {
                if (!keyboardOpen) {
                    keyboardOpen = true;
                    win.classList.add('keyboard-open');
                    
                    // Calcular altura disponible
                    const availableHeight = viewportHeight - 20;
                    const newHeight = Math.min(availableHeight, 550);
                    
                    // Aplicar altura sin !important
                    win.style.height = newHeight + "px";
                    win.style.maxHeight = newHeight + "px";
                    
                    // NO hacer scroll automático aquí
                    // Solo cuando se envía un mensaje
                }
            } else if (keyboardOpen && heightDiff < 50) {
                // Teclado cerrado
                keyboardOpen = false;
                win.classList.remove('keyboard-open');
                
                // Restaurar altura original
                win.style.height = "";
                win.style.maxHeight = "";
                win.style.bottom = "";
            }
        }
        
        window.visualViewport.addEventListener("resize", handleViewportResize);
        
        // En Edge, también escuchar scroll
        if (isEdge) {
            window.visualViewport.addEventListener("scroll", handleViewportResize);
        }
    } else {
        // Fallback para navegadores sin Visual Viewport API
        function adjustChatHeight() {
            const currentHeight = window.innerHeight;
            const heightDiff = initialViewportHeight - currentHeight;
            
            if (heightDiff > 150) {
                if (!keyboardOpen) {
                    keyboardOpen = true;
                    win.classList.add('keyboard-open');
                    
                    const availableHeight = currentHeight - 40;
                    const newHeight = Math.min(availableHeight, 550);
                    
                    win.style.height = newHeight + "px";
                    win.style.maxHeight = newHeight + "px";
                }
            } else if (keyboardOpen) {
                keyboardOpen = false;
                win.classList.remove('keyboard-open');
                
                win.style.height = "";
                win.style.maxHeight = "";
                win.style.bottom = "";
            }
        }
        
        window.addEventListener("resize", adjustChatHeight);
    }
    
    // Cuando el input recibe focus
    inputEl.addEventListener("focus", () => {
        // Pequeño delay para que el teclado aparezca primero
        setTimeout(() => {
            if (window.visualViewport && !keyboardOpen) {
                const viewportHeight = window.visualViewport.height;
                const availableHeight = viewportHeight - 20;
                const newHeight = Math.min(availableHeight, 550);
                
                win.style.height = newHeight + "px";
                win.style.maxHeight = newHeight + "px";
            }
            
            // NO hacer scroll automático en focus
            // Solo si el usuario está escribiendo
        }, isEdge ? 400 : 300); // Más delay en Edge
    });
    
    // Cuando pierde focus
    inputEl.addEventListener("blur", () => {
        setTimeout(() => {
            if (!keyboardOpen) {
                win.style.height = "";
                win.style.maxHeight = "";
                win.style.bottom = "";
            }
        }, 150);
    });
}

// Función para hacer scroll suave (solo cuando se envía mensaje)
function scrollToLastMessage(smooth = true) {
    if (smooth) {
        messagesEl.scrollTo({
            top: messagesEl.scrollHeight,
            behavior: 'smooth'
        });
    } else {
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }
}

// Llamar scrollToLastMessage() SOLO cuando:
// 1. Se envía un mensaje
// 2. Se recibe una respuesta del bot
// NO cuando aparece el teclado
```

---

## 📋 CHECKLIST DE CORRECCIONES:

### **CSS:**
- [ ] Eliminar TODOS los `!important`
- [ ] Unificar bloques `.angel-chat-window` duplicados
- [ ] Agregar `flex-shrink: 0` a header e input
- [ ] Agregar `scroll-behavior: smooth` a messages
- [ ] Verificar que no haya otros duplicados

### **JavaScript:**
- [ ] Agregar/remover clase `.keyboard-open` en lugar de solo inline styles
- [ ] Detectar navegador (Edge vs Chrome)
- [ ] Ajustar delays según navegador
- [ ] Eliminar scroll automático en focus/resize
- [ ] Solo hacer scroll cuando se envía/recibe mensaje
- [ ] Usar `scrollTo({ behavior: 'smooth' })`

### **Testing:**
- [ ] Probar en Chrome móvil
- [ ] Probar en Edge móvil
- [ ] Probar en Safari iOS
- [ ] Verificar que el chat no se salga de la pantalla
- [ ] Verificar que el scroll sea suave
- [ ] Verificar que el teclado no cause "saltos"

---

## 🎯 COMPORTAMIENTO ESPERADO:

### **Cuando el teclado aparece:**
1. ✅ El chat reduce su altura para ajustarse al viewport
2. ✅ El chat se mantiene visible (no se va fuera de la pantalla)
3. ✅ NO hace scroll automático
4. ✅ El input queda visible y accesible

### **Cuando se envía un mensaje:**
1. ✅ El mensaje se agrega al chat
2. ✅ Hace scroll suave al último mensaje
3. ✅ El chat mantiene su altura ajustada

### **Cuando el teclado se cierra:**
1. ✅ El chat vuelve a su altura original
2. ✅ El chat vuelve a su posición original
3. ✅ Transición suave

---

## 🔑 CONCEPTOS CLAVE:

### **1. Visual Viewport API**
```javascript
window.visualViewport.height  // Altura visible (excluye teclado)
window.innerHeight             // Altura total (incluye teclado)
```

### **2. Diferencia = Teclado abierto**
```javascript
const diff = window.innerHeight - window.visualViewport.height;
if (diff > 150) {
    // Teclado está abierto
}
```

### **3. NO usar `!important`**
```css
/* ❌ MAL */
height: 500px !important;

/* ✅ BIEN */
height: 500px;
```

### **4. Usar clases en lugar de inline styles**
```javascript
// ❌ MAL
element.style.height = "500px";

// ✅ MEJOR
element.classList.add('keyboard-open');
// Y controlar con CSS
```

### **5. Scroll condicional**
```javascript
// ❌ MAL: Scroll en CADA evento
inputEl.addEventListener('focus', () => {
    scrollToBottom(); // Causa saltos
});

// ✅ BIEN: Scroll solo cuando es necesario
function sendMessage() {
    // ... enviar mensaje ...
    scrollToBottom(); // Solo aquí
}
```

---

## 📊 COMPARACIÓN ANTES/DESPUÉS:

| Aspecto | Antes ❌ | Después ✅ |
|---------|---------|-----------|
| **!important** | 3 usos | 0 usos |
| **Duplicados** | 2 bloques | 1 bloque |
| **Scroll auto** | En focus/resize | Solo en send |
| **Clase keyboard** | No se usa | Se usa |
| **Edge compatible** | Problemas | Funciona |
| **Chrome compatible** | Funciona | Funciona mejor |

---

## ⚡ IMPLEMENTACIÓN RÁPIDA:

1. **Backup actual:**
   ```bash
   cp css/chat-widget.css css/chat-widget-backup.css
   cp js/chat-widget.js js/chat-widget-backup.js
   ```

2. **Reemplazar CSS:**
   ```bash
   cp css/chat-widget-fixed.css css/chat-widget.css
   ```

3. **Modificar JavaScript:**
   - Abrir `js/chat-widget.js`
   - Reemplazar líneas 167-249 con el código corregido arriba

4. **Probar:**
   - Abrir en móvil (Chrome y Edge)
   - Verificar comportamiento del teclado
   - Ajustar delays si es necesario

---

## 🎓 LECCIONES APRENDIDAS:

1. **NUNCA usar `!important` a menos que sea absolutamente necesario**
2. **NO duplicar selectores CSS**
3. **Usar clases para estados, no solo inline styles**
4. **Scroll automático debe ser condicional y suave**
5. **Detectar navegador para ajustar comportamiento**
6. **Visual Viewport API es tu amigo en móvil**
7. **Testear en múltiples navegadores móviles**

---

## 📞 SOPORTE:

Si después de implementar estos cambios sigues teniendo problemas:

1. Verifica que NO haya otros estilos CSS sobrescribiendo
2. Revisa la consola del navegador por errores
3. Prueba deshabilitando el scroll automático completamente
4. Ajusta los delays (300ms, 400ms, etc.)
5. Considera usar `position: absolute` en lugar de `fixed` en móvil

---

**🎉 ¡Con estos cambios, el chat widget debería funcionar perfectamente en todos los navegadores móviles!**
