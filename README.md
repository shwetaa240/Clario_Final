# 🌐 Clario — Real-Time Speech & Online Audio Simplifier  
> 🏆 *Built for NIT Raipur Hackathon 2025*  
> Empowering Deaf and Hard-of-Hearing users through AI-powered transcription, simplification, and translation — from live speech **and online platforms like YouTube**.

---

## 🚀 Overview

**Clario** is an AI-powered accessibility platform designed to make spoken and online audio content understandable for everyone — including DHH (Deaf and Hard-of-Hearing) individuals.  

It captures **speech, YouTube videos, or podcasts**, converts them into text using **Faster-Whisper**, simplifies the text using **Groq’s LLM**, and translates it into multiple **Indian languages**.

💬 **In short:**  
> “We simplify the world’s audio — from real-time conversations to YouTube lectures — into clear, translated, and accessible text.”

---

## 🌟 Key Features

✅ **🎙 Real-Time Speech Transcription**  
Converts live microphone input into text using **Faster-Whisper**.

✅ **📺 YouTube & Online Audio Translation**  
Supports transcription and simplification of **YouTube videos, podcasts, and audio URLs** via extraction with `yt-dlp`.

✅ **🧠 AI Text Simplification**  
Simplifies complex sentences using the **Groq API** for clarity and understanding.

✅ **🌐 Multilingual Translation**  
Integrates the **Google Translate API** to provide translations into Indian languages (Hindi, Marathi, Tamil, Bengali, etc.).

✅ **🖥️ Accessible Web Interface**  
Frontend built with **HTML, CSS, and JavaScript** — designed for readability and simplicity.

✅ **⚙️ Seamless Backend Integration**  
Flask-based REST API hosted on **Railway**, linked with a static **Netlify** frontend.

---

## 🧠 Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| 🎧 Audio Processing | `sounddevice`, `yt-dlp`, `moviepy`, `faster-whisper` | Capture, extract & transcribe |
| 🧩 NLP Simplification | `Groq API` | Sentence simplification |
| 🌍 Translation | `Google Translate API` | Multilingual output |
| ⚙️ Backend | `Flask`, `Flask-CORS`, `Gunicorn` | RESTful API |
| 💻 Frontend | `HTML`, `CSS`, `JavaScript` | User interface |
| ☁️ Deployment | `Railway`, `Netlify` | Cloud hosting |

---

## 🔧 System Architecture

```plaintext
         🎙 Live Speech / 🎥 YouTube URL
                          ↓
          🎧 Audio Extraction (yt-dlp / sounddevice)
                          ↓
              🧠 Transcription (Faster-Whisper)
                          ↓
             ✨ Simplification (Groq LLM API)
                          ↓
          🌍 Translation (Google Translate API)
                          ↓
               💬 Display on Frontend UI
