"use client";

import { useState, useRef, useEffect } from "react";

var MANUSA_SYSTEM_PROMPT = "Eres mIA, el asistente virtual de Manusa por WhatsApp. Tu nombre es mIA (con la m minúscula y IA en mayúsculas).\n\nSOBRE MANUSA:\n- Fundada en 1966 por Josep Maria Guilera Nubiola\n- Sede central en Sant Cugat del Vallès, Barcelona\n- Más de 450 profesionales cualificados\n- Presencia en más de 90 países\n- Más de 50 años diseñando, fabricando, instalando y manteniendo puertas automáticas\n- Más de 20.000 accesos diseñados, fabricados, instalados y mantenidos cada año\n- Pioneros en introducir puertas automáticas en España (1972)\n- Primeros en incorporar IoT de serie en sus soluciones\n- CEO actual: José F. Medina\n- Lema: Open to the Future\n- Valores: innovación, tecnología propia, calidad, sostenibilidad, eficiencia energética, accesibilidad universal\n- Miembro de Fundación Cre100do\n\nCATÁLOGO DE PRODUCTOS:\n\n1. PUERTAS CORREDERAS:\n   - Corredera Estándar: apertura central o lateral, las más rápidas del mercado (1m/s), fabricadas en aluminio (anodizado o lacado RAL), sensores de movimiento y presencia, detección de obstáculos con reapertura automática, conexión para alarma de incendios\n   - Corredera Telescópica: ideal para entradas con limitaciones de espacio, maximiza el paso libre en huecos estrechos\n   - Corredera Curva/Semicircular: solución elegante y singular para proyectos arquitectónicos especiales\n   - Corredera con Sistema Antipánico (SOS): hojas que se abaten por empuje manual hacia el exterior en caso de emergencia, para vías de evacuación. También versión EASY SOS con vidrio desnudo sin perfiles verticales\n\n2. PUERTAS GIRATORIAS:\n   - Para tráfico medio (hoteles, edificios públicos)\n   - De gran capacidad (hospitales, supermercados, aeropuertos)\n   - De alta seguridad (edificios institucionales, bancos, laboratorios)\n   - Siempre cerradas pero siempre abiertas: máximo aislamiento térmico, acústico, sin corrientes de aire\n   - Sistema antipánico integral\n\n3. PUERTAS HERMÉTICAS (Sector Sanitario):\n   - Herméticas Correderas: sellado hermético del perímetro, clasificación Clase D (UNE-EN 12207:2017) y Clase 4 (UNE 85170:2016), para quirófanos, salas blancas, laboratorios. Descenso de 15mm hacia el suelo y aproximación de 10mm al marco\n   - Herméticas Batientes: 1 o 2 hojas, superficie lisa sin tornillería vista, bisagras ocultas, acabados en acero inoxidable o HPL, mantienen presión positiva/negativa\n   - Herméticas Acristaladas Clear View: para UCIs, salas de reanimación, preanestesia, con opción de vidrio electropolarizado\n   - Emplomadas para Radiología: bastidor aluminio, relleno PIR de alta densidad, capa de plomo 1mm por lado, acabados HPL o acero inoxidable\n   - Telescópicas abatibles para pasillos estrechos\n\n4. PUERTAS RESISTENTES AL FUEGO (Cortafuego)\n\n5. PUERTAS INDUSTRIALES\n\n6. ACCESORIOS Y CONTROL DE ACCESO\n\nTECNOLOGÍA E IoT:\n- Operador Visio+: tecnología IoT incorporada, control remoto, actualización remota del software, compatible con Doorwifi, sensor DDS (radar + infrarrojos activos), supervisión activa de seguridad\n- Doorwifi: app para gestión remota de puertas, alertas de funcionamiento, contacto con servicio técnico, registro de entradas/salidas, programación de horarios, llaveros virtuales. Incluye un año de prueba gratis\n- IoTBox+: accesorio que dota de conectividad IoT a puertas Manusa de generaciones anteriores\n- App eSAT 2.0: herramienta para técnicos, visualización y ajuste de parámetros, acceso a documentación y manuales\n- Conexión WiFi, Ethernet o 4G\n\nSECTORES:\n- Retail/Comercial: puertas correderas, giratorias\n- Sanitario/Hospitales: herméticas, emplomadas, acristaladas\n- Hotelero: giratorias, correderas de diseño\n- Aeropuertos/Transporte: alto tráfico\n- Oficinas/Corporativo: correderas, control de acceso\n- Residencial: correderas estándar y telescópicas, automatización de puertas batientes manuales\n- Edificios institucionales: alta seguridad\n\nSERVICIOS - Servicio 360:\n- Asesoramiento integral personalizado\n- Diseño y personalización (medidas, acabados, colores RAL, anodizados)\n- Fabricación con controles de calidad estrictos (cada puerta se prueba 24h)\n- Instalación por equipo propio\n- Mantenimiento preventivo y correctivo\n- Servicio técnico con cobertura nacional e internacional\n- Reparación de puertas de otras marcas también\n- Área técnica: Lunes a Viernes 8:30 a 18:00\n- Clientes con contrato de mantenimiento: prioridad en tiempos de respuesta, tarifas y descuentos en recambios\n- Resolución remota de incidencias cuando es posible\n\nSOSTENIBILIDAD Y EFICIENCIA ENERGÉTICA:\n- Las puertas más rápidas del mercado = menor tiempo abiertas = mayor ahorro energético\n- Compromiso con desarrollo responsable y minimizar impacto ambiental\n- Accesibilidad universal: paso sin barreras para personas con movilidad reducida\n\nPERSONALIDAD DE mIA:\n- Profesional pero cercano, como lo es Manusa con sus clientes\n- Transparente: siempre indica que es una IA en el primer contacto\n- Resolutivo y orientado a solucionar\n- Conciso: mensajes cortos tipo WhatsApp, no párrafos largos\n- Usa emojis con moderación y de forma profesional\n- En español por defecto, pero se adapta al idioma del usuario\n\nREGLAS:\n- En el primer mensaje, preséntate como mIA e indica que eres una IA de Manusa\n- Si piden presupuesto: recoge datos (tipo de puerta, sector, ubicación, dimensiones aproximadas, necesidades especiales) y confirma que un comercial contactará\n- Si hay urgencia técnica (puerta bloqueada, avería): ofrece escalado inmediato al SAT y recoge datos de localización y contrato\n- Si preguntan por DoorWifi o IoT: explica las ventajas y ofrece prueba gratuita\n- Si es fuera de horario (antes de 8:30 o después de 18:00 L-V, o fines de semana): indica que registras la consulta y que el equipo contactará en horario laboral, pero que tú puedes ayudar con información\n- NUNCA inventes precios concretos\n- Si no sabes algo específico, reconócelo y ofrece escalar a un humano\n- Mantén el contexto de toda la conversación\n- Si mencionan que ya son clientes: pregunta si tienen contrato de mantenimiento, para personalizar la atención\n\nIMPORTANTE - CONTEXTO PREVIO:\nEl usuario ya ha recibido un mensaje de acuse rápido tuyo antes de este mensaje completo.\nNO repitas el saludo ni el acuse. Ve directamente al contenido útil y la respuesta completa.\nNo empieces con Hola ni Buenas si ya lo dijiste en el acuse previo (lo verás en el historial).";

var ACK_SYSTEM_PROMPT = "Eres mIA, el asistente virtual de Manusa por WhatsApp.\nTu ÚNICA tarea ahora es generar un mensaje CORTO de acuse de recibo inmediato, como haría un humano en WhatsApp.\n\nREGLAS ESTRICTAS:\n- Máximo 1-2 líneas, NUNCA más\n- Saluda según la hora: Buenos días (6-13h), Buenas tardes (13-20h), Buenas noches (20-6h)\n- Si es el PRIMER mensaje de la conversación: saluda + preséntate brevemente como mIA (IA de Manusa) + acuse\n- Si NO es el primer mensaje: solo acuse, sin volver a presentarte\n- Parafrasea brevemente lo que pide el usuario para que sepa que le has entendido\n- Termina con algo como dame un momento, ahora te lo miro, un segundito, te lo busco\n- Usa un emoji como máximo\n- NO des la respuesta final, solo el acuse\n- Suena natural, cercano, humano";

var DEMO_SCENARIOS = [
  { label: "👋 Saludo inicial", message: "Hola, buenas tardes" },
  { label: "🏪 Puerta para comercio", message: "Tengo una tienda y quiero poner una puerta automática corredera, ¿qué opciones tengo?" },
  { label: "🏥 Proyecto hospitalario", message: "Estamos renovando el bloque quirúrgico del hospital y necesitamos puertas herméticas para 6 quirófanos" },
  { label: "🔧 Avería urgente", message: "Se nos ha quedado la puerta automática bloqueada abierta y no podemos cerrar el local, necesito ayuda urgente" },
  { label: "📱 Consulta Doorwifi", message: "He oído que se pueden controlar las puertas desde el móvil, ¿cómo funciona eso?" },
  { label: "💰 Presupuesto hotel", message: "Necesito un presupuesto para instalar puertas automáticas en un hotel de 4 estrellas con 150 habitaciones en Barcelona" },
  { label: "🔄 Mantenimiento", message: "Tenemos 12 puertas Manusa instaladas hace 5 años y queremos contratar el mantenimiento preventivo" },
  { label: "🕐 Fuera de horario", message: "Son las 22:00 y necesito saber qué puerta me recomendáis para un laboratorio farmacéutico" },
];

function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "10px 14px" }}>
      {[0, 1, 2].map(function(i) {
        return (
          <div key={i} style={{
            width: 7, height: 7, borderRadius: "50%", backgroundColor: "#8696a0",
            animation: "typingBounce 1.2s ease-in-out " + (i * 0.15) + "s infinite"
          }} />
        );
      })}
    </div>
  );
}

function formatTime(date) {
  return date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

function getTimeContext() {
  var h = new Date().getHours();
  if (h >= 6 && h < 13) return "mañana";
  if (h >= 13 && h < 20) return "tarde";
  return "noche";
}

function MessageBubble({ msg }) {
  var isUser = msg.role === "user";
  return (
    <div style={{
      display: "flex", justifyContent: isUser ? "flex-end" : "flex-start",
      padding: "2px 12px", animation: "fadeSlideIn 0.3s ease-out"
    }}>
      <div style={{
        maxWidth: "80%", padding: "7px 12px 8px", borderRadius: isUser ? "8px 0 8px 8px" : "0 8px 8px 8px",
        backgroundColor: isUser ? "#d9fdd3" : "#ffffff",
        boxShadow: "0 1px 1px rgba(0,0,0,0.08)", position: "relative",
        fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif", fontSize: 14.2,
        lineHeight: 1.45, color: "#111b21", wordBreak: "break-word"
      }}>
        {!isUser && msg.isFirst && (
          <div style={{ fontSize: 12.5, fontWeight: 600, color: "#4753ff", marginBottom: 2, letterSpacing: 0.2 }}>
            mIA · Manusa
          </div>
        )}
        <span style={{ whiteSpace: "pre-wrap" }}>{msg.content}</span>
        <span style={{
          float: "right", fontSize: 11, color: "#667781", marginLeft: 8, marginTop: 4,
          display: "inline-flex", alignItems: "center", gap: 3
        }}>
          {msg.time}
          {isUser && (
            <svg width="16" height="11" viewBox="0 0 16 11">
              <path d="M11.07 0.73l-7.02 7.34L1.44 5.27 0 6.72l3.56 3.56 0.49 0.48 0.49-0.48L12.5 2.18z" fill="#53bdeb"/>
              <path d="M15.07 0.73l-7.02 7.34-0.55-0.58-1.44 1.45L9.62 12.5l0.49 0.48 0.49-0.48L16.5 2.18z" fill="#53bdeb"/>
            </svg>
          )}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showPanel, setShowPanel] = useState(true);
  var chatRef = useRef(null);
  var inputRef = useRef(null);

  useEffect(function() {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, isTyping]);

  var callAPI = async function(systemPrompt, apiMessages) {
    var response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system: systemPrompt,
        messages: apiMessages,
      }),
    });
    var data = await response.json();
    return data.content ? data.content.map(function(b) { return b.text || ""; }).join("") : null;
  };

  var sendMessage = async function(text) {
    if (!text.trim() || isTyping) return;
    var userMsg = { role: "user", content: text.trim(), time: formatTime(new Date()) };
    var newMessages = messages.concat([userMsg]);
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);
    setShowPanel(false);

    var isFirstContact = !newMessages.some(function(m) { return m.role === "assistant"; });
    var apiMessages = newMessages.map(function(m) {
      return { role: m.role === "user" ? "user" : "assistant", content: m.content };
    });

    var trimmed = text.trim().toLowerCase();
    var isSimpleGreeting = /^(hola|hey|buenas?|buenos?\s*(días|tardes|noches)|qué tal|hi|hello|saludos)[\s!.,?]*$/i.test(trimmed);

    try {
      if (isSimpleGreeting) {
        await new Promise(function(r) { setTimeout(r, 400 + Math.random() * 400); });
        var reply = await callAPI(MANUSA_SYSTEM_PROMPT, apiMessages);
        setIsTyping(false);
        setMessages(function(prev) {
          return prev.concat([{
            role: "assistant",
            content: reply || "¡Hola! 👋 Soy mIA, la asistente virtual de Manusa. Soy una inteligencia artificial diseñada para ayudarte. ¿En qué puedo ayudarte?",
            time: formatTime(new Date()),
            isFirst: isFirstContact
          }]);
        });
      } else {
        var timeCtx = getTimeContext();
        var ackPromptFull = ACK_SYSTEM_PROMPT + "\n\nHora actual: " + new Date().toLocaleTimeString("es-ES") + " (" + timeCtx + ")\nEs primer contacto: " + (isFirstContact ? "SÍ" : "NO");

        var ackPromise = callAPI(ackPromptFull, apiMessages);
        var fullPromise = callAPI(MANUSA_SYSTEM_PROMPT, apiMessages);

        var ackReply = await ackPromise;
        await new Promise(function(r) { setTimeout(r, 250 + Math.random() * 300); });
        setIsTyping(false);

        var ackFallback = "Buenas " + timeCtx + " 👋" + (isFirstContact ? " Soy mIA, asistente virtual de Manusa." : "") + " Dame un momento que te busco la info.";
        var ackMsg = {
          role: "assistant",
          content: ackReply || ackFallback,
          time: formatTime(new Date()),
          isFirst: isFirstContact
        };
        setMessages(function(prev) { return prev.concat([ackMsg]); });

        await new Promise(function(r) { setTimeout(r, 400); });
        setIsTyping(true);

        var fullReply = await fullPromise;
        await new Promise(function(r) { setTimeout(r, 600 + Math.random() * 500); });
        setIsTyping(false);

        setMessages(function(prev) {
          return prev.concat([{
            role: "assistant",
            content: fullReply || "Disculpa, no he podido obtener la información. ¿Podrías repetirme tu consulta?",
            time: formatTime(new Date()),
            isFirst: false
          }]);
        });
      }
    } catch (err) {
      setIsTyping(false);
      setMessages(function(prev) {
        return prev.concat([{
          role: "assistant",
          isFirst: isFirstContact,
          content: "¡Hola! 👋 Soy mIA, la asistente virtual de Manusa. Soy una inteligencia artificial diseñada para ayudarte con cualquier consulta sobre nuestras puertas automáticas y accesos inteligentes.\n\nPuedo informarte sobre productos, servicios, tecnología Doorwifi, mantenimiento y mucho más.\n\n¿En qué puedo ayudarte?",
          time: formatTime(new Date())
        }]);
      });
    }
  };

  var handleKeyDown = function(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  var resetChat = function() {
    setMessages([]);
    setShowPanel(true);
  };

  return (
    <div style={{
      width: "100%", height: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
      fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif", padding: 16, boxSizing: "border-box"
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@keyframes typingBounce { 0%,60%,100% { transform: translateY(0); } 30% { transform: translateY(-4px); } } @keyframes fadeSlideIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } } @keyframes pulseRing { 0%,100% { box-shadow: 0 0 0 0 rgba(71,83,255,0.2), 0 20px 60px rgba(0,0,0,0.4); } 50% { box-shadow: 0 0 0 6px rgba(71,83,255,0.05), 0 20px 60px rgba(0,0,0,0.4); } } .scenario-btn { transition: all 0.2s ease !important; } .scenario-btn:hover { background: rgba(71,83,255,0.08) !important; border-color: #4753ff !important; transform: translateY(-1px); } .scenario-btn:active { transform: scale(0.98); } .send-btn:hover { filter: brightness(1.1); } .reset-btn:hover { background: rgba(255,255,255,0.12) !important; } .chat-scroll::-webkit-scrollbar { width: 5px; } .chat-scroll::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 10px; }" }} />

      <div style={{
        display: "flex", alignItems: "center", gap: 12, marginBottom: 14,
        animation: "fadeSlideIn 0.5s ease-out"
      }}>
        <div style={{
          background: "#4753ff", borderRadius: 8, padding: "5px 12px",
          display: "flex", alignItems: "center", gap: 6, boxShadow: "0 2px 12px rgba(71,83,255,0.3)"
        }}>
          <span style={{ color: "white", fontWeight: 800, fontSize: 14, letterSpacing: 1.5, fontFamily: "system-ui" }}>MANUSA</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: 0.5 }}>mIA WhatsApp Prototype</div>
      </div>

      <div style={{
        width: "100%", maxWidth: 400, height: "min(82vh, 680px)",
        borderRadius: 24, overflow: "hidden", position: "relative",
        border: "1px solid rgba(255,255,255,0.08)",
        animation: "pulseRing 5s ease-in-out infinite", display: "flex", flexDirection: "column",
        backgroundColor: "#efeae2"
      }}>
        <div style={{
          background: "linear-gradient(135deg, #075e54 0%, #128c7e 100%)",
          padding: "10px 10px", display: "flex", alignItems: "center", gap: 8,
          flexShrink: 0, borderBottom: "2px solid #4753ff"
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)" style={{ cursor: "pointer", flexShrink: 0 }} onClick={resetChat}>
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          <div style={{
            width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
            background: "#4753ff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, color: "white", fontSize: 11, letterSpacing: 1,
            fontFamily: "system-ui", border: "2px solid rgba(255,255,255,0.2)"
          }}>mIA</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: "white", fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", gap: 5 }}>
              Manusa
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#53bdeb">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>
              {isTyping ? "escribiendo..." : "mIA · Asistente IA · Open to the Future"}
            </div>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" style={{ flexShrink: 0 }}>
            <path d="M12 7a2 2 0 10-.001-4.001A2 2 0 0012 7zm0 2a2 2 0 10-.001 4.001A2 2 0 0012 9zm0 6a2 2 0 10-.001 4.001A2 2 0 0012 15z"/>
          </svg>
        </div>

        <div ref={chatRef} className="chat-scroll" style={{
          flex: 1, overflowY: "auto", paddingTop: 6, paddingBottom: 6,
          backgroundColor: "#efeae2",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='37' y='37' width='6' height='6' rx='1' fill='%23d4cfc6' opacity='0.25'/%3E%3C/svg%3E\")"
        }}>
          <div style={{
            textAlign: "center", margin: "6px 40px 10px", padding: "5px 10px",
            backgroundColor: "#fdf4c5", borderRadius: 6, fontSize: 11,
            color: "#54656f", lineHeight: 1.35
          }}>
            🔒 Demo interactiva del agente mIA de Manusa. Las respuestas son generadas por IA en tiempo real.
          </div>

          {showPanel && messages.length === 0 && (
            <div style={{ padding: "6px 10px", animation: "fadeSlideIn 0.5s ease-out" }}>
              <div style={{
                backgroundColor: "white", borderRadius: 10, padding: 12,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#4753ff", marginBottom: 2 }}>
                  Escenarios de demostración
                </div>
                <div style={{ fontSize: 11.5, color: "#667781", marginBottom: 8, lineHeight: 1.35 }}>
                  Prueba un escenario o escribe tu propio mensaje para interactuar con mIA:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {DEMO_SCENARIOS.map(function(s, i) {
                    return (
                      <button key={i} className="scenario-btn" onClick={function() { sendMessage(s.message); }} style={{
                        background: "rgba(71,83,255,0.02)", border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: 8, padding: "8px 10px", textAlign: "left", cursor: "pointer",
                        fontSize: 12.5, color: "#111b21", lineHeight: 1.3
                      }}>
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {messages.map(function(msg, i) { return <MessageBubble key={i} msg={msg} />; })}
          {isTyping && (
            <div style={{ display: "flex", padding: "2px 12px", animation: "fadeSlideIn 0.2s" }}>
              <div style={{
                backgroundColor: "#ffffff", borderRadius: "0 8px 8px 8px",
                boxShadow: "0 1px 1px rgba(0,0,0,0.08)"
              }}>
                <TypingIndicator />
              </div>
            </div>
          )}
        </div>

        <div style={{
          backgroundColor: "#f0f2f5", padding: "5px 6px", display: "flex",
          alignItems: "center", gap: 5, flexShrink: 0
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#54656f" style={{ flexShrink: 0 }}>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
          </svg>
          <input
            ref={inputRef}
            value={input}
            onChange={function(e) { setInput(e.target.value); }}
            onKeyDown={handleKeyDown}
            placeholder="Escribe un mensaje..."
            disabled={isTyping}
            style={{
              flex: 1, border: "none", outline: "none", backgroundColor: "white",
              borderRadius: 20, padding: "9px 14px", fontSize: 14, color: "#111b21",
              fontFamily: "inherit"
            }}
          />
          {input.trim() ? (
            <button className="send-btn" onClick={function() { sendMessage(input); }} disabled={isTyping} style={{
              width: 38, height: 38, borderRadius: "50%", border: "none",
              backgroundColor: "#008069", cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s"
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#54656f" style={{ flexShrink: 0 }}>
              <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
          )}
        </div>
      </div>

      <div style={{
        display: "flex", alignItems: "center", gap: 10, marginTop: 14, flexWrap: "wrap", justifyContent: "center",
        animation: "fadeSlideIn 0.7s ease-out"
      }}>
        <button className="reset-btn" onClick={resetChat} style={{
          background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 8, padding: "7px 14px", color: "rgba(255,255,255,0.6)",
          fontSize: 12, cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit"
        }}>
          ↺ Nueva conversación
        </button>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
          Manusa · Open to the Future · Powered by AI
        </div>
      </div>
    </div>
  );
}
