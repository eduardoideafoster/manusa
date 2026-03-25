# mIA — Manusa AI WhatsApp Prototype

Prototipo funcional del agente conversacional **mIA** de Manusa, simulando una experiencia WhatsApp con respuestas en tiempo real powered by Claude (Anthropic).

## 🚀 Deploy en Vercel (5 minutos)

### Paso 1: Prepara el proyecto

```bash
git init
git add .
git commit -m "mIA Manusa prototype"
```

### Paso 2: Sube a GitHub

1. Crea un repositorio nuevo en github.com (privado recomendado)
2. Conecta y sube:

```bash
git remote add origin https://github.com/TU-USUARIO/manusa-mia-demo.git
git push -u origin main
```

### Paso 3: Deploy en Vercel

1. Ve a [vercel.com](https://vercel.com) y logueate con GitHub
2. Click en **"Add New Project"**
3. Importa el repositorio `manusa-mia-demo`
4. En **Environment Variables**, añade:
   - Key: `ANTHROPIC_API_KEY`
   - Value: tu API key de Anthropic (empieza por `sk-ant-...`)
5. Click en **Deploy**

¡Listo! En ~1 minuto tendrás una URL tipo `manusa-mia-demo.vercel.app`

### Paso 4 (opcional): Dominio personalizado

En Vercel > Settings > Domains puedes añadir un dominio como `mia.manusa.com`

---

## 🖥️ Desarrollo local

```bash
# 1. Instala dependencias
npm install

# 2. Configura tu API key
cp .env.local.example .env.local
# Edita .env.local y pon tu ANTHROPIC_API_KEY

# 3. Arranca el servidor
npm run dev

# 4. Abre http://localhost:3000
```

---

## 📁 Estructura

```
manusa-mia-demo/
├── app/
│   ├── layout.js          # Layout raíz
│   ├── page.js            # Componente principal (UI WhatsApp + lógica)
│   └── api/
│       └── chat/
│           └── route.js   # API route (proxy seguro a Anthropic)
├── package.json
├── next.config.js
├── .env.local.example     # Template de variables de entorno
└── .gitignore
```

## 🔐 Seguridad

La API key de Anthropic **nunca se expone al navegador**. Las llamadas pasan por `/api/chat` (server-side) que actúa como proxy seguro.

## 💡 Alternativas a Vercel

- **Netlify**: Mismo proceso, soporta Next.js. Añade la env var en Site Settings > Environment Variables.
- **Railway**: `railway init` → `railway up`. Añade env var en dashboard.
- **Render**: Conecta GitHub, selecciona "Web Service", añade env var.
